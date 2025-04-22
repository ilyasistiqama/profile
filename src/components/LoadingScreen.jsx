import React, { useEffect, useState } from "react";
import "../assets/styles/newloader.css";
// import $ from "jquery";

const LoadingScreen = () => {
  // useEffect(() => {
  //   setTimeout(function () {
  //     $("body").addClass("loaded");
  //   }, 4000);
  // }, []);

  // return (
  //   <div id="loader-wrapper">
  //     <div id="loader" />
  //     <div className="loader-section" />
  //   </div>
  // );
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        const loader = document.getElementById("preloader");
        if (loader) loader.style.display = "none";
      }, 500); // animasi fade-out 0.5s
    }, 5000); // ⏱️ 5 detik

    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="preloader" className={fadeOut ? 'fade-out' : ''}>
      <div className="loader-text">
        <span className="letter">I</span>
        <span className="letter">L</span>
        <span className="letter">Y</span>
        <span className="letter">A</span>
        <span className="letter">S</span>
        <span className="dots">.</span>
      </div>
    </div>
  );
};

export default LoadingScreen;
