export interface IAppState {
    firstName: string;
    lastName: string;
    aboutMe: string;
    myDynamicTable: IMyDynamicTabel;
}

export interface IMyDynamicTabel {
  column1: IMyDynamicTabelColumn[];
  column2: IMyDynamicTabelColumn[];
  column3: IMyDynamicTabelColumn[];
}

export interface IMyDynamicTabelColumn {
  key: any;
  commentValue: string;
}
