import React from "react";
import ContactInfo from "../contactinfo/ContactInfo";
import FooterItem from "../footeritem/FooterItem";
import SocialLink from "../sociallink/SocialLink";
import { services } from "../../utils";
import "./Footer.css";

export const Heading = ({ title, myclass }) => {
  return (
    <h2 style={{ padding: "0", margin: "0" }} className={myclass}>
      {title}
    </h2>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__div">
        <h2
          style={{ padding: "0 0 1.3rem", fontSize: "28px", fontWeight: "700" }}
        >
          BRIGHT<span style={{ color: "black", marginLeft: "5px" }}>SPIRE</span>
        </h2>
        <ContactInfo />
      </div>
      <div className="footer__div">
        <Heading title="Quick link" myclass="footer__heading" />
        <FooterItem title="Home" mylink="" firstelement="smothing" />
        <FooterItem title="Contact" mylink="contact" />
        <FooterItem title="About Us" mylink="about" />
      </div>
      <div className="footer__div">
        <Heading title="Services" myclass="footer__heading" />
        {services.map((service, index) => {
          return (
            <FooterItem
              title={service.service}
              firstelement={index=== 0 ? 'smothing':null}
              mylink={`${service.service}`}
            />
          );
        })}
      </div>
      <div className="footer__div">
        <Heading title="Follow Us" myclass="footer__heading" />
        <SocialLink />
      </div>
    </div>
  );
};

export default Footer;
