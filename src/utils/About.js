const About = () => {
  return (
    <div className="about-page">
      <div className="about-card">
        <h1>About Me</h1>

        <p className="about-text">
          Hey, I'm Amit — building this project while learning React. Still
          figuring things out, but getting there one bug at a time.
        </p>

        <div className="social-links">
          <a
            href="https://vsco.co/amit2310/gallery"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon vsco"
            title="VSCO Gallery"
          >
            <img src="https://cdn.simpleicons.org/vsco" alt="VSCO" />
            <span>VSCO</span>
          </a>

          <a
            href="mailto:amitpatel171807@gmail.com"
            className="social-icon email"
            title="Send an email"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
              alt="Email"
            />
            <span>Email</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
