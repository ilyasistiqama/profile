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
import NotFound from './pages/NotFound';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import ExperiencePage from './pages/ExperiencePage';
import ContactPage from './pages/ContactPage';

function AppContent() {
  const { t, lang } = useLanguage();
  const [skills] = useState(dataSkills);
  const [experiences] = useState(dataExperiences);
  const [projects] = useState(dataProjects);

  const [isVisible, setIsVisible] = useState(false);

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
    const handleScroll = () => {
      setIsVisible(window.scrollY > 120);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <CustomCursor />
      <LoadingScreen />

      <Routes>
        <Route path="/" element={<HomePage experiences={experiences} projects={projects} skills={skills} />} />
        <Route path="/experience" element={<ExperiencePage experiences={experiences} />} />
        <Route path="/portfolio" element={<PortfolioPage projects={projects} />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <button
        id="backToTop"
        aria-label={t.nav.back_to_top}
        style={{ display: isVisible ? 'flex' : 'none' }}
        onClick={scrollToTop}
      >
        <i className="fa-solid fa-arrow-up" />
      </button>
    </>
  );
}

function App() {
  return <AppContent />;
}

export default App;
