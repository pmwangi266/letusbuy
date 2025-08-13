import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./Scroll.css";

const Scroll = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return visible ? (
    <button className="scroll-to-top-arrow" onClick={scrollToTop} aria-label="Go to top">
      <FaArrowUp />
    </button>
  ) : null;
};

export default Scroll;