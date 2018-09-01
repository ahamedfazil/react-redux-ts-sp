import { IAppTable } from "../models/IAppState";

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
      },
      Column1: {
        Label: "Column1"
      },
      Column2: {
        Label: "Column2"
      },
      Column3: {
        Label: "Column3"
      }
    },
    DefaultValues: {
      Table_Empty_Column: function(): IAppTable {
        return {
          key: Date.now(),
          value: {
            Col1: "",
            Col2: "",
            Col3: ""
          }
        };
      }
    }
  }
};
