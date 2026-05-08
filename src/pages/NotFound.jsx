import React from "react";
import { Link } from "react-router-dom";

import "../assets/styles/pages/not_found.css";

const NotFound = () => {

  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="glitch-404" data-text="404">404</h1>
        <h2>PAGE NOT FOUND</h2>
        <p>Waduh! Sepertinya Anda tersesat di dimensi lain.</p>
        <Link to="/" className="btn-custom">
          Back to Reality
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
