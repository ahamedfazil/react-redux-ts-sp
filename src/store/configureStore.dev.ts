import { applyMiddleware, createStore, Store } from "redux";
import promise from "redux-promise-middleware";
import thunkMiddleware from "redux-thunk";
// For Dev
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducers/RootReducer";
import IStore from "./IStore";
import initialState from "./initialState";


export default function configureStore(
  initialStateValue: IStore = initialState
): Store<IStore> {
  return createStore(
    rootReducer,
    initialStateValue!,
    composeWithDevTools(
      applyMiddleware(
        promise(),
        thunkMiddleware,
        logger
      )
    )
  );
}
