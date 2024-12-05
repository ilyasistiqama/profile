import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const SectionIntro = () => {
    return (
        <section id="intro">
            <div className="container">
                <div id="content">
                    <div id="box">
                        <div id="intro-content">
                            <div id="text-intro">
                                <div id="name">
                                    Hi, I'm Muh Ilyas Istiqama
                                </div>
                                <div id="role">
                                    I'm a web developer &amp; fullstack developer
                                </div>
                            </div>
                            <div>
                                <a href="#about-me" id="redirect">
                                    <FontAwesomeIcon icon={faChevronDown} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionIntro
