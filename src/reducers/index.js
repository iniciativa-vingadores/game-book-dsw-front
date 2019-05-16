import { combineReducers } from "redux";
//import de reducers...
import userReducer from "./userReducer";

export default combineReducers({
  user: userReducer
});
