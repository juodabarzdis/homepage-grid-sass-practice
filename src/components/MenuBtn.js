import React from "react";

const MenuBtn = (props) => {
  const toggleClass = props.open
    ? "menu-btn__line menu-btn__line--open"
    : "menu-btn__line";

  return (
    <div className="menu-btn">
      <div className={toggleClass}></div>
      <div className={toggleClass}></div>
      <div className={toggleClass}></div>
    </div>
  );
};

export default MenuBtn;
