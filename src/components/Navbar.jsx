import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#about-me">
                                    <b>ABOUT</b>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#skill">
                                    <b>SKILL</b>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#experience">
                                    <b>EXPERIENCE</b>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#project">
                                    <b>PROJECT</b>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">
                                    <b>CONTACT</b>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar
