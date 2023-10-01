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
              <li className="header-nav-item">
                <a href="/">Home</a>
              </li>
              <li className="header-nav-item">
                <a href="/">About</a>
              </li>
              <li className="header-nav-item">
                <a href="/">Skills</a>
              </li>
              <li className="header-nav-item">
                <a href="/">Contact Me</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </MenuHeader>
  );
}
