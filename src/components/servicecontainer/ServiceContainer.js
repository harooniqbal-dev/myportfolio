import React, { useEffect, useState } from "react";
import "./ServiceContainer.css";
import { useParams } from "react-router-dom";
import Banner from "../banner/Banner";
import { services } from "../../utils";
import { BreadCum } from "../banner/Banner";
export const ServiceBanner = ({ title }) => {
  return (
    <div
      className="ServiceBanner"
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350")',
      }}
    >
      <h2 style={{ color: "#fff" }} className="ServiceBanner__heading">
        {title}
      </h2>
      {/* <BreadCum title={title} Breadcum={"Home"} /> */}
    </div>
  );
};

const ServiceContainer = () => {
  const { myservice } = useParams();
  const [service, setService] = useState([]);
  useEffect(() => {
    const data = services.find((item, index) => {
      return item.service === myservice;
    });
    setService(data);
  }, [myservice]);
  return (

    <div className="servicecontainer">
      <ServiceBanner title={service.service} />
      <div className="servicecontainer__detail">
        <h2 className="ServiceBanner__heading">{myservice}</h2>
        <div className="servicecontainer__inner">
          <div className="servicecontainer__description">
            <p>{service.longdescription}</p>
            {service.descriptionpoint && (
              <div style={{paddingLeft:'20px',paddingTop:'10px'}}>
                {service?.descriptionpoint.map((item, index) => {
                  return <p style={{marginBottom:'5px'}} key={`point${index}`}>{index+1}. {item}</p>;
                })}
              </div>
            )}
            {/* {service.descriptionpoint &&(<p>{service.descriptionpoint[0]}</p>)} */}
          </div>
          <div className="servicecontainer__Image">
            <img src={service.imageurl} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceContainer;
