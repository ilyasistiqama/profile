import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/styles/general.css';
import './assets/styles/pages/section_intro.css';
import './assets/styles/pages/section_about_me.css';
import './assets/styles/pages/section_skill.css';
import './assets/styles/pages/section_experience.css';
import './assets/styles/pages/section_project.css';
import './assets/styles/pages/section_contact.css';
import './assets/styles/pages/section_stats.css';
import './assets/styles/dark-mode.css';

import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useLanguage } from "./context/LanguageContext";

import dataSkills from './utils/data/skills';
import dataExperiences from './utils/data/experiences';
import dataProjects from './utils/data/projects';

import LoadingScreen from "./components/LoadingScreen";
import CustomCursor from "./components/CustomCursor";
import NavbarComponent from "./layouts/Navbar";
import SectionIntro from "./pages/SectionIntro";
import SectionAboutMe from './pages/SectionAboutMe';
import SectionSkill from './pages/SectionSkill';
import SectionExperience from './pages/SectionExperience';
import SectionProject from './pages/SectionProject';
import SectionStats from './pages/SectionStats';
import SectionContact from './pages/SectionContact';
import NotFound from './pages/NotFound';
import InspirationalQuote from "inspirational-quotes";

function AppContent() {
  const { t, lang } = useLanguage();
  const [skills] = useState(dataSkills);
  const [experiences] = useState(dataExperiences);
  const [projects] = useState(dataProjects);

  const [isVisible, setIsVisible] = useState(false);
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");



  // Dynamic SEO
  useEffect(() => {
    document.title = t.seo.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", t.seo.description);
    }
    document.documentElement.lang = lang;
  }, [t, lang]);

  useEffect(() => {
    const q = InspirationalQuote.getQuote(); 
    setQuote(q.text);
    setAuthor(q.author);

    const handleScroll = () => {
      if (window.scrollY > 120) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll); 
    return () => {
      window.removeEventListener('scroll', handleScroll); 
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <CustomCursor />
      <LoadingScreen />
      
      <Routes>
        <Route path="/" element={
          <>
            <NavbarComponent />
            <SectionIntro />
            <SectionAboutMe />
            <SectionStats />
            <SectionSkill skills={skills} />

            <div className="pre-section">
              <div className="container">
                <div className="d-flex justify-content-center">
                  <div id="box-pre-section">
                    <p>{quote}</p>
                    <cite>- {author}</cite>
                  </div>
                </div>
              </div>
            </div>

            <SectionExperience experiences={experiences} />
            <SectionProject projects={projects} />
            <SectionContact />

            <button
              id="backToTop"
              aria-label={t.nav.back_to_top}
              style={{
                display: isVisible ? 'flex' : 'none'
              }}
              onClick={scrollToTop}
            >
              <i className="fa-solid fa-arrow-up" />
            </button>
          </>
        } />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

function App() {
  return <AppContent />;
}

export default App;
