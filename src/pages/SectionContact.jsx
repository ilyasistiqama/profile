
const SectionContact = () => {
  const thisYear = () => {
    const tahunIni = new Date();

    return tahunIni.getFullYear();
  };

  return (
    <section id="contact">
      <footer className="bg-dark text-center text-white">
        {/* Grid container */}
        <div className="container p-3 pb-0 mb-3">
          <div style={{ margin: "50px 0" }}>
            <h4 style={{marginBottom: "25px"}}>CONTACT ME</h4>
            {/* Section: Social media */}
            {/* Facebook */}
            <a className="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/I.Istiqama.Makmur" rel="noopener noreferrer" target="_blank" role="button">
              <i className="fab fa-facebook-f" />
            </a>
            {/* Instagram */}
            <a className="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/lifeofyse" role="button" rel="noopener noreferrer" target="_blank">
              <i className="fab fa-instagram" />
            </a>
            {/* Threads */}
            <a className="btn btn-outline-light btn-floating m-1" href="https://www.threads.net/@lifeofyse" role="button" rel="noopener noreferrer" target="_blank">
              <i className="fa-brands fa-threads" />
            </a>
            {/* Google */}
            <a className="btn btn-outline-light btn-floating m-1" href="mailto:ilyasistiqama@gmail.com" role="button" rel="noopener noreferrer" target="_blank">
              <i className="fab fa-google" />
            </a>
            {/* Linkedin */}
            <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/muh-ilyas-istiqama" role="button" rel="noopener noreferrer" target="_blank">
              <i className="fab fa-linkedin-in" />
            </a>
            {/* Github */}
            <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/ilyasistiqama" role="button" rel="noopener noreferrer" target="_blank">
              <i className="fab fa-github" />
            </a>
            {/* Section: Social media */}
          </div>
        </div>
        {/* Grid container */}
        {/* Copyright */}
        <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
          <p style={{margin:"8px"}} id="year">© {thisYear()} Copyright: All rights reserved.</p>
        </div>
        {/* Copyright */}
      </footer>
    </section>
  );
};

export default SectionContact;
