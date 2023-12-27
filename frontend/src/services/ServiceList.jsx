import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";

import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customizationImg from "../assets/images/customization.png";

const serviceDate = [
  {
    imgUrl: weatherImg,
    title: "Calculate Weather",
    desc: "Embark on a journey with our cutting-edge weather calculation tool.",
  },
  {
    imgUrl: guideImg,
    title: "Best Tour Guide",
    desc: "Explore with the best guides—immerse in captivating stories, discover hidden gems, and embrace cultural richness.",
  },
  {
    imgUrl: customizationImg,
    title: "Customization",
    desc: "Craft a personalized journey with unique touches, choosing exclusive destinations and activities tailored to your style for a truly distinct adventure.",
  },
];

const ServiceList = () => {
  return (
    <>
      {serviceDate.map((item, index) => (
        <Col lg="3" md="3" sm="12" className="mb-4" key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
};

export default ServiceList;
