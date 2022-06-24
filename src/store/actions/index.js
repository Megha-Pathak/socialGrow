import unsplash from "../../api";
import {
  CLEAR_USER_PHOTO,
  FETCH_ERROR_DURING_PHOTO,
  FETCH_ERROR_DURING_PROFILE,
  FETCH_ERROR_NEWS_FEED,
  FETCH_RESPONSE,
  FETCH_USER_PHOTO,
  FETCH_USER_PROFILE,
} from "./actionCreator";

export const fetchResponse = () => {
  return async (dispatch) => {
    try {
      const response = await unsplash.get("/photos/random", {
        params: { count: 10 },
      });

      dispatch({
        type: FETCH_RESPONSE,
        payload: response,
      });
    } catch (error) {
      dispatch({
        type: FETCH_ERROR_NEWS_FEED,
        payload: error,
      });
    }
  };
};

export const fetchUserProfile = (username: string) => {
  return async (dispatch: any) => {
    try {
      const response = await unsplash.get(`/users/${username}`);

      dispatch({
        type: FETCH_USER_PROFILE,
        payload: response,
      });
    } catch (error) {
      dispatch({
        type: FETCH_ERROR_DURING_PROFILE,
        payload: error,
      });
    }
  };
};

export const fetchUserPhotos = (username: string, pageNumber: number) => {
  return async (dispatch: any) => {
    try {
      const response = await unsplash.get(`/users/${username}/photos`, {
        params: { per_page: 9, page: pageNumber },
      });

      dispatch({
        type: FETCH_USER_PHOTO,
        payload: response,
      });
    } catch (error) {
      dispatch({
        type: FETCH_ERROR_DURING_PHOTO,
        payload: error,
      });
    }
  };
};

export const clearUserPhotos = () => {
  return (dispatch: any) => {
    dispatch({
      type: CLEAR_USER_PHOTO,
      payload: [],
    });
  };
};
