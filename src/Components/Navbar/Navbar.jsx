import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("Home");

  return (
    <div className="navbar">
      <Link to="/"><img src={assets.logo} alt="logo"   className="logo" /></Link>

      <ul className="navbar-menu">
        <li>
          <Link
            to="/"
            className={menu === "Home" ? "active" : ""}
            onClick={() => setMenu("Home")}
          >
            Home
          </Link>
        </li>
        <li>
          <a
            href="#explore-menu"
            className={menu === "Menu" ? "active" : ""}
            onClick={() => setMenu("Menu")}
          >
            Menu
          </a>
        </li>
        <li>
          <a
            href="#app-download"
            className={menu === "Mobile-App" ? "active" : ""}
            onClick={() => setMenu("Mobile-App")}
          >
            Mobile-App
          </a>
        </li>
        <li>
          <a
            href="#footer"
            className={menu === "Contact Us" ? "active" : ""}
            onClick={() => setMenu("Contact Us")}
          >
            Contact Us
          </a>
        </li>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="search" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="cart" />
          </Link>
          <div className="dot"></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign in</button>
      </div>
      
    </div>
  );
};

export default Navbar;
