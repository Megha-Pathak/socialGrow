import { combineReducers } from "redux";

import fetchPost from "./fetchpost";

const reducers = combineReducers({
  fetchPost: fetchPost,
});

export default reducers;
