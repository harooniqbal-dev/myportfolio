import React from "react";
import Banner from "../banner/Banner";
import Mission from "../mission/Mission";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Heading } from "../footer/Footer";
import { SubHeading } from "../home/Home";
import { statements, teammember } from "../../utils";

// start import Team member image link

import image1 from "../../images/Haroon Iqbal.jpg";
import image2 from "../../images/mybanner.jpg";
// import image3 from "../../images/3.jpg";
import image4 from "../../images/yaseen.jpg";
import image5 from "../../images/Sana.jpg";

//end import Team member image link

import { SocialItem } from "../sociallink/SocialLink";
import "./About.css";

export const OurTeam = () => {
  return (
    <>
      {teammember.map((member) => {
        return (
          <TeamMember
            key={member.id}
            memberid={member.id}
            name={member.name}
            skills={member.skills}
          />
        );
      })}
    </>
  );
};

export const TeamMember = ({
  name,
  skills,
  imageurl,
  memberid,
  facebooklink,
  instagramlink,
  twitterLink,
  linkdin,
}) => {
  return (
    <div className="teammmember__outer">
      <div className="teammmember__inner">

        {/* start Team Member image */}
        {memberid === 1 && <img src={image1} className="teammember__image" />}
        {memberid === 2 && <img src={image2} className="teammember__image" />}
        {memberid === 3 && <img src={image4} className="teammember__image" />}
        {/* {memberid === 4 && <img src={image4} className="teammember__image" />} */}
        {memberid === 5 && <img src={image5} className="teammember__image" />}

        {/* end Team Member image */}
            
        
        <h4 className="teammmember__inner__heading">{name}</h4>

        {/* start Team member skills */}

        <p className="teammmember__inner__text">{skills}</p>

         {/* end Team member skills */}

        {facebooklink && (
          <div
            className="teammember__sociallink"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <SocialItem
              Icon={FacebookIcon}
              myclass={{ fontSize: "25px", color: "crimson", margin: "0 5px" }}
            />
            <SocialItem
              Icon={LinkedInIcon}
              myclass={{ fontSize: "25px", color: "crimson", margin: "0 5px" }}
            />
            <SocialItem
              Icon={InstagramIcon}
              myclass={{ fontSize: "25px", color: "crimson", margin: "0 5px" }}
            />
            <SocialItem
              Icon={TwitterIcon}
              myclass={{ fontSize: "25px", color: "crimson", margin: "0 5px" }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className="about">
      <Banner title="About" Breadcum="Home" />

      <div className="about__information">
        <h2 style={{ padding: "0", margin: "0" }} className="heading">
          We are <span style={{ color: "crimson" }}>BrightSpire</span>
        </h2>
        <div className="about__statement">
          <div className="Our__Statement mission__Statement">
            <Mission
              title={statements[0].heading}
              text={statements[0].statement}
            />
          </div>
          <div className="Our__Statement vision__Statement">
            <Mission
              title={statements[1].heading}
              text={statements[1].statement}
            />
          </div>
        </div>
      </div>
      <div className="about__ourteam">
        <Heading title="Our Team" myclass={"heading"} />
        <SubHeading title="who with us" myclass={"sub__heading"} />
        <div className="about__ourteam__outer">
          <OurTeam />
        </div>
      </div>
    </div>
  );
};

export default About;
