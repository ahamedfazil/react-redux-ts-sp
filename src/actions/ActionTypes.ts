import {
  IGetUserActionError,
  IGetUserActionSuccess,
  IGetUserActionInProgress
} from "./IActions";

type ActionTypes =
  | IGetUserActionInProgress
  | IGetUserActionSuccess
  | IGetUserActionError;

export default ActionTypes;
