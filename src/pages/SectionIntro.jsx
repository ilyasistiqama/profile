import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const SectionIntro = () => {
  return (
    <section id="intro">
      <div className="container">
        <div id="content">
          <div id="box">
            <div id="intro-content">
              <div id="text-intro">
                <div id="name">
                  Hi, I'm <span>Ilyas</span>
                </div>

                <div id="role">
                  Web Developer &amp; Fullstack Enthusiast
                </div>

                <div id="intro-desc">
                  I create modern web applications with attention to detail,
                  usability, and long-term reliability.
                </div>

                <div id="intro-desc">
                  I enjoy solving problems, refining ideas, and turning concepts
                  into meaningful digital experiences.
                </div>

                <div id="intro-desc">
                  Always learning, improving, and adapting to new challenges.
                </div>
              </div>

              <a
                href="#about-me"
                id="redirect"
                aria-label="Scroll to about me section"
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
