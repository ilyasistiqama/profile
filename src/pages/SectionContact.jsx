const SectionContact = () => {
  const thisYear = new Date().getFullYear();

  return (
    <section id="contact">
      <footer className="bg-dark text-center text-white">
        <div className="container py-5">
          <h4 className="mb-3 fw-bold letter-spacing">CONTACT ME</h4>

          <p className="mb-4 text-white">
            Feel free to reach out for collaboration or opportunities.
          </p>

          <div className="d-flex justify-content-center flex-wrap gap-3">
            <a
              className="btn btn-outline-light btn-floating shadow-sm facebook"
              href="https://www.facebook.com/I.Istiqama.Makmur"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </a>

            <a
              className="btn btn-outline-light btn-floating shadow-sm instagram"
              href="https://www.instagram.com/lifeofaays"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </a>

            <a
              className="btn btn-outline-light btn-floating shadow-sm threads"
              href="https://www.threads.net/@lifeofaays"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Threads"
            >
              <i className="fa-brands fa-threads" />
            </a>

            <a
              className="btn btn-outline-light btn-floating shadow-sm email"
              href="mailto:ilyasistiqama@gmail.com"
              aria-label="Email"
            >
              <i className="fab fa-google" />
            </a>

            <a
              className="btn btn-outline-light btn-floating shadow-sm linkedin"
              href="https://www.linkedin.com/in/muh-ilyas-istiqama"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in" />
            </a>

            <a
              className="btn btn-outline-light btn-floating shadow-sm github"
              href="https://github.com/ilyasistiqama"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="fab fa-github" />
            </a>
          </div>
        </div>

        <div className="footer-bottom py-3">
          <p className="m-0">© {thisYear} All rights reserved.</p>
        </div>
      </footer>
    </section>
  );
};

export default SectionContact;