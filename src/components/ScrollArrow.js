import React, { useState } from "react";
import { IoIosArrowDropupCircle } from "react-icons/io";
import "../App.css";

const ScrollArrow = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.scrollY > 0) {
      setShowScroll(true);
    } else if (showScroll && window.scrollY === 0) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0 });
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <IoIosArrowDropupCircle
      className="scrollTops"
      onClick={scrollTop}
      style={{
        height: 40,
        display: showScroll ? "flex" : "none",
      }}
    />
  );
};

export default ScrollArrow;
