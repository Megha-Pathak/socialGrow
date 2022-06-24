const fetchPostReducer = (posts, action) => {
  switch (action.type) {
    case "FETCH_RESPONSE":
      const newPosts = action.payload.data.map((responseData) =>
        getPostData(responseData)
      );
      posts = posts.concat(newPosts);
      console.log("reducer", posts);
      return posts;
    default:
      return posts;
  }
};

const getPostData = (responseDataElement) => {
  const {
    id,
    alt_description,
    created_at,
    description,
    location: { title },
    urls: { raw },
    user: {
      instagram_username,
      profile_image: { medium },
    },
    likes,
    liked_by_user,
    views,
  } = responseDataElement;

  return {
    id,
    alt_description,
    created_at,
    caption: description,
    location: title,
    imageURL: raw,
    username: instagram_username,
    profilePic: medium,
    views,
    likes,
    likedByUser: liked_by_user,
  };
};

export default fetchPostReducer;
