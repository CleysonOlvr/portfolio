import styled from "styled-components";

export const MenuHeader = styled.div`
  .header-container {
    height: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 5rem 0 5rem;
  }

  .header-icon {
    height: 50px;
    width: 50px;
    color: #f0f0f0;
  }

  .header-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header-nav-items {
    display: flex;
    gap: 5rem;
  }

  .header-nav-item {
    list-style: none;
    position: relative;
  }

  .header-nav-item a {
    text-decoration: none;
    color: #fff;
    font-size: 1rem;
    font-weight: 400;
  }

  .header-nav-item a::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 4px;
    border-radius: 4px;
    background-color: #55646b;
    bottom: 0;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }

  .header-nav-item a:hover::before {
    transform-origin: left;
    transform: scaleX(1);
  }
`;
