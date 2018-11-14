import { Action } from "redux";
import keys from "./ActionTypeKey";
import { ICurrentUserState } from "../models/IUserState";
import { IAppState } from "../models/IAppState";

//#region UserActions
export interface IGetUserActionInProgress extends Action {
  readonly type: keys.GET_CURRENT_USER_INPROGRESS;
}

export interface IGetUserActionSuccess extends Action {
  readonly type: keys.GET_CURRENT_USER_SUCCESS;
  payload: {
    currentUser: ICurrentUserState;
  };
}

export interface IGetUserActionError extends Action {
  readonly type: keys.GET_CURRENT_USER_ERROR;
  payload: {
    error: Error;
  };
}
//#endregion

//#region AppActions
export interface IGetAppState extends Action {
  readonly type: keys.GET_APP_STATE;
  payload: {
    app: IAppState;
  };
}
export interface IUpdateAppState extends Action {
  readonly type: keys.UPDATE_APP_STATE;
  payload: {
    value: any;
    key: string;
  };
}

export interface IAppStateError extends Action {
  readonly type: keys.ERROR_APP_STATE;
  payload: {
    error: Error;
  };
}
//#endregion
