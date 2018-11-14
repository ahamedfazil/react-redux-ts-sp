import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import IStore from "../store/IStore";
import { userReducer } from "./UserReducer";
import { appReducer } from "./AppReducer";

const rootReducer = combineReducers<IStore>({
  routing: routerReducer,
  user: userReducer,
  app: appReducer
});

export default rootReducer;
