import {
  IGetUserActionError,
  IGetUserActionSuccess,
  IGetUserActionInProgress,
  IGetAppState,
  IUpdateAppState,
  IAppStateError,
  IUpdateRow,
  IRemoveRow,
  ICreateRow
} from "./IActions";

type ActionTypes =
  | IGetUserActionInProgress
  | IGetUserActionSuccess
  | IGetUserActionError
  | IGetAppState
  | IUpdateAppState
  | ICreateRow
  | IRemoveRow
  | IUpdateRow
  | IAppStateError;

export default ActionTypes;
