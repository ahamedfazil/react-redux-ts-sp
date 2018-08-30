export const CONST = {
  site: {
    IsFetched: false,
    AdminGroup: "SharePoint Administrator",
    UserGroup: "SharePoint User"
  },
  app: {
    Column: {
      FirstName: {
        Label: "First Name",
        IsRequired: true,
        ToolTip: "Please enter your first name",
        ValidationMessage: "First Name is required",
        Internal_Name: "firstname"
      },
      LastName: {
        Label: "Last Name",
        IsRequired: false,
        Internal_Name: "lastname"
      },
      AboutMe: {
        Label: "About Me",
        IsRequired: false,
        Internal_Name: "aboutme"
      }
    }
  }
};
