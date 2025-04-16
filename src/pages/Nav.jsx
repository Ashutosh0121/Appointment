import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./css/nav.css";
import logo from "../asset/Logo.png";

export default function Nav() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav>
      <div className="content">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <ul onClick={closeMenu}>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/book">Book Appointment</NavLink>
            </li>
            <li>
              <NavLink to="/view">View List</NavLink>
            </li>
          </ul>
          <ul className={`nav-links ${isOpen ? "open" : ""}`}>
            <li>
          <button  className="button" onClick={() => navigate("/admin")}>
            Admin Login
          </button>
              
            </li>
          </ul>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>

        </div>
      </div>
    </nav>
  );
}
