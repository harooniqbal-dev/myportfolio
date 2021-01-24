import React from "react";
import "./Service.css";
import WebIcon from "@material-ui/icons/Web";
import AppleIcon from "@material-ui/icons/Apple";
import AndroidIcon from "@material-ui/icons/Android";
import BusinessIcon from '@material-ui/icons/Business';
import { useHistory } from "react-router-dom";
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
const Service = ({
  heading,
  description,
  serviceid,
  projectimage,
  projecturl,
}) => {
  const history = useHistory();
  const openUrl = (projecturl) => {
    window.open(projecturl);
  };
  return (
    <div className={projectimage ? "project" : "service"}>
      {projectimage ? (
        <>
          <div className="project__inner">
            <img
              src={projectimage}
              style={{ height: "220px", cursor: "pointer" }}
              onClick={() => openUrl(projecturl)}
            />
          </div>
        </>
      ) : (
        <>
          <div
            className="service__inner"
            onClick={() => history.push(`/${heading}`)}
          >
            {serviceid === 1 && (
              <WebIcon style={{ fontSize: "70px" }} className="service__icon" />
            )}
            {serviceid === 2 && (
              <AndroidIcon
                style={{ fontSize: "70px" }}
                className="service__icon"
              />
            )}
            {serviceid === 3 && (
              <AppleIcon
                style={{ fontSize: "70px" }}
                className="service__icon"
              />
            )}
            {serviceid === 4 && (
              <BusinessCenterIcon
                style={{ fontSize: "70px" }}
                className="service__icon"
              />
            )}
            {serviceid === 5 && (
              <BusinessIcon
                style={{ fontSize: "70px" }}
                className="service__icon"
              />
            )}
            <h3 className="heading1">{heading}</h3>
            <p className="service__text">{description}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Service;
