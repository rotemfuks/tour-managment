import React from "react";
import Slider from "react-slick";
import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";

import ava05 from "../../assets/images/ava-5.png";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p>
          "I recently used the Tours Abroad website to plan my dream vacation,
          and it exceeded all my expectations. The user-friendly interface made
          it a breeze to find the perfect tour package. The variety of
          destinations and activities catered to all preferences. The customer
          service was impeccable, addressing all my inquiries promptly. I had a
          seamless and unforgettable trip, thanks to Tours Abroad!"
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Max George</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          "Tours Abroad has become my go-to for international travel. Their
          website offers a wide range of well-organized tours. I was delighted
          by the attention to detail in their itineraries. Booking was
          hassle-free, and the communication throughout was excellent. Our
          family's recent trip to Europe was incredible, thanks to Tours Abroad.
          I highly recommend this platform for anyone seeking exceptional travel
          experiences."
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Lia Franklin</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
          "Tours Abroad made my solo adventure a fantastic experience. Their
          website is a treasure trove of exciting destinations and unique
          activities. The booking process was straightforward, and the reviews
          from fellow travelers were invaluable. The support team was responsive
          and accommodating. Thanks to Tours Abroad, I had an amazing time
          exploring Southeast Asia. It's a trusted platform for solo travelers
          like me."
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Eve Jones</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          "Tours Abroad is a game-changer for travel enthusiasts. The website is
          a user-friendly gem, offering diverse options for every type of
          traveler. My group tour to South America was incredibly
          well-organized, and the local guides were knowledgeable and friendly.
          I appreciated the safety measures in place during our journey. Tours
          Abroad offers quality and memorable experiences; I can't wait to book
          my next adventure through them!"
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava05} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Haled Jod</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonials;
