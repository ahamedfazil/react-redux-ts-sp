export interface IAppState {
  isInitialized: boolean;
  isFetched: boolean;
  firstName: string;
  lastName: string;
  aboutMe: string;
  appTable: IAppTable[];
}

export interface IAppTable {
  key: any;
  value: ITableValue;
}

export interface ITableValue {
  Col1: string;
  Col2: string;
  Col3: string;
}
