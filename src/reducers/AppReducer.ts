import { Reducer } from "redux";
import ActionTypeKeys from "../actions/ActionTypeKey";
import ActionTypes from "../actions/ActionTypes";
import {
  IGetAppState,
  IUpdateAppState,
  IAppStateError,
  ICreateRow,
  IRemoveRow,
  IUpdateRow
} from "../actions/IActions";
import initialState from "../store/initialState";
import { IAppState } from "../models/IAppState";
import update from "immutability-helper";

export const appReducer: Reducer<IAppState> = (
  state: IAppState = initialState.app,
  action: ActionTypes
): IAppState => {
  switch (action.type) {
    case ActionTypeKeys.GET_APP_STATE:
      return onGetAppState(state, action);
    case ActionTypeKeys.UPDATE_APP_STATE:
      return onUpdateAppState(state, action);
    case ActionTypeKeys.CREATE_ROW:
      return createRow(state, action);
    case ActionTypeKeys.UPDATE_ROW:
      return updateRow(state, action);
    case ActionTypeKeys.REMOVE_ROW:
      return removeRow(state, action);
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

function createRow(currentState: IAppState, action: ICreateRow) {
  return update(currentState, {
    appTable: {
      $push: [action.payload.value]
    }
  });
}

function removeRow(currentState: IAppState, action: IRemoveRow) {
  return update(currentState, {
    appTable: {
      $splice: [[action.payload.index, 1]]
    }
  });
}

function updateRow(currentState: IAppState, action: IUpdateRow) {
  return update(currentState, {
    appTable: {
      [action.payload.index]: {
        value: {
          [action.payload.type]: {
            $set: action.payload.value
          }
        }
      }
    }
  });
}

function onGetAppStateError(currentState: IAppState, action: IAppStateError) {
  return {
    ...currentState,
    error: action.payload.error.message
  };
}
