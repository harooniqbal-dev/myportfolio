import React from "react";
import "./SocialLink.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
export const SocialItem = ({ Icon, link, myclass }) => {
  const handlelink = (link) => {
    window.open(link);
  };
  return (
    <span onClick={() => handlelink(link)}>
      <Icon className="socialitem" style={{ ...myclass, cursor: "pointer" }} />
    </span>
  );
};
const SocialLink = ({link}) => {
  return (
    <div className="sociallink">

     
      <SocialItem
        Icon={InstagramIcon}
        
        // instagram Social Link
        link="https://www.instagram.com/brightspire_/?igshid=1b4s1wunb8rvc"
        myclass={{ fontSize: "40px", marginRight: "20px" }}
      ></SocialItem>
      
    </div>
  );
};

export default SocialLink;
