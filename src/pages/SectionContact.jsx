const SectionContact = () => {
  const thisYear = new Date().getFullYear();

  return (
    <section id="contact">
      <footer className="contact-footer text-center text-white">
        <div className="container py-5">
          <h4 className="mb-3 fw-bold letter-spacing fade-up">
            CONTACT ME
          </h4>

          <p className="mb-4 contact-desc fade-up delay-1">
            Feel free to reach out for collaboration or opportunities.
          </p>

          <div className="social-wrapper fade-up delay-2">
            <a
              className="btn btn-outline-light btn-floating facebook"
              href="https://www.facebook.com/I.Istiqama.Makmur"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </a>

            <a
              className="btn btn-outline-light btn-floating instagram"
              href="https://www.instagram.com/lifeofaays"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </a>

            <a
              className="btn btn-outline-light btn-floating threads"
              href="https://www.threads.net/@lifeofaays"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Threads"
            >
              <i className="fa-brands fa-threads" />
            </a>

            <a
              className="btn btn-outline-light btn-floating email"
              href="mailto:ilyasistiqama@gmail.com"
              aria-label="Email"
            >
              <i className="fab fa-google" />
            </a>

            <a
              className="btn btn-outline-light btn-floating linkedin"
              href="https://www.linkedin.com/in/muh-ilyas-istiqama"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in" />
            </a>

            <a
              className="btn btn-outline-light btn-floating github"
              href="https://github.com/ilyasistiqama"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="fab fa-github" />
            </a>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom py-3">
          <p className="m-0">
            © {thisYear} • Built with passion
          </p>
        </div>
      </footer>
    </section>
  );
};

export default SectionContact;
