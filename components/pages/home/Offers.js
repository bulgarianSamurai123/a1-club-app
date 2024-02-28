import React from "react";

import { offers } from "@/offers";

const Offers = () => {
  return (
    <ul className="grid grid-cols-2 s:flex s:flex-row gap-3 my-11">
      {offers.map((offer) => (
        <li key={offer.id} className="flex flex-col items-center">
          <div className="bg-gray-242 xs:bg-white text-center rounded-full">
            <img className="p-6 w-24" src={offer.image} alt={offer.imageAlt} />
          </div>
          <p className="text-center text-base font-sans">
            {offer.text}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default Offers;
