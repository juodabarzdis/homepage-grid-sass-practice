import { useState } from "react";
import MenuBtn from "./components/MenuBtn";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  if (menuOpen) {
    document.body.classList.add("scroll-off");
  } else {
    document.body.classList.remove("scroll-off");
  }

  return (
    <nav className="nav">
      <div className="nav__logo"></div>
      <div className="nav__menu" onClick={toggleMenu}>
        <MenuBtn open={menuOpen} />
      </div>
      <ul className={menuOpen ? "nav__list nav__list--open" : "nav__list"}>
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
