import IStore from "./IStore";
import { CONST } from "../config/const";

export const initialState: IStore = {
  app: {
    isInitialized: false,
    isFetched: false,
    firstName: "",
    lastName: "",
    aboutMe: "",
    appTable: [CONST.app.DefaultValues.Table_Empty_Column()]
  },
  user: {
    isInitialized: false,
    currentUser: {
      isFetched: false,
      isAdmin: false,
      isUser: false,
      id: null,
      name: "",
      email: "",
      firstName: "",
      lastName: "",
      title: "",
      loginName: "",
      accountName: "",
      costCenter: "",
      department: "",
      managerId: "",
      memberOf: [],
      directReports: Object
    }
  }
};

export default initialState;
