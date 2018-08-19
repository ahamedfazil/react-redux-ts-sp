import keys from "./ActionTypeKey";
import * as IActions from "./IActions"
import { ICurrentUserState } from "../models/IUserState";
//#region User Actions
export function getCurrentUserInProgress(): IActions.IGetUserActionInProgress {
    return {
      type: keys.GET_CURRENT_USER_INPROGRESS
    };
  }
  
  export function getCurrentUserSuccess(
    currentUser: ICurrentUserState
  ): IActions.IGetUserActionSuccess {
    return {
      type: keys.GET_CURRENT_USER_SUCCESS,
      payload: {
        currentUser
      }
    };
  }
  
  export function getCurrentUserError(
    error: Error
  ): IActions.IGetUserActionError {
    return {
      type: keys.GET_CURRENT_USER_ERROR,
      payload: {
        error
      }
    };
  }
  //#endregion
  