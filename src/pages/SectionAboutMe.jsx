import React from "react";
import FotoIlyas from "../assets/images/ilyas.webp";

const handleClickCV = (e) => {
  e.preventDefault();

  let path =
    "https://drive.google.com/drive/folders/1ToUoWToqsUVoGj7CRcbUsMxIT5RhuYUC?usp=sharing";

  window.open(path, "_blank");
};

const SectionAboutMe = () => {
  return (
    <section id="about-me">
      <div className="container">
        <div id="content">
          <img src={FotoIlyas} alt="Foto Ilyas" id="image-me" />
          <div id="text">
            <h2>ABOUT ME</h2>
            <p>
              Hi everybody. Let me introduce myself, my name is Muh. Ilyas
              Istiqama. M, but you can call me Ilyas. I come from Luwuk and
              currently live in Surabaya. I am 25 years old and graduated with a
              GPA of 3.62/4 and a Bachelor's degree in Information Engineering
              from the University of 17 August 1945 Surabaya with a S.Kom. I
              enjoy learning new things, especially in the field of programming.
            </p>
            <p>
              In addition to my programming skills, I have strong critical and
              creative thinking abilities, excellent communication skills, the
              ability to collaborate effectively in a team, and strong time
              management skills. I am currently open to opportunities as a Web
              Developer, Full Stack Developer, and other roles in the
              programming field. <b>#OpenToWork</b>
            </p>
            <b>Click below to see my CURRICULUM VITAE :</b>
            <button
              type="button"
              className="btn btn-danger btn-custom"
              style={{ backgroundColor: "#ff3131" }}
              id="cv-btn"
              onClick={(e) => handleClickCV(e)}
            >
              <b>CV</b>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionAboutMe;
