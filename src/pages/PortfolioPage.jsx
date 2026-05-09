import React from "react";
import NavbarComponent from "../layouts/Navbar";
import SectionProject from "./SectionProject";

const PortfolioPage = ({ projects }) => (
  <>
    <NavbarComponent />
    <SectionProject projects={projects} />
  </>
);

export default PortfolioPage;
