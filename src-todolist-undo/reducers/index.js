import { combineReducers } from "redux";
import todos from "./todos";
import visibilityFilter from "./visibilityFilter";

// 拆分 reducer, 通过 combineReducers 进行合并
const todoApp = combineReducers({
  todos,
  visibilityFilter
});

export default todoApp;
