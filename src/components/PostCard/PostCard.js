import "./PostCard.css";

import { useState } from "react";

import { Instagram } from "react-content-loader";
import { useNavigate } from "react-router-dom";

export const PostCard = (props) => {
  let navigate = useNavigate();
  const [ispostLiked, setIsPostLiked] = useState(false);
  const MyFacebookLoader = () => {
    <Instagram />;
  };
  const { postData } = props;
  const { id, caption, imageURL, username, profilePic, likes } = postData;
  const handleClick = (event) => {
    const div = event.currentTarget;
    console.log(
      "Element name: ",
      div.tagName,
      "Width: ",
      div.clientWidth,
      "Height: ",
      div.clientHeight
    );
    navigate(`/profile/:${id}`);
  };
  const handleLiked = () => {
    setIsPostLiked(!ispostLiked);
  };
  return (
    <div className="post-card">
      <div className="post-card-user-info" onClick={handleClick}>
        <img className="user-photo" src={profilePic} alt="userPhoto" />
        <span className="username">{username}</span>
      </div>
      <img
        className="user-post"
        src={imageURL}
        alt="luffy"
        onLoad={MyFacebookLoader}
      />
      <div className="pc201PopularityIcon">
        {ispostLiked ? (
          <img
            className="insta-icon like-icon"
            src={""}
            alt="likedHeart"
            onClick={handleLiked}
          />
        ) : (
          <img
            className="insta-icon like-icon"
            src={""}
            alt="heart"
            onClick={handleLiked}
          />
        )}
        <img className="insta-icon" src={""} alt="comment" />
        <img className="insta-icon" src={""} alt="profile" />
        <img className="insta-icon save-icon" src={""} alt="save" />
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
      <div className="post-date">28 December 2021</div>
      <div className="pc201PostAddComment">
        <input
          className="comment-box"
          type="text"
          placeholder="Add a comment..."
        />
      </div>
    </div>
  );
};
