import React from "react";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav__logo"></div>
      <ul className="nav__list">
        <li className="nav__item">
          <a href="#" className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            New
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Popular
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Trending
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Categories
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
