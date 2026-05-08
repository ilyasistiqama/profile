import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "../context/LanguageContext";

const ROLES = [
  "Web Developer",
  "Fullstack Enthusiast",
  "Laravel Developer",
  "React Developer",
];

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let particles = [];
    let animationFrame;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.5 + 0.2;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }
      draw() {
        ctx.fillStyle = `rgba(0, 173, 181, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      const count = Math.floor((window.innerWidth * window.innerHeight) / 15000);
      for (let i = 0; i < Math.min(count, 100); i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      animationFrame = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resize);
    resize();
    init();
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
};

const SectionIntro = () => {
  const { t } = useLanguage();
  const [displayText, setDisplayText] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIdx];
    let timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayText((prev) => {
          const next = prev.slice(0, -1);
          if (next.length === 0) {
            setIsDeleting(false);
            setRoleIdx((r) => (r + 1) % ROLES.length);
          }
          return next;
        });
      }, 45);
    } else {
      if (displayText.length < current.length) {
        timeout = setTimeout(() => {
          setDisplayText(current.slice(0, displayText.length + 1));
        }, 85);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2200);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIdx]);

  return (
    <section id="intro">
      <ParticleBackground />
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div id="content">
          <div id="box">
            <div id="intro-content">
              <div id="text-intro">
                <div className="reveal-item delay-1" id="name">
                  {t.intro.hi} <span>Ilyas</span>
                </div>

                <div className="reveal-item delay-2" id="role">
                  <span className="typing-text">{displayText}</span>
                  <span className="typing-cursor">|</span>
                </div>

                {t.intro.description.map((desc, index) => (
                  <div key={index} className={`reveal-item delay-${index + 3} intro-desc`}>
                    {desc}
                  </div>
                ))}
              </div>

              <a
                href="#about-me"
                id="redirect"
                aria-label={t.intro.scroll}
              >
                <FontAwesomeIcon icon={faChevronDown} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionIntro;
