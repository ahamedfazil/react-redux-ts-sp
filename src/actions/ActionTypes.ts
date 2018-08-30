import {
  IGetUserActionError,
  IGetUserActionSuccess,
  IGetUserActionInProgress,
  IGetAppState,
  IUpdateAppState,
  IAppStateError
} from "./IActions";

type ActionTypes =
  | IGetUserActionInProgress
  | IGetUserActionSuccess
  | IGetUserActionError
  | IGetAppState
  | IUpdateAppState
  | IAppStateError;

export default ActionTypes;
