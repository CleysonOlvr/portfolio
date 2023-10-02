import { ProfileContainer } from "./styles";

export default function Profile() {
  return (
    <ProfileContainer>
      <section className="main-profile-section">
        <img
          src="/src/assets/profile-picture.jpeg"
          alt="Profile picture"
          className="main-profile-picture"
        />

        <div className="main-profile-info">
          <h1 className="main-profile-name">Cleyson Oliveira</h1>
          <p className="main-profile-title">Software Engineer</p>
        </div>

        <div className="main-profile-socials">
          <a
            href="https://www.linkedin.com/in/cleysonoliveira/"
            target="_blank"
            rel="noreferrer"
            className="main-profile-socialMedia"
          >
            <img src="/src/assets/linkedin.png" alt="LinkedIn" />
          </a>
          <a
            href="https://github.com/CleysonOlvr"
            target="_blank"
            rel="noreferrer"
            className="main-profile-socialMedia"
          >
            <img src="/src/assets/github.png" alt="Github" />
          </a>
          <a
            href="https://www.instagram.com/cleyson.dev/"
            target="_blank"
            rel="noreferrer"
            className="main-profile-socialMedia"
          >
            <img src="/src/assets/instagram.png" alt="Instagram" />
          </a>
          <a href="/" className="main-profile-socialMedia">
            <img src="/src/assets/email.png" alt="E-mail" />
          </a>
        </div>

        <div className="main-profile-scrollAnimation">
          <div className="arrow">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </section>
    </ProfileContainer>
  );
}
