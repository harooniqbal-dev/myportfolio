import React from "react";
import { NavLink } from 'react-router-dom';
import "./FooterItem.css";
const FooterItem = ({ title, firstelement,mylink }) => {
  return (
    <NavLink to={`/${mylink}`}>
        <span className={`footeritem ${firstelement && "firstelement"}`}>
      {title}
    </span>
    </NavLink>
  );
};

export default FooterItem;
