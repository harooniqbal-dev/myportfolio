import React from "react";
import "./Home.css";
import Mission from "../mission/Mission";
import Banner from "../banner/Banner";
import Service from "../service/Service";
import { Heading } from "../footer/Footer";
import Form from "../form/Form";
import { services, statements } from "../../utils";
import { GetInTouch } from "../contact/Contact";
import image1 from "../../images/cgss.PNG";
import image2 from "../../images/covid.png";
import image3 from "../../images/netflix.png";

export const SubHeading = ({ title, myclass }) => {
  return <p className={myclass}>{title}</p>;
};

const Home = () => {
  return (
    <div className="home">
      <Banner></Banner>
      <div className="home__mission">
        <Mission
          title={statements[0].heading}
          text={statements[0].statement}
          buttontext="Get More"
        />
      </div>
      {/* <section className="home__content"> */}
      <section className="home__service__content">
        <Heading title="Our Services" myclass={"heading"} />
        <SubHeading title="what we provide" myclass={"sub__heading"} />
        <div className="home__services">
          {services.map((service) => {
            return (
              <Service
                key={service.id}
                serviceid={service.id}
                heading={service.service}
                description={service.shortdescription}
              />
            );
          })}
        </div>
      </section>
      <section className="home__Portfolio__content">
        <Heading title="Our Portfolio" myclass={"heading"} />
        <SubHeading title="what we can do" myclass={"sub__heading"} />
        <div className="home__Portfolio__content__inner">
          <Service projectimage={image1} projecturl={'http://cgss.edu.pk/'} />
          <Service projectimage={image2} projecturl={'https://covid-tracer-619ec.web.app/'} />
        
        </div>
      </section>

      <section className="home__project__content">
        <Heading title="Project Detail" myclass={"heading"} />
        <SubHeading title="what you want" myclass={"sub__heading"} />
        <div className="home__project__content__inner">
          <div className="home__project__content1">
            <div className="home__project__content1__div">
              <GetInTouch
                homepage="homepage"
                description="Email us with any questions or inquires or call +923368141304. We would
        happy to answer your questions and setup a meeting with you. BrightSpire
        is ready to bridge its customers. We’ve got everything covered for your
        needs."
              />
            </div>
          </div>
          <Form projectform="project" />
        </div>
      </section>
    </div>
  );
};

export default Home;
