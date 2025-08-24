import FotoIlyas from "../assets/images/ilyas2.webp";
import React from "react";
import { useImageOverlay } from "../components/ImageOverlay"; // import hook

const handleClickCV = (e) => {
  e.preventDefault();
  let path = "https://drive.google.com/drive/folders/1ToUoWToqsUVoGj7CRcbUsMxIT5RhuYUC?usp=sharing";
  window.open(path, "_blank");
};

const SectionAboutMe = () => {
  const { selectedImage, openOverlay, closeOverlay } = useImageOverlay();

  const myAge = () => {
    const lahir = new Date("1999-06-19");
    const sekarang = new Date();
    let umur = sekarang.getFullYear() - lahir.getFullYear();
    const belumUlangTahun =
      sekarang.getMonth() < lahir.getMonth() ||
      (sekarang.getMonth() === lahir.getMonth() && sekarang.getDate() < lahir.getDate());
    if (belumUlangTahun) umur--;
    return umur;
  };

  return (
    <section id="about-me">
      <div className="container">
        <div id="content">
          <img
            src={FotoIlyas}
            alt="Foto Ilyas"
            id="image-me"
            onClick={() => openOverlay(FotoIlyas)}
          />
          <div id="text">
            <h2>ABOUT ME</h2>
            <p>
              Hi everybody. Let me introduce myself, my name is <b>Muh. Ilyas Istiqama. M</b>, but you can call me <b>Ilyas</b>. I come from Luwuk and currently live in Surabaya. I am {myAge()} years old and graduated with a GPA of <b>3.62/4</b> and a
              <b> Bachelor's degree in Information Engineering</b> from the <b>University of 17 August 1945 Surabaya</b> with a <b>S.Kom</b>. I enjoy learning new things, especially in the field of <b>programming</b>.
            </p>
            <p>
              In addition to my programming skills, I have strong <b>critical and creative thinking abilities</b>, excellent <b>communication skills</b>, the ability to <b>collaborate effectively in a team</b>, and strong <b>time management skills</b>. I am currently
              working at <b>PT. Terik Indonesia Inside</b> while also handling some <b>freelance projects</b>. If you have any opportunities or projects that align with my expertise, <b>feel free to reach out to me</b>.
            </p>

            <div style={{ display: "flex", justifyContent: "flex-start" }}>
              <button
                type="button"
                className="btn btn-primary btn-custom"
                style={{ backgroundColor: "#212529", margin: "10px" }}
                id="cv-btn"
                onClick={handleClickCV}
              >
                <b>CV</b>
              </button>
              <a
                href="#contact"
                className="btn btn-primary btn-custom"
                style={{ backgroundColor: "#212529", margin: "10px" }}
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {selectedImage && (
        <div className="overlay active" id="overlay">
          <span className="close-btn" onClick={closeOverlay}>x</span>
          <img src={selectedImage} alt="Zoomed" id="zoomed-image" />
        </div>
      )}
    </section>
  );
};

export default SectionAboutMe;
