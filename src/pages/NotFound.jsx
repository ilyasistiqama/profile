import React from "react";
import { Link } from "react-router-dom";
import NavbarComponent from "../layouts/Navbar";
import { useLanguage } from "../context/LanguageContext";

import "../assets/styles/pages/not_found.css";

const NotFound = () => {
  const { t } = useLanguage();

  return (
    <>
      <NavbarComponent />
      <div className="not-found-container">
        <div className="not-found-content">
          <p className="not-found-code">404</p>
          <h1>{t.not_found.title}</h1>
          <p>{t.not_found.description}</p>
          <Link to="/" className="btn-custom">
            {t.not_found.back}
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
