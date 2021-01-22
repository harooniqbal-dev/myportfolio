import { Title } from "@material-ui/icons";
import React from "react";
import Background from "../../images/mybanner.jpg";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import "./Banner.css";
export const BreadCum = ({ title, Breadcum }) => {
  return (
    <p className="banner__breadcum">
      <span>{Breadcum}</span>
      <span style={{alignItems:'center'}}>
        <NavigateNextIcon style={{ marginTop: "6px" }} />
      </span>
      <span style={{ marginTop: "2px" }}>{title}</span>
    </p>
  );
};
const Banner = ({ title, Breadcum }) => {
  return (
    <div className="banner" style={{ backgroundImage: `url('${Background}')` }}>
      {title && (
        <h2 className="banner__heading" style={{ color: "white" }}>
          {title}
        </h2>
      )}
      {Breadcum && <BreadCum title={title} Breadcum={Breadcum} />}
    </div>
  );
};

export default Banner;
