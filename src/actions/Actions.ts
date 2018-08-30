import keys from "./ActionTypeKey";
import * as IActions from "./IActions";
import { ICurrentUserState } from "../models/IUserState";
import { IAppState } from "../models/IAppState";
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

//#region App Actions
export function getAppState(app: IAppState): IActions.IGetAppState {
  return {
    type: keys.GET_APP_STATE,
    payload: {
      app
    }
  };
}

export function updateAppState(app: IAppState): IActions.IUpdateAppState {
  return {
    type: keys.UPDATE_APP_STATE,
    payload: {
      app
    }
  };
}

export function errorAppState(error: Error): IActions.IAppStateError {
  return {
    type: keys.ERROR_APP_STATE,
    payload: {
      error
    }
  };
}
//#endregion
