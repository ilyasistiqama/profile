const SectionContact = () => {
  const thisYear = new Date().getFullYear();

  return (
    <section id="contact">
      <footer className="bg-dark text-center text-white">
        <div className="container py-5">
          <h4 className="mb-4 font-bold tracking-wide">CONTACT ME</h4>

          <div className="d-flex justify-content-center flex-wrap gap-3">
            <a
              className="btn btn-outline-light btn-floating shadow-sm"
              href="https://www.facebook.com/I.Istiqama.Makmur"
              rel="noopener noreferrer"
              target="_blank"
              role="button"
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a
              className="btn btn-outline-light btn-floating shadow-sm"
              href="https://www.instagram.com/lifeofaays"
              rel="noopener noreferrer"
              target="_blank"
              role="button"
            >
              <i className="fab fa-instagram" />
            </a>
            <a
              className="btn btn-outline-light btn-floating shadow-sm"
              href="https://www.threads.net/@lifeofaays"
              rel="noopener noreferrer"
              target="_blank"
              role="button"
            >
              <i className="fa-brands fa-threads" />
            </a>
            <a
              className="btn btn-outline-light btn-floating shadow-sm"
              href="mailto:ilyasistiqama@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
              role="button"
            >
              <i className="fab fa-google" />
            </a>
            <a
              className="btn btn-outline-light btn-floating shadow-sm"
              href="https://www.linkedin.com/in/muh-ilyas-istiqama"
              rel="noopener noreferrer"
              target="_blank"
              role="button"
            >
              <i className="fab fa-linkedin-in" />
            </a>
            <a
              className="btn btn-outline-light btn-floating shadow-sm"
              href="https://github.com/ilyasistiqama"
              rel="noopener noreferrer"
              target="_blank"
              role="button"
            >
              <i className="fab fa-github" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center p-3 footer-bottom">
          <p className="m-0">© {thisYear} Copyright: All rights reserved.</p>
        </div>
      </footer>
    </section>
  );
};

export default SectionContact;
