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

    align-items: center;
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

  .header-nav-button {
    border: 1px solid #f0f0f0;
    border-radius: 5px;
    padding: 10px 15px 10px 15px;
  }

  .header-nav-button:hover {
    background-color: #f0f0f0;

    a {
      color: #2b1b1b;
    }

    transition: all 0.3s ease-in-out;
  }

  .highlight a::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 4px;
    border-radius: 4px;
    background-color: #602c75;
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
