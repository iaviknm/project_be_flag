import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faBars,
  faTimes,
  faUser,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "wouter";
import navbarData from "../../data/navbarData";
import "./Navbar.css";
import storageService from "../../services/storageService";
import AuthCards from "../authCards/AuthCards";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCardVisible, setIsCardVisible] = useState(false);
  const [, navigate] = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    // Clear user data from storageService
    storageService.clearUserData();

    // Redirect to login page or home page
    window.location.href = "/store";

    console.log("Logged out");
  };

  return (
    <header>
      <nav className="navbar">
        <a href="#">
          <img
            src={navbarData.logo}
            alt="Company Logo"
            width="120"
            className="logo"
          />
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

            <li className="navbar__ul-li">
              <a
                onClick={() => setIsCardVisible(!isCardVisible)}
                style={{ cursor: "pointer" }}
              >
                <FontAwesomeIcon icon={faUser} />
                &nbsp; &nbsp;
                {storageService.getUsername()}
                &nbsp;
                <FontAwesomeIcon icon={faChevronDown} />
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {isCardVisible && (
        <AuthCards
          username={storageService.getUsername()}
          email={storageService.getEmail()}
          onLogout={handleLogout}
        />
      )}
    </header>
  );
};

export default Navbar;
