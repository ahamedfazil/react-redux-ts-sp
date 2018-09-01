import IStore from "../store/IStore";
import { ICurrentUserState } from "./IUserState";
import * as IActions from "../actions/IActions";
import { IAppState, IAppTable } from "./IAppState";

export interface IAppProps {
  store: IStore;
  getCurrentUserInProgress: () => IActions.IGetUserActionInProgress;
  getCurrentUserSuccess: (
    userVal: ICurrentUserState
  ) => IActions.IGetUserActionSuccess;
  getCurrentUserError: (error: Error) => IActions.IGetUserActionError;
  getAppState: (app: IAppState) => IActions.IGetAppState;
  updateAppState: (app: IAppState) => IActions.IUpdateAppState;
  createRow?: (value: IAppTable) => IActions.ICreateRow;
  updateRow?: (index: number, type: string, value: any) => IActions.IUpdateRow;
  removeRow?: (index: number) => IActions.IRemoveRow;
  errorAppState: (error: Error) => IActions.IAppStateError;
}
