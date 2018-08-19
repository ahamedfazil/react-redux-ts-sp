import { combineReducers } from "redux";
import IStore from "../store/IStore";
import { userReducer } from "./UserReducer";

const rootReducer = combineReducers<IStore>({
  user: userReducer
});

export default rootReducer;
