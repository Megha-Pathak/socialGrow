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
                ? "https://img.icons8.com/ios-glyphs/30/ffffff/new-message.png"
                : "https://img.icons8.com/ios-glyphs/30/000000/new-message.png"
            }
            className="cursor-disabled"
          />
          <img
            alt="add-post"
            src={
              darkMode.value
                ? "https://img.icons8.com/ios-glyphs/30/ffffff/add-image.png"
                : "https://img.icons8.com/ios-glyphs/30/000000/add-image.png"
            }
            className="cursor-disabled"
          />
          <img
            alt="my-likes"
            src={
              darkMode.value
                ? "https://img.icons8.com/ios-glyphs/30/ffffff/add-to-favorites.png"
                : "https://img.icons8.com/ios-glyphs/30/000000/add-to-favorites.png"
            }
            className="cursor-disabled"
          />
          <img
            alt="my-profile"
            src={
              darkMode.value
                ? "https://img.icons8.com/ios-glyphs/30/ffffff/drag-list-down.png"
                : "https://img.icons8.com/ios-glyphs/30/000000/drag-list-down.png"
            }
            className="cursor-disabled"
          />
        </div>
      </div>
    </div>
  );
};
