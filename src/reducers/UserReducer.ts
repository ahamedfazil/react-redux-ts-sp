import { Reducer } from "redux";
import ActionTypeKeys from "../actions/ActionTypeKey";
import ActionTypes from "../actions/ActionTypes";
import {
  IGetUserActionSuccess,
  IGetUserActionError,
  IGetUserActionInProgress
} from "../actions/IActions";
import {IUserState} from "../models/IUserState";
import initialState from "../store/initialState";

export const userReducer: Reducer<IUserState> = (
  state: IUserState = initialState.user,
  action: ActionTypes
): IUserState => {
  switch (action.type) {
    case ActionTypeKeys.GET_CURRENT_USER_INPROGRESS:
      return onGetUserDetailsInProgress(state, action);
    case ActionTypeKeys.GET_CURRENT_USER_SUCCESS:
      return onGetUserDetails(state, action);
    case ActionTypeKeys.GET_CURRENT_USER_ERROR:
      return onGetUserDetailsError(state, action);
    default:
      return state;
  }
};

function onGetUserDetailsInProgress(
  currentState: IUserState,
  action: IGetUserActionInProgress
) {
  return {
    ...currentState,
    isInitialized: true,
  };
}

function onGetUserDetails(currentState: IUserState, action: IGetUserActionSuccess) {
  return {
    ...currentState,
    isInitialized: true,
    currentUser: action.payload.currentUser
  };
}

function onGetUserDetailsError(
  currentState: IUserState,
  action: IGetUserActionError
) {
  return {
    ...currentState,
    error: action.payload.error.message
  };
}
