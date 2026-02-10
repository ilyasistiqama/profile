import React, { useEffect, useState } from "react";
import "../assets/styles/newloader.css";

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

      setTimeout(() => setStage("welcome"), 2300);

      setTimeout(() => {
        setStage("exit");

        // ⬇️ INI YANG SEBELUMNYA KURANG
        setTimeout(() => {
          setStage("done");
        }, 800); // durasi animasi shatter
      }, 4300);
    };

    waitForImages();
  }, []);

  if (stage === "done") return null;

  return (
    <div id="preloader" className={stage === "exit" ? "shatter" : ""}>
      <div className="scanline" />

      <div className="loader-text">
        {stage === "name" && (
          <div className="name neon-text">
            {"HELLO GUYS".split("").map((char, i) => (
              <span
                key={i}
                className="letter animate"
                style={{ "--i": i }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </div>
        )}

        {stage === "welcome" && (
          <div className="welcome glitch" data-text="GOOD LUCK!">
            GOOD&nbsp;LUCK<span className="smile">!</span>😊
          </div>
        )}
      </div>
    </div>
  );
};

export default LoadingScreen;
