import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/styles/general.css';
import './assets/styles/section_intro.css';
import './assets/styles/section_about_me.css';
import './assets/styles/section_skill.css';
import './assets/styles/section_experience.css';
import './assets/styles/section_project.css';
import './assets/styles/section_contact.css';

import { useEffect, useState } from "react";

import dataSkills from './utils/data/skills';
import dataExperiences from './utils/data/experiences';
import dataProjects from './utils/data/projects';

import LoadingScreen from "./components/LoadingScreen";
import NavbarComponent from "./components/Navbar";
import SectionIntro from "./pages/SectionIntro";
import SectionAboutMe from './pages/SectionAboutMe';
import SectionSkill from './pages/SectionSkill';
import SectionExperience from './pages/SectionExperience';
import SectionProject from './pages/SectionProject';
import SectionContact from './pages/SectionContact';

function App() {
  const [skills] = useState(dataSkills);
  const [experiences] = useState(dataExperiences);
  const [projects] = useState(dataProjects);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll); // Tambahkan event listener
    return () => {
      window.removeEventListener('scroll', handleScroll); // Hapus saat komponen dibersihkan
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <LoadingScreen />
      {/* <NavbarComponent /> */}
      <SectionIntro />
      <SectionAboutMe />
      <SectionSkill skills={skills} />

      <div className="pre-section">
        <div className="container">
          <div className="d-flex justify-content-center">
            <div id="box-pre-section">
              <p>Learning to write programs stretches your mind, and helps you think better, creates a way of
                thinking about things that I think is helpful in all domains.</p>
              <cite>- Bill Gates</cite>
            </div>
          </div>
        </div>
      </div>

      <SectionExperience experiences={experiences} />
      <SectionProject projects={projects} />
      <SectionContact />

      {/* <button id="backToTop">
        <i className="fa-solid fa-arrow-up" />
      </button> */}
      <button
        id="backToTop"
        style={{
          display: isVisible ? 'flex' : 'none'
        }}
        onClick={scrollToTop} // Fungsi scroll ke atas
      >
        <i className="fa-solid fa-arrow-up" />
      </button>

    </div>
  );
}

export default App;
