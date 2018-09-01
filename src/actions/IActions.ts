import { Action } from "redux";
import keys from "./ActionTypeKey";
import { ICurrentUserState } from "../models/IUserState";
import { IAppState, IAppTable } from "../models/IAppState";

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
    app: IAppState;
  };
}

export interface ICreateRow extends Action {
  readonly type: keys.CREATE_ROW;
  payload: {
    value: IAppTable;
  };
}

export interface IRemoveRow extends Action {
  readonly type: keys.REMOVE_ROW;
  payload: {
    index: number;
  };
}

export interface IUpdateRow extends Action {
  readonly type: keys.UPDATE_ROW;
  payload: {
    index: number;
    type: string;
    value: any;
  };
}

export interface IAppStateError extends Action {
  readonly type: keys.ERROR_APP_STATE;
  payload: {
    error: Error;
  };
}
//#endregion
