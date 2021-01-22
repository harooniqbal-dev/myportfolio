import React from "react";
import Banner from "../banner/Banner";
import "./Contact.css";
import Form from "../form/Form";
import ContactInfo from "../contactinfo/ContactInfo";
import { Heading } from "../footer/Footer";
import { SubHeading } from "../home/Home";

export const GetInTouch = ({ homepage, description }) => {
  return (
    <>
      {homepage ? (
        <h3
          className="getintouch__heading"
          style={{ fontSize: "24px", fontWeight: "700" }}
        >
          <span style={{ color: "crimson" }}>GET IN</span> TOUCH
        </h3>
      ) : (
        <h3 className="getintouch__heading">GET IN TOUCH</h3>
      )}
      <p className="getintouch__text">{description}</p>
    </>
  );
};

const Contact = () => {
  return (
    <div className="contact">
      <Banner title="Contact" Breadcum="Home" />
      <div className="contact__outerdiv">
        <Heading title={"Message"} myclass="heading" />
        <SubHeading title="get in touch" myclass="sub__heading" />
        <div className="contact__div">
          <div className="Contact__info">
            <GetInTouch
              description="Email us with any questions or inquires or call +923368141304. We would
        happy to answer your questions and setup a meeting with you. BrightSpire
        is ready to bridge its customers. We’ve got everything covered for your
        needs."
            />
            <ContactInfo iconcolor={"crimson"} />
          </div>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Contact;
