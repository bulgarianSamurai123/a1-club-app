import React from "react";
import Carousel from "nuka-carousel";

const CarouselSegment = () => {
  return (
    <div className="py-7">
      <Carousel
        autoplay
        defaultControlsConfig={{
          pagingDotsClassName: "pagingDotsClassName",
          pagingDotsStyle: {
            fill: "#ff372d",
          },
          nextButtonClassName: "nextButtonClassName",
          prevButtonClassName: "prevButtonClassName",
        }}
      >
        <div className="bg-gray-240 h-40 rounded-xl" />
        <div className="bg-gray-240 h-40 rounded-xl" />
        <div className="bg-gray-240 h-40 rounded-xl" />
      </Carousel>
    </div>
  );
};

export default CarouselSegment;
