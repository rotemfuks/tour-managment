import React from "react";
import "../styles/about.css";
import CommonSection from "../shared/CommonSection";
import Newsletter from "../shared/Newsletter";

const About = () => {
  return (
    <>
      <CommonSection title={"About"} />
      <section>
        <div className="about-page-container">
          <div className="about-header">
            <h3 className="subtitle">Our Story</h3>
          </div>

          <div className="about-content">
            <p>
              Welcome to Travel World, where passion for travel meets
              exceptional service. Founded in 2023, we have been dedicated to
              creating unforgettable journeys for our clients.
            </p>

            <p>
              At Travel World, we believe that travel is not just about visiting
              places; it's about creating lasting memories. Our team of
              experienced professionals is committed to providing you with
              personalized and seamless travel experiences.
            </p>

            <p>
              Whether you're an avid explorer or a first-time traveler, we have
              crafted a range of tours that cater to diverse interests and
              preferences. From cultural immersions to thrilling adventures, we
              have something for everyone.
            </p>
          </div>
          <div className="about-values">
            <h3 className="subtitle_secondery">Our Values</h3>
            <div className="values-container">
              <div className="value-box">
                <h4>Quality</h4>
                <p>
                  We are committed to delivering high-quality experiences,
                  ensuring every detail meets the highest standards.
                </p>
              </div>
              <div className="value-box">
                <h4>Integrity</h4>
                <p>
                  Integrity is at the core of everything we do. We prioritize
                  honesty, transparency, and ethical conduct.
                </p>
              </div>
              <div className="value-box">
                <h4>Customer-Centric</h4>
                <p>
                  Our focus is on you. We strive to exceed your expectations and
                  create journeys tailored to your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Newsletter />
    </>
  );
};

export default About;
