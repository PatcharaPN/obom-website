import React from "react";

interface ServicesCardProp {
  imgPath?: string;
  name?: String;
  information?: string;
}

const ServicesCard = (Cardprops: ServicesCardProp) => {
  return (
    <div className="hover:scale-102 duration-300 translate-0.1  flex flex-col items-center pt-5.5 w-62 h-90 bg-gray-300 rounded-xl">
      <div className="w-50 h-50 bg-gray-400 rounded-2xl"></div>
      <div className="w-full h-fit px-5.5 py-3">
        <p className="font-semibold">{Cardprops.name}</p>
        <p className="">{Cardprops.information}</p>
      </div>
    </div>
  );
};

export default ServicesCard;
