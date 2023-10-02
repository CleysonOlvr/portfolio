import { MenuHeader } from "./styles";

export default function Header() {
  return (
    <MenuHeader>
      <div className="header-container">
        <div>
          <a href="/">
            <img
              src="/src/assets/saturn.svg"
              alt="Saturn Icon"
              className="header-icon"
            />
          </a>
        </div>
        <div>
          <nav className="header-nav">
            <ul className="header-nav-items">
              <li className="header-nav-item highlight">
                <a href="/">Home</a>
              </li>
              <li className="header-nav-item highlight">
                <a href="/">About</a>
              </li>
              <li className="header-nav-item highlight">
                <a href="/">Skills</a>
              </li>
              <li className="header-nav-item header-nav-button">
                <a href="/">My Resume</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </MenuHeader>
  );
}
