import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { movies } from "./movie";
import { member } from "./member";

export default combineReducers({
  routing: routerReducer,
  movies,
  member
});
