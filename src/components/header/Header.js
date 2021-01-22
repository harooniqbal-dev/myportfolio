import React, { useEffect, useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
const Header = () => {
  const [menu, setMenu] = useState(false);
  const [sideBar, setSideBar] = useState(false);
  const eventfunction = () => {
    if (window.scrollY > 100) {
      setMenu(true);
    } else {
      setMenu(false);
    }
  };
  useEffect(() => {
    window.addEventListener("load", eventfunction);
    window.addEventListener("scroll", eventfunction);
  }, []);

  const handlemenu = (action = null) => {
    action === "show" ? setSideBar(true) : setSideBar(false);
    return 
  };

  return (
    <div className={`header ${menu && "active"}`}>
      <NavLink to="/">
        <h1 className="header__banner">
          Bright<span>Spire</span>
        </h1>
      </NavLink>
      <div className={`header__navbar ${sideBar && "active"}`}>
        <NavLink exact to="/">
          <span onClick={() => handlemenu()} className="header__menu">
            Home
          </span>
        </NavLink>

        <Link
          to="home__service__content"
          spy={true}
          smooth={true}
          duration={1000}
        >
          <span onClick={() => handlemenu()} className="header__menu">
            Services
          </span>
        </Link>

        <Link
          to="home__Portfolio__content"
          spy={true}
          smooth={true}
          duration={1000}
        >
          <span onClick={() => handlemenu()} className="header__menu">
            Portfolio
          </span>
        </Link>
        <NavLink to="/about">
          <span onClick={() => handlemenu()} className="header__menu">
            About us
          </span>
        </NavLink>
        <NavLink exact to="/contact">
          <span onClick={() => handlemenu()} className="header__menu">
            Contact
          </span>
        </NavLink>
      </div>
      <IconButton
        onClick={() => handlemenu("show")}
        className="header__menubar"
      >
        <MenuIcon style={{ color: "white", fontSize: "30px" }} />
      </IconButton>
      <IconButton
        onClick={() => handlemenu("close")}
        className={`header__close ${sideBar && "active"}`}
      >
        <CloseIcon style={{ fontSize: "30px" }} />
      </IconButton>
    </div>
  );
};

export default Header;
