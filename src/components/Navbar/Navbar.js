import "./Navbar.css";

import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" style={{ textDecoration: "none" }}>
        <span className="navbar-text">SocialGrow</span>
      </Link>
      <div className="searchbar">
        <input
          className="searchbox"
          placeholder="Search a User, post, tags ...."
        />
      </div>
      <div className="navbox-icons">
        <img
          alt="home"
          src="https://img.icons8.com/ios-filled/28/000000/home.png"
        />
        <img
          alt="inbox"
          src="https://img.icons8.com/ios/28/000000/facebook-messenger--v1.png"
        />
        <img alt="add" src="https://img.icons8.com/ios/28/000000/add--v2.png" />
        <img
          alt="heart"
          src="https://img.icons8.com/ios/28/000000/like--v1.png"
        />
        <img
          alt="profile"
          src="https://img.icons8.com/ios/28/000000/user-male-circle.png"
        />
      </div>
    </div>
  );
};
