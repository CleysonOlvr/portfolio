import { AboutContainer } from "./styles";

export default function About() {
  return (
    <AboutContainer>
      <section className="about-section">
        <div className="about-left-section">
          <img src="/src/assets/aboutSectionPicture.jpeg" className="about-section-picture" alt="My profile picture" />
        </div>

        <div className="about-right-section">
          <h2 className="about-right-section-title">Software Engineer</h2>
          <p className="about-right-section-text">Hi! 👋🏽 I am Cleyson Oliveira, a simple, creative and passionate person.</p>
          <p className="about-right-section-text">I love technology and how we can use it to create new things, solve problems and make people's life better.</p>
          <p className="about-right-section-text">Currently, I am also a software engineering student at UniCesumar and a Full Stack developer intern at THOT I.A. Corp.</p>
          <br></br>
          <p className="about-right-section-text">I am a software engineer with 1 year of experience in web development.</p>
          <p className="about-right-section-text">Daily, I work with technologies like React and Node.js.</p>
          <br></br>
          <p className="about-right-section-text">I'm open to new opportunities. If you are looking for a dedicated person to collaborate with your company, feel free to get in touch! 😁</p>
        </div>
      </section>
    </AboutContainer>
  );
}