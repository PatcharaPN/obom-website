import React from "react";
import ServicesCard from "./ServicesCard";

type Props = {};

const ServicesCardElement = (props: Props) => {
  return (
    <div className="flex gap-10">
      <ServicesCard name={"Services 1"} />
      <ServicesCard name={"Services 2"} />
      <ServicesCard name={"Services 3"} />
    </div>
  );
};

export default ServicesCardElement;
