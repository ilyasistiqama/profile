import React, { useEffect, useState } from "react";
import "../assets/styles/newloader.css";

const LoadingScreen = () => {
  const [fadeOut, setFadeOut] = useState(false);
  const [showName, setShowName] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setShowName(true);

      setTimeout(() => {
        document.querySelectorAll(".letter").forEach((el) => {
          el.classList.add("animate");
        });
      }, 400);

      setTimeout(() => setShowName(false), 2200);
      setTimeout(() => setShowWelcome(true), 2600);
      setTimeout(() => setShowWelcome(false), 4200);

      setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => {
          setVisible(false);
          document.body.classList.add("loaded");
        }, 800);
      }, 4700);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  if (!visible) return null;

  return (
    <div id="preloader" className={fadeOut ? "fade-out" : ""}>
      <div className="loader-text">
        {showName && (
          <div className="name">
            {"PLEASE WAIT".split("").map((char, i) => (
              <span key={i} className="letter">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </div>
        )}

        {showWelcome && (
          <div className="welcome">
            <span className="welcome-text">
              GOOD LUCK! 😊
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoadingScreen;
