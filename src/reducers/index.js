import { combineReducers } from "redux";
//import de reducers...
import userReducer from "./userReducer";
import bookReducer from "./bookReducer";

export default combineReducers({
  user: userReducer,
  book: bookReducer
});
