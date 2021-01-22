import React from "react";
import "./ContactInfo.css";
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ContactItem from "../contactitem/ContactItem";
import PhoneIcon from "@material-ui/icons/Phone";
const ContactInfo = ({ iconcolor }) => {
  return (
    <div className="ContactInfo">
      <ContactItem
        Icon={PhoneIcon}
        title="Phone Number"
        description="+923478167467"
        iconcolor={iconcolor}
      />
      <ContactItem
        Icon={PersonIcon}
        description="BrightSpire"
        iconcolor={iconcolor}
      />
      <ContactItem
        Icon={EmailIcon}
        description="harooniqbal584@gmail.com"
        iconcolor={iconcolor}
      />
      <ContactItem
        Icon={LocationOnIcon}
        description="Lahore"
        iconcolor={iconcolor}
      />
    </div>
  );
};

export default ContactInfo;
