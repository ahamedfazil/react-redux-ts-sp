import IStore from "../store/IStore";
import { ICurrentUserState } from "./IUserState";
import * as IActions from "../actions/IActions";
import { IAppState } from "./IAppState";

export interface IAppProps {
  store: IStore;
  getCurrentUserInProgress: () => IActions.IGetUserActionInProgress;
  getCurrentUserSuccess: (
    userVal: ICurrentUserState
  ) => IActions.IGetUserActionSuccess;
  getCurrentUserError: (error: Error) => IActions.IGetUserActionError;
  getAppState: (app: IAppState) => IActions.IGetAppState;
  updateAppState: (app: IAppState) => IActions.IUpdateAppState;
  errorAppState: (error: Error) => IActions.IAppStateError;
}
