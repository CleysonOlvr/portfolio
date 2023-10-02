import styled from "styled-components";

export const ProfileContainer = styled.section`
  height: 200px;
  width: 100vw;
  padding: 1rem 5rem 0 5rem;

  .main-profile-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .main-profile-picture {
    height: 250px;
    width: 250px;
    border-radius: 50%;
    border: 1px solid #f0f0f0;
    margin-top: 10rem;
  }

  .main-profile-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: .2rem;
    gap: .6rem;
  }

  .main-profile-name {
    color: #f0f0f0;
    font-size: 2rem;
    margin-top: 1rem;
    font-weight: 600;
  }

  .main-profile-title {
    color: #f0f0f0;
    font-size: 1.2rem;
  }

  .main-profile-socials {
    display: flex;
    gap: 15px;
    margin-top: 1rem;
  }
`