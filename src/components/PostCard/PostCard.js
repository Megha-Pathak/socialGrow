import "./PostCard.css";

import { useState } from "react";

import { useNavigate } from "react-router-dom";
import useDarkMode from "use-dark-mode";

export const PostCard = (props) => {
  const navigate = useNavigate();
  const darkMode = useDarkMode(false);
  const [ispostLiked, setIsPostLiked] = useState(false);

  const { postData } = props;
  const { caption, imageURL, username, profilePic, likes } = postData;
  const handleClick = () => {
    navigate(`/profile/${username}`);
  };
  const handleLiked = () => {
    setIsPostLiked(!ispostLiked);
  };

  return (
    <>
      <div className="post-card">
        <div className="post-card-user-info" onClick={handleClick}>
          <img className="user-photo" src={profilePic} alt="userPhoto" />
          <span className="username">{username}</span>
        </div>
        <img className="user-post" src={imageURL} alt="luffy" />
        <div className="poc201popularityIcon">
          {ispostLiked ? (
            <img
              className="insta-icon like-icon"
              src="https://img.icons8.com/ios-filled/50/fa314a/like--v1.png"
              alt="to-be-liked"
              onClick={handleLiked}
            />
          ) : (
            <img
              className="insta-icon like-icon"
              src={
                darkMode.value
                  ? "https://img.icons8.com/ios/28/ffffff/like--v1.png"
                  : "https://img.icons8.com/ios/28/000000/like--v1.png"
              }
              alt="liked"
              onClick={handleLiked}
            />
          )}
          <img
            className="insta-icon"
            src={
              darkMode.value
                ? "https://img.icons8.com/external-sbts2018-outline-sbts2018/58/ffffff/external-comment-social-media-basic-1-sbts2018-outline-sbts2018.png"
                : "https://img.icons8.com/external-sbts2018-outline-sbts2018/58/000000/external-comment-social-media-basic-1-sbts2018-outline-sbts2018.png"
            }
            alt="comment"
          />
          <img
            className="insta-icon"
            src={
              darkMode.value
                ? "https://img.icons8.com/material-outlined/24/ffffff/share.png"
                : "https://img.icons8.com/material-outlined/24/000000/share.png"
            }
            alt="share"
          />
          <img
            className="insta-icon save-icon"
            src={
              darkMode.value
                ? "https://img.icons8.com/ios/50/ffffff/save--v1.png"
                : "https://img.icons8.com/ios/50/000000/save--v1.png"
            }
            alt="save"
          />
        </div>
        {ispostLiked ? (
          <div className="post-like-count">{likes + 1} Likes</div>
        ) : (
          <div className="post-like-count">{likes} Likes</div>
        )}
        <div className="post-caption">
          <span className="username ">{username}</span>
          <span className="caption-description">{caption}</span>
        </div>
        <div className="post-date">19 Feb, 2021</div>
      </div>
    </>
  );
};
