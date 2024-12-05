import React from 'react'

const SectionContact = () => {
    return (
        <section id="contact">
            <footer className="bg-dark text-center text-white">
                {/* Grid container */}
                <div className="container p-3 pb-0 mb-3">
                    <h5>CONTACT ME</h5>
                    {/* Section: Social media */}
                    {/* Facebook */}
                    <a className="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/I.Istiqama.Makmur" rel="noopener noreferrer" target="_blank" role="button"><i className="fab fa-facebook-f" /></a>
                    {/* Twitter */}
                    <a className="btn btn-outline-light btn-floating m-1" href="https://x.com/ilyasistiqama" role="button" rel="noopener noreferrer" target="_blank"><i className="fa-brands fa-x-twitter" /></a>
                    {/* Google */}
                    <a className="btn btn-outline-light btn-floating m-1" href="mailto:ilyasistiqama@gmail.com" role="button" rel="noopener noreferrer" target="_blank"><i className="fab fa-google" /></a>
                    {/* Instagram */}
                    <a className="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/_lifeofyse" role="button" rel="noopener noreferrer" target="_blank"><i className="fab fa-instagram" /></a>

                    {/* Linkedin */}
                    <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/muh-ilyas-istiqama" role="button" rel="noopener noreferrer" target="_blank"><i className="fab fa-linkedin-in" /></a>
                    {/* Github */}
                    <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/ilyasistiqama" role="button" rel="noopener noreferrer" target="_blank"><i className="fab fa-github" /></a>
                    {/* Section: Social media */}
                </div>
                {/* Grid container */}
                {/* Copyright */}
                <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    <p id="year">© 2024 Copyright: All rights reserved.</p>
                </div>
                {/* Copyright */}
            </footer>
        </section>

    )
}

export default SectionContact
