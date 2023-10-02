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
    font-size: 1.5rem;
    font-weight: 400;
  }

  .main-profile-socials {
    display: flex;
    gap: 15px;
    margin-top: 1rem;
  }

  .main-profile-socialMedia:hover {
    cursor: pointer;
    border-bottom: 1px solid #f0f0f0;
    transition: all .3s ease-in-out;
  }

  .main-profile-scrollAnimation {
    position: relative;
  }

  .arrow {
    position: absolute;
    padding-top: 70px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transform: rotate(0deg);
    cursor: pointer;
}

.arrow span {
    display: block;
    width: 1.5vw;
    height: 1.5vw;
    border-bottom: 5px solid white;
    border-right: 5px solid white;
    transform: rotate(45deg);
    margin: -10px;
    animation: animate 2s infinite;
}

.arrow span:nth-child(2) {
    animation-delay: -0.2s;
}

.arrow span:nth-child(3) {
    animation-delay: -0.4s;
}

@keyframes animate {
    0% {
        opacity: 0;
        transform: rotate(45deg) translate(-20px, -20px);
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0;
        transform: rotate(45deg) translate(20px, 20px);
    }
}
`