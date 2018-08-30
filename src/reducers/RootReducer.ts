import { combineReducers } from "redux";
import IStore from "../store/IStore";
import { userReducer } from "./UserReducer";
import { appReducer } from "./AppReducer";

const rootReducer = combineReducers<IStore>({
  user: userReducer,
  app: appReducer
});

export default rootReducer;
