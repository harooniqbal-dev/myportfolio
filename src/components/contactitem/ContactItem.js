import React from "react";
import "./ContactItem.css";
const ContactItem = ({ Icon, title, description,iconcolor }) => {
  return (
    <div className="contactitem">
      <Icon className={`my_class ${iconcolor && 'contactitem__icon'}`} />
      <div className="contactitem__text">
        {title && (
          <h4 style={{ paddingBottom: "0.4rem", fontSize: "16px" }}>{title}</h4>
        )}
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ContactItem;
