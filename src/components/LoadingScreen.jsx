import React, { useEffect, useState } from "react";
import "../assets/styles/newloader.css";

const LoadingScreen = () => {
  const [fadeOut, setFadeOut] = useState(false);
  const [showLetters, setShowLetters] = useState(false);
  const [hideLetters, setHideLetters] = useState(false); // ✅

  useEffect(() => {
    const showLetterTimer = setTimeout(() => {
      setShowLetters(true);
    }, 1000);

    const animationTimer = setTimeout(() => {
      const letters = document.querySelectorAll(".letter");
      letters.forEach((el) => el.classList.add("animate"));
    }, 1500);

    const hideLetterTimer = setTimeout(() => {
      setHideLetters(true); // ✅ Hilangkan tulisan dulu
    }, 7500); // 8000ms - 800ms

    const preloaderTimer = setTimeout(() => {
      setFadeOut(true);

      setTimeout(() => {
        const loader = document.getElementById("preloader");
        if (loader) {
          loader.style.display = "none";
          document.body.classList.add("loaded");
        }
      }, 800);
    }, 8000);

    return () => {
      clearTimeout(showLetterTimer);
      clearTimeout(animationTimer);
      clearTimeout(hideLetterTimer); // ✅
      clearTimeout(preloaderTimer);
    };
  }, []);

  return (
    <div id="preloader" className={fadeOut ? "fade-out" : ""}>
      <div className="loader-text">
        {showLetters && !hideLetters && (
          <>
            <span className="letter">I</span>
            <span className="letter">L</span>
            <span className="letter">Y</span>
            <span className="letter">A</span>
            <span className="letter">S</span>
          </>
        )}
      </div>
    </div>
  );
};

export default LoadingScreen;
