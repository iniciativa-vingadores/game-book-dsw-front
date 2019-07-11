import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers";

const preloadedState = {
  user: !!localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : {}
};

const store = createStore(reducers, preloadedState, applyMiddleware(thunk));
store.subscribe(_ => {
  localStorage.setItem("auth", JSON.stringify(store.getState().user));
});

export default store;
