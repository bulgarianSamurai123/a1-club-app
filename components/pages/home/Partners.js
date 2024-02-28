import { partners } from "@/partners";
import Carousel from "nuka-carousel";
import React from "react";

const Partners = () => {
  return (
    <div className="hidden s:block">
      <h2 className="font-semibold text-2xl mt-16 pb-3">Партньори</h2>
      <Carousel
        className="bg-white rounded-3xl px-12"
        adaptiveHeight={true}
        slidesToShow={2}
      >
        {partners.map((partner) => (
          <div className="flex flex-row justify-center items-center">
            <img
              className="w-1/2 h-1/2"
              key={partner.id}
              src={partner.logo}
              alt={partner.alt}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Partners;
