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
      </section>
    </ProfileContainer>
  );
}
