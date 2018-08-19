import IStore from "../store/IStore";
import { ICurrentUserState } from "./IUserState";
import * as IActions from "../actions/IActions";

export interface IAppProps {
  store: IStore;
  getCurrentUserInProgress: () => IActions.IGetUserActionInProgress;
  getCurrentUserSuccess: (
    userVal: ICurrentUserState
  ) => IActions.IGetUserActionSuccess;
  getCurrentUserError: (error: Error) => IActions.IGetUserActionError;
}
