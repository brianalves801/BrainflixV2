import React from "react";
import Logo from "../Assets/Logo/Logo-brainflix.png";
import Mohan from "../Assets/Images/Mohan.jpg";
import Plus from "../Assets/Icons/PNG/Icon-upload.png";

export default function Header() {
  return (
    <div className="header__container">
      <img className="header__logo" src={Logo} />

      <input
        className="header__searchbar"
        type="textbox"
        name="searchbar"
        placeholder="Search"
      ></input>
      <div className="header__upload">
        <input
          className="header__button"
          type="button"
          name="upload"
          value="UPLOAD"
        ></input>
        <img className="header__mohan" src={Mohan} />
      </div>
    </div>
  );
}
