const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-card">
        <h1>Contact Me</h1>

        <p className="contact-intro">
          Have a question, feedback, or just want to connect? Feel free to reach
          out!
        </p>

        <div className="contact-info">
          <div className="contact-item">
            <h3>📞 Phone</h3>
            <p>8849087888</p>
          </div>

          <div className="contact-item">
            <h3>📱 Socials</h3>

            <a
              href="https://vsco.co/amit2310/gallery"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              VSCO
            </a>
          </div>
        </div>

        <div className="contact-message">
          <p>I'm always open to connecting and hearing from you.</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
