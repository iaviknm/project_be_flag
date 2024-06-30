import React, { useState, useEffect } from "react";
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
import ShoppingCart from "../shoppingCart/ShoppingCart";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCardVisible, setIsCardVisible] = useState(false);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!storageService.getUsername());
  const [, navigate] = useLocation();
  const [cart, setCart] = useState([]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    storageService.clearUserData();
    clearCart(); // Clear the cart when logging out
    window.location.href = "/store";
  };

  const handleLogin = () => {
    window.location.href = "/auth";
  };

  const updateQuantity = (productId, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.product.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.product.id !== productId)
    );
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("arrayProducts");
  };

  const checkout = () => {
    alert("Your order has been successful!");
    clearCart();
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
              <a
                onClick={() => setIsCartVisible(!isCartVisible)}
                style={{ cursor: "pointer" }}
              >
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
      {isCartVisible && (
        <ShoppingCart
          cart={cart}
          updateQuantity={updateQuantity}
          removeFromCart={removeFromCart}
          clearCart={clearCart}
          checkout={checkout}
          isLoggedIn={isLoggedIn}
          handleLogin={handleLogin}
        />
      )}
    </header>
  );
};

export default Navbar;
