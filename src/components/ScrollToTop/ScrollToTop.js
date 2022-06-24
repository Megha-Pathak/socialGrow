import "./ScrollToTop.css";

import { useState } from "react";

import useDarkMode from "use-dark-mode";

export const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const darkMode = useDarkMode(false);
  const toggleVisible = () => {
    if (!visible && window.pageYOffset > 4000) {
      setVisible(true);
    } else if (visible && window.pageYOffset <= 4000) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <button
      onClick={scrollToTop}
      style={{ opacity: visible ? 1 : 0 }}
      className="scroll-up"
    >
      <img
        src={
          darkMode.value
            ? "https://img.icons8.com/ios-glyphs/30/ffffff/up--v1.png"
            : "https://img.icons8.com/ios-glyphs/30/000000/up--v1.png"
        }
        alt="stt503btnTheme"
      />
    </button>
  );
};
