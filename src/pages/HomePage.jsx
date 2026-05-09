import React from "react";
import NavbarComponent from "../layouts/Navbar";
import SectionIntro from "./SectionIntro";
import SectionAboutMe from "./SectionAboutMe";
import SectionStats from "./SectionStats";
import SectionSkill from "./SectionSkill";

const HomePage = ({ experiences, projects, skills }) => {

    return (
        <>
            <NavbarComponent />
            <SectionIntro />
            <SectionAboutMe />
            <SectionStats experiences={experiences} projects={projects} />
            <SectionSkill skills={skills} />
        </>
    );
};

export default HomePage;
