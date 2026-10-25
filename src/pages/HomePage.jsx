import React from "react";
import NavbarComponent from "../layouts/Navbar";
import SectionIntro from "../sections/SectionIntro";
import SectionAboutMe from "../sections/SectionAboutMe";
import SectionStats from "../sections/SectionStats";
import SectionSkill from "../sections/SectionSkill";
import SectionPhoto from "../sections/SectionPhoto";

const HomePage = ({ experiences, projects, skills }) => {

    return (
        <>
            <NavbarComponent />
            <SectionIntro />
            <SectionAboutMe />
            <SectionStats experiences={experiences} projects={projects} />
            <SectionSkill skills={skills} />
            <SectionPhoto />
        </>
    );
};

export default HomePage;
