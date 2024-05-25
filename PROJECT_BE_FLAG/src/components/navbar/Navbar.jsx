import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import navbarData from "../../data/navbarData";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className="navbar">
        <a href="#">
          <img src={navbarData.logo} alt="Company Logo" width="120" className="logo"/>
        </a>

        <div
          className={`navbar__toggle ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </div>

        <div
          className={`navbar__menu ${isMenuOpen ? "navbar__menu--open" : ""}`}
        >
          <ul className="navbar__ul">
            {navbarData.menus.map((data, index) => (
              <li className="navbar__ul-li" key={index}>
                <a href={data.link}>{data.menu}</a>
              </li>
            ))}
            <li className="navbar__ul-li">
              <a href="#">
                <FontAwesomeIcon icon={faShoppingCart} />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
