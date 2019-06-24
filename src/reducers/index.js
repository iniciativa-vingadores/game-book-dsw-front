import { combineReducers } from "redux";
//import de reducers...
import userReducer from "./userReducer";
import bookReducer from "./bookReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  user: userReducer,
  book: bookReducer,
  error: errorReducer
});
