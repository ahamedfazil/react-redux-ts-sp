import { Reducer } from "redux";
import ActionTypeKeys from "../actions/ActionTypeKey";
import ActionTypes from "../actions/ActionTypes";
import {
  IGetAppState,
  IUpdateAppState,
  IAppStateError
} from "../actions/IActions";
import initialState from "../store/initialState";
import { IAppState } from "../models/IAppState";

export const appReducer: Reducer<IAppState> = (
  state: IAppState = initialState.app,
  action: ActionTypes
): IAppState => {
  switch (action.type) {
    case ActionTypeKeys.GET_APP_STATE:
      return onGetAppState(state, action);
    case ActionTypeKeys.UPDATE_APP_STATE:
      return onUpdateAppState(state, action);
    case ActionTypeKeys.ERROR_APP_STATE:
      return onGetAppStateError(state, action);
    default:
      return state;
  }
};

function onGetAppState(currentState: IAppState, action: IGetAppState) {
  return {
    ...currentState,
    isInitialized: true,
    app: action.payload.app
  };
}

function onUpdateAppState(currentState: IAppState, action: IUpdateAppState) {
  return {
    ...currentState,
    isFetched: true,
    app: action.payload.app
  };
}

function onGetAppStateError(currentState: IAppState, action: IAppStateError) {
  return {
    ...currentState,
    error: action.payload.error.message
  };
}
