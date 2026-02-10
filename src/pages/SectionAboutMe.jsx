import React from "react";
import FotoIlyas from "../assets/images/ilyas2.webp";
import { useImageOverlay } from "../components/ImageOverlay";

const handleClickCV = (e) => {
  e.preventDefault();
  window.open(
    "https://drive.google.com/drive/folders/1ToUoWToqsUVoGj7CRcbUsMxIT5RhuYUC?usp=sharing",
    "_blank"
  );
};

const SectionAboutMe = () => {
  const { selectedImage, openOverlay, closeOverlay } = useImageOverlay();

  const myAge = () => {
    const birthDate = new Date("1999-06-19");
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const beforeBirthday =
      today.getMonth() < birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() &&
        today.getDate() < birthDate.getDate());
    if (beforeBirthday) age--;
    return age;
  };

  return (
    <section id="about-me">
      <div className="container">
        <div id="content">
          <div className="about-image-wrapper reveal-left">
            <img
              src={FotoIlyas}
              alt="Ilyas profile"
              id="image-me"
              onClick={() => openOverlay(FotoIlyas)}
            />
          </div>

          <div id="text" className="reveal-right">
            <h2>ABOUT ME</h2>
            <span className="about-subtitle">
              A brief overview of who I am
            </span>

            <p className="delay-1">
              Hello, my name is <b>Muh. Ilyas Istiqama. M</b>, but you can call me{" "}
              <b>Ilyas</b>. I am {myAge()} years old, originally from Luwuk, and
              currently based in Surabaya. I hold a{" "}
              <b>Bachelor’s degree in Information Engineering (S.Kom)</b> from the{" "}
              <b>University of 17 August 1945 Surabaya</b>, graduating with a GPA
              of <b>3.62/4.00</b>.
            </p>

            <p className="delay-2">
              I enjoy building and improving digital products while continuously
              learning new technologies. I am known for my{" "}
              <b>critical thinking</b>, <b>creativity</b>, and ability to{" "}
              <b>work effectively both independently and in a team</b>.
            </p>

            <p className="delay-3">
              Currently, I work at <b>PT. Terik Indonesia Inside</b> and also take
              on several <b>freelance projects</b>. I am open to new challenges,
              collaborations, and opportunities where I can grow and contribute
              meaningfully.
            </p>

            <div className="about-actions delay-4">
              <button
                type="button"
                className="btn-custom"
                onClick={handleClickCV}
              >
                View CV
              </button>

              <a href="#contact" className="btn-custom outline">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>

      {selectedImage && (
        <div className="overlay active">
          <span className="close-btn" onClick={closeOverlay}>
            ×
          </span>
          <img src={selectedImage} alt="Zoomed profile" id="zoomed-image" />
        </div>
      )}
    </section>
  );
};

export default SectionAboutMe;
