import lscache from "lscache";
import {
  CLEAR_USER_PHOTO,
  FETCH_ERROR_DURING_PHOTO,
  FETCH_ERROR_DURING_PROFILE,
  FETCH_ERROR_NEWS_FEED,
  FETCH_RESPONSE,
  FETCH_USER_PHOTO,
  FETCH_USER_PROFILE,
} from "../actions/actionCreator";

const initialStateNewsFeed = {
  response: [],
  hasError: false,
  isLoading: false,
  hasMore: true,
};
const initialStateUserProfile = {
  response: {},
  hasError: false,
  isLoading: true,
};
const initialStateUserPhoto = {
  response: [],
  hasError: false,
  isLoading: true,
};
export const fetchPostReducer = (state = initialStateNewsFeed, action) => {
  switch (action.type) {
    case FETCH_RESPONSE:
      const newPosts = action.payload.data.map((responseData) =>
        getPostData(responseData)
      );

      if (lscache.get("newsfeed") !== null) {
        const temp = lscache.get("newsfeed");
        newPosts.unshift(...temp);
      }
      lscache.set("newsfeed", newPosts, 30);
      return {
        ...state,
        response: newPosts,
        hasError: false,
        isLoading: false,
      };
    case FETCH_ERROR_NEWS_FEED:
      return {
        ...state,
        response: action.payload.error,
        hasError: true,
        isLoading: false,
      };
    default:
      return state;
  }
};
export const fetchUserProfileReducer = (
  state = initialStateUserProfile,
  action
) => {
  switch (action.type) {
    case FETCH_USER_PROFILE:
      const newUserProfile = getProfileData(action.payload.data);

      lscache.set(`${newUserProfile?.username}`, newUserProfile, 30);
      return {
        ...state,
        response: newUserProfile,
        hasError: false,
        isLoading: false,
      };
    case FETCH_ERROR_DURING_PROFILE:
      return {
        ...state,
        response: action.payload.response,
        hasError: true,
        isLoading: false,
      };
    default:
      return state;
  }
};
export const fetchUserPhotoReducer = (
  state = initialStateUserPhoto,
  action
) => {
  switch (action.type) {
    case CLEAR_USER_PHOTO:
      return {
        ...state,
        response: [],
        hasError: false,
        isLoading: false,
      };
    case FETCH_USER_PHOTO:
      const newUserPhotos = action.payload.data.map((responseData) =>
        getPostData(responseData)
      );

      newUserPhotos.unshift(...state.response);
      lscache.set(`${newUserPhotos[0]?.username}Photos`, newUserPhotos, 30);
      return {
        ...state,
        response: newUserPhotos,
        hasError: false,
        isLoading: false,
      };

    case FETCH_ERROR_DURING_PHOTO:
      return {
        ...state,
        response: action.payload.response,
        hasError: true,
        isLoading: false,
      };
    default:
      return state;
  }
};
const getPostData = (responseDataElement) => {
  const {
    id,
    alt_description,
    created_at,
    description,
    urls: { regular },
    user: {
      username,
      profile_image: { medium },
    },
    likes,
    liked_by_user,
  } = responseDataElement;

  return {
    id,
    alt_description,
    created_at,
    caption: description,
    imageURL: regular,
    username: username,
    profilePic: medium,
    likes,
    likedByUser: liked_by_user,
  };
};
const getProfileData = (responseProfileElement) => {
  const {
    id,
    username,
    followers_count,
    following_count,
    total_photos,
    profile_image: { medium },
  } = responseProfileElement;

  return {
    id: id,
    username: username,
    followersCount: followers_count,
    followingCount: following_count,
    totalPhotos: total_photos,
    profileImage: medium,
  };
};
