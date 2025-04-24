import React, { useState, useContext, useEffect, useRef } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("Home");
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef();

  const handleLogout = () => {
    setToken("");
    localStorage.removeItem("token");
  };

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="Logo" className="logo" />
      </Link>

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
        <img src={assets.search_icon} alt="Search Icon" />

        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="Cart Icon" />
            {getTotalCartAmount() > 0 && <div className="dot"></div>}
          </Link>
        </div>

        {!token ? (
          <button onClick={() => setShowLogin(true)}>Sign in</button>
        ) : (
          <div className="navbar-profile" ref={dropdownRef}>
            <img
              src={assets.profile_icon}
              alt="Profile Icon"
              className="profile-icon"
              onClick={() => setShowDropdown((prev) => !prev)}
            />
            {showDropdown && (
              <div className="navbar-profile-dropdown">
                <Link to="/orders" className="dropdown-item">
                  <img src={assets.bag_icon} alt="Orders Icon" />
                  <span>Orders</span>
                </Link>
                <div className="dropdown-divider"></div>
                <div className="dropdown-item" onClick={handleLogout}>
                  <img src={assets.logout_icon} alt="Logout Icon" />
                  <span>Logout</span>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
