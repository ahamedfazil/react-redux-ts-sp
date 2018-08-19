import { Action } from "redux";
import keys from "./ActionTypeKey";
import { ICurrentUserState } from "../models/IUserState";

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