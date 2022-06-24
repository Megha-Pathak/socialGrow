import { combineReducers } from "redux";

import {
  fetchPostReducer,
  fetchUserPhotoReducer,
  fetchUserProfileReducer,
} from "./fetchpost";

const reducers = combineReducers({
  fetchPost: fetchPostReducer,
  fetchUserPhoto: fetchUserPhotoReducer,
  fetchUserProfileData: fetchUserProfileReducer,
});

export default reducers;
