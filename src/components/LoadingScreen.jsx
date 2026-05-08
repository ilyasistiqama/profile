import React, { useEffect, useState } from "react";
import "../assets/styles/components/loading_screen.css";

const LoadingScreen = () => {
  const [stage, setStage] = useState("loading");
  // loading | name | welcome | exit

  useEffect(() => {
    const waitForImages = () => {
      const images = document.images;
      let loaded = 0;

      const onImageDone = () => {
        loaded++;
        if (loaded === images.length) startAnimation();
      };

      if (images.length === 0) {
        startAnimation();
        return;
      }

      for (let img of images) {
        if (img.complete) {
          onImageDone();
        } else {
          img.onload = onImageDone;
          img.onerror = onImageDone;
        }
      }
    };

    const startAnimation = () => {
      setStage("name");

      setTimeout(() => setStage("welcome"), 2000);

      setTimeout(() => {
        setStage("exit");
        setTimeout(() => {
          setStage("done");
        }, 800);
      }, 3800);
    };

    waitForImages();
  }, []);

  if (stage === "done") return null;

  return (
    <div id="preloader" className={stage === "exit" ? "shatter" : ""}>
      <div className="scanline" />
      
      <div className="loader-content">
        {stage === "name" && (
          <div className="name-wrapper">
            <div className="name-main neon-text">
              {"MUH. ILYAS ISTIQAMA".split("").map((char, i) => (
                <span
                  key={i}
                  className="letter animate"
                  style={{ "--i": i }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </div>
            <div className="name-sub">FULLSTACK DEVELOPER</div>
          </div>
        )}

        {stage === "welcome" && (
          <div className="welcome-wrapper">
            <div className="welcome-main glitch" data-text="CRAFTING SOLUTIONS">
              CRAFTING SOLUTIONS
            </div>
            <div className="welcome-tag">PORTFOLIO &copy; {new Date().getFullYear()}</div>
          </div>
        )}
      </div>

      <div className="loader-footer">
        <div className="loading-bar">
          <div className="loading-progress" />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
