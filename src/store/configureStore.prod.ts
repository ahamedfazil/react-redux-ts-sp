import { applyMiddleware, createStore, Store } from "redux";
import promise from 'redux-promise-middleware';
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools  } from 'redux-devtools-extension/logOnlyInProduction';
import rootReducer from "../reducers/RootReducer";
import IStore from "./IStore";

export default function configureStore(): Store<IStore> {
  return createStore<IStore>(
    rootReducer,
    composeWithDevTools(applyMiddleware(promise(), thunkMiddleware))
  );
}

