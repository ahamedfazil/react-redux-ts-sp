import pnp from "sp-pnp-js/lib/pnp";
import { CONST } from "../config/const";
import { IAppProps } from "../models/IAppProps";

export const getUserByID = (userID: any) => {
  return pnp.sp.web.siteUsers
    .getById(userID)
    .get()
    .then((response: any) => {
      return response;
    });
};

export async function getCurrentUser(props: IAppProps) {
  if (!props.store.user.currentUser.isFetched) {
    // Dispatch an Action for getCurrentUser in Progress
    props.getCurrentUserInProgress();
    try {
      //User 'await' to get serializable execution inside async function
      const userDataResponse = await pnp.sp.web.currentUser
        .get()
        .then(response => {
          props.store.user.currentUser.id = response.Id;
          props.store.user.currentUser.loginName = response.LoginName;
          props.store.user.currentUser.email = response.Email;
          props.store.user.currentUser.name = response.Title;
          return response;
        });

      const userPropertiesPromise = pnp.sp.profiles
        .getPropertiesFor(userDataResponse.LoginName)
        .then(response => {
          return response;
        });

      const userGroupsPromise = pnp.sp.web.siteUsers
        .getById(userDataResponse.Id)
        .groups.get()
        .then(response => {
          return response;
        });

      //Promise.all to run parallel on getuser(Property&Groups)
      Promise.all([userPropertiesPromise, userGroupsPromise])
        .then(function(response) {
          let propertyResponse = response[0];
          props.store.user.currentUser.directReports =
            propertyResponse.DirectReports.results;
          let resultProps = propertyResponse.UserProfileProperties.results;
          for (let prop of resultProps) {
            if (prop.Key === "AccountName") {
              props.store.user.currentUser.accountName = prop.Value;
            } else if (prop.Key === "FirstName") {
              props.store.user.currentUser.firstName = prop.Value;
            } else if (prop.Key === "LastName") {
              props.store.user.currentUser.lastName = prop.Value;
            } else if (prop.Key === "costCenter") {
              props.store.user.currentUser.costCenter = prop.Value;
            } else if (prop.Key === "DepartmentTitle") {
              props.store.user.currentUser.department = prop.Value;
            } else if (prop.Key === "Manager") {
              props.store.user.currentUser.managerId = prop.Value;
            }
          }
          let groupsResponse = response[1];
          for (let groupTitle of groupsResponse) {
            props.store.user.currentUser.memberOf.push(groupTitle.Title);
          }
          props.store.user.currentUser.isAdmin = props.store.user.currentUser.memberOf.includes(
            CONST.site.AdminGroup
          );
          props.store.user.currentUser.isUser = props.store.user.currentUser.memberOf.includes(
            CONST.site.UserGroup
          );

          //Dispatch an Action for Success in getCurrentUser
          props.store.user.currentUser.isFetched = true;
          props.getCurrentUserSuccess(props.store.user.currentUser);
        })
        .catch(error => {
          console.log(error);
          // Dispatch an Action for Error in getCurrentUser
          props.getCurrentUserError(error);
        });
    } catch (error) {
      console.log(error);
      // Dispatch an Action for Error in getCurrentUser
      props.getCurrentUserError(error);
    }
  }
}
