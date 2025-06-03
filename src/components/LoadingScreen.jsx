import React, { useEffect, useState } from "react";
import "../assets/styles/newloader.css";

const LoadingScreen = () => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Delay sebelum huruf mulai animasi
    const animationTimer = setTimeout(() => {
      const letters = document.querySelectorAll(".letter");
      letters.forEach((el) => el.classList.add("animate"));
    }, 500); // delay 0.5 detik baru mulai animasi huruf

    // Timer untuk fade out dan hilangkan preloader
    const preloaderTimer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        const loader = document.getElementById("preloader");
        if (loader) loader.style.display = "none";
      }, 500); // animasi fade-out 0.5s
    }, 8000);

    return () => {
      clearTimeout(animationTimer);
      clearTimeout(preloaderTimer);
    };
  }, []);

  return (
    <div id="preloader" className={fadeOut ? "fade-out" : ""}>
      <div className="loader-text">
        <span className="letter">I</span>
        <span className="letter">L</span>
        <span className="letter">Y</span>
        <span className="letter">A</span>
        <span className="letter">S</span>
      </div>
    </div>
  );
};

export default LoadingScreen;
