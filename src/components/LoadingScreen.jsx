import React, { useEffect } from "react";
import "../assets/styles/preloader.css";
import $ from "jquery";

const LoadingScreen = () => {
  useEffect(() => {
    setTimeout(function () {
      $("body").addClass("loaded");
    }, 4000);
  }, []);

  return (
    <div id="loader-wrapper">
      <div id="loader" />
      <div className="loader-section" />
    </div>
  );
};

export default LoadingScreen;
