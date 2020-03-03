import React from "react";
import Logo from "../Assets/Logo/Logo-brainflix.png";
import Mohan from "../Assets/Images/Mohan.jpg";

import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <div className="header__container">
      <Link to="/">
        <img className="header__logo" alt="Headerpic" src={Logo} />
      </Link>
      <input
        className="header__searchbar"
        type="textbox"
        name="searchbar"
        placeholder="Search"
      ></input>
      <div className="header__upload">
        <Link to="/upload">
          <input
            className="header__button"
            type="button"
            name="upload"
            value="UPLOAD"
          ></input>
        </Link>
        <img className="header__mohan" alt="Mohan" src={Mohan} />
      </div>
    </div>
  );
}
