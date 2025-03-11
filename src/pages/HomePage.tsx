import React from "react";
import CarouselWithIndicators from "../components/Carousel";
import ServicesCard from "../components/ServicesCard";
import ServicesCardElement from "../components/ServicesCardElement";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <>
      <CarouselWithIndicators></CarouselWithIndicators>
      <div className="my-5 flex flex-col gap-10 items-center justify-center">
        <p className="text-2xl font-semibold ">Our Services</p>
        <ServicesCardElement />
      </div>
    </>
  );
};

export default HomePage;
