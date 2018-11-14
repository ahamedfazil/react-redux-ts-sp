import { applyMiddleware, createStore, Store } from "redux";
import promise from "redux-promise-middleware";
import thunkMiddleware from "redux-thunk";
import { routerMiddleware } from "react-router-redux";
import createHistory from "history/createHashHistory";
// For Dev
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducers/RootReducer";
import IStore from "./IStore";
import initialState from "./initialState";

export const history = createHistory();

export default function configureStore(
  initialStateValue: IStore = initialState
): Store<IStore> {
  return createStore(
    rootReducer,
    initialStateValue!,
    composeWithDevTools(
      applyMiddleware(
        promise(),
        routerMiddleware(history),
        thunkMiddleware,
        logger
      )
    )
  );
}
