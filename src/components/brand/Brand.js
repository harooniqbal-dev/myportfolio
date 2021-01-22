import React from "react";
import { NavLink } from 'react-router-dom';
const Brand = () => {
  return (
    <NavLink to="/">
      <h2 className="header__banner">
        Bright<span>Spire</span>
      </h2>
    </NavLink>
  );
};

export default Brand;
