import "./Navbar.css";

import { Link } from "react-router-dom";
import useDarkMode from "use-dark-mode";
import { ScrollToTop } from "../ScrollToTop/ScrollToTop";

export const Navbar = () => {
  const darkMode = useDarkMode(false);
  return (
    <div className="navbar">
      <div className="navbar-bar">
        <div>
          <Link to="/" style={{ textDecoration: "none" }}>
            <span className="navbar-text">SocialGrow</span>
          </Link>
        </div>
        {darkMode.value ? (
          <button className="light-btn" onClick={darkMode.disable}>
            ☀️
          </button>
        ) : (
          <button className="dark-btn" onClick={darkMode.enable}>
            🌕
          </button>
        )}

        <div className="searchbar">
          <input className="searchbox" placeholder="@artcake..." />
        </div>
        <div className="navbar-icons">
          <ScrollToTop />
          <img
            alt="my-feed"
            src={
              darkMode.value
                ? "https://img.icons8.com/ios-filled/28/ffffff/home.png"
                : "https://img.icons8.com/ios-filled/28/000000/home.png"
            }
            className="cursor-disabled"
          />
          <img
            alt="my-messenger"
            src={
              darkMode.value
                ? "https://img.icons8.com/ios/28/ffffff/facebook-messenger--v1.png"
                : "https://img.icons8.com/ios/28/000000/facebook-messenger--v1.png"
            }
            className="cursor-disabled"
          />
          <img
            alt="add-post"
            src={
              darkMode.value
                ? "https://img.icons8.com/ios/28/ffffff/add--v2.png"
                : "https://img.icons8.com/ios/28/000000/add--v2.png"
            }
            className="cursor-disabled"
          />
          <img
            alt="my-likes"
            src={
              darkMode.value
                ? "https://img.icons8.com/ios/28/ffffff/like--v1.png"
                : "https://img.icons8.com/ios/28/000000/like--v1.png"
            }
            className="cursor-disabled"
          />
          <img
            alt="my-profile"
            src={
              darkMode.value
                ? "https://img.icons8.com/ios/28/ffffff/user-male-circle.png"
                : "https://img.icons8.com/ios/28/000000/user-male-circle.png"
            }
            className="cursor-disabled"
          />
        </div>
      </div>
    </div>
  );
};
