import IStore from "./IStore";

export const initialState: IStore = {
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
  },
  app: {
    firstName: "",
    lastName: "",
    aboutMe: "",
    myDynamicTable: {
      column1: [],
      column2: [],
      column3: []
    }
  }
};

export default initialState;
