import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles/general.css';
import './styles/section_intro.css';
import './styles/section_about_me.css';
import './styles/section_skill.css';
import './styles/section_experience.css';
import './styles/section_project.css';
import './styles/section_contact.css';

import { useState } from "react";

import dataSkills from './data/skills';
import dataExperiences from './data/experiences';
import dataProjects from './data/projects';

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

  return (
    <div>
      <LoadingScreen />
      <NavbarComponent />
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
    </div>
  );
}

export default App;
