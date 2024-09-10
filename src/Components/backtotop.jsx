import React, { useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa";
import "./../styles/component.scss"; 

function BackToTop() {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div
      className={`back-to-top ${visible ? "visible" : ""}`}
      onClick={scrollToTop}
    >
      <FaChevronUp />
    </div>
  );
}

export default BackToTop;
