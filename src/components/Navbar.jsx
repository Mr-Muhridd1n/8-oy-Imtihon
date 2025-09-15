import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <header className="header">
      <nav className="navbar">
        <div>
          <Link to="/">
            <img src="../assets/images/logo.svg" alt="Logo" />
          </Link>
        </div>
        <ul className="navbar__list">
          <li className="navbar__list-item">
            <NavLink to="/">Home</NavLink>
            <span className="navbar__list-item-line"></span>
          </li>
          <li className="navbar__list-item">
            <NavLink to="/about">About</NavLink>
            <span className="navbar__list-item-line"></span>
          </li>
          <li className="navbar__list-item">
            <NavLink to="/recipes">Recipes</NavLink>
            <span className="navbar__list-item-line"></span>
          </li>
          <li className="navbar__list-item">
            <NavLink to="/panel">Panel</NavLink>
            <span className="navbar__list-item-line"></span>
          </li>
        </ul>
        <Link to="/recipes" className="navbar__recipes btn">
          Browse recipes
        </Link>
        <div className="navbar__menu-toggle" onClick={() => setMenu(!menu)}>
          <img src="../assets/images/icon-hamburger-menu.svg" alt="" />
        </div>
      </nav>

      {menu && (
        <nav className="navbar__menu">
          <ul className="navbar__menu__list">
            <li className="navbar__list-item">
              <NavLink to="/">Home</NavLink>
              <span className="navbar__list-item-line"></span>
            </li>
            <li className="navbar__list-item">
              <NavLink to="/about">About</NavLink>
              <span className="navbar__list-item-line"></span>
            </li>
            <li className="navbar__list-item">
              <NavLink to="/recipes">Recipes</NavLink>
              <span className="navbar__list-item-line"></span>
            </li>
            <li className="navbar__list-item">
              <NavLink to="/panel">Panel</NavLink>
              <span className="navbar__list-item-line"></span>
            </li>
          </ul>
          <Link to="/recipes" className="navbar__menu__recipes btn">
            Browse recipes
          </Link>
        </nav>
      )}
    </header>
  );
};
