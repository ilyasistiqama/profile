import React from "react";
import NavbarComponent from "../layouts/Navbar";
import SectionExperience from "./SectionExperience";

const ExperiencePage = ({ experiences }) => (
  <>
    <NavbarComponent />
    <SectionExperience experiences={experiences} />
  </>
);

export default ExperiencePage;
