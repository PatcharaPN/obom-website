import React from "react";
import Slider from "react-slick";

// Import Slick Styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  // Slick settings with controls and indicators
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true, // Enable indicator dots
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    nextArrow: <div className="slick-next">Next</div>, // Custom "Next" arrow (optional)
    prevArrow: <div className="slick-prev">Prev</div>, // Custom "Prev" arrow (optional)
  };

  return (
    <div className="carousel-container mt-5 p-10 pointer-events-none">
      <Slider {...settings}>
        <div>
          <img className="w-fit" src="../Carousel.png" alt="Slide 1" />
        </div>
        <div>
          <img className="w-fit" src="../Carousel.png" alt="Slide 2" />
        </div>
        <div>
          <img className="w-fit" src="../Carousel.png" alt="Slide 3" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
