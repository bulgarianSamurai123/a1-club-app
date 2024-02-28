import React from "react";

import Offers from "./Offers";
import ForClubCard from "./ForClubCard";
import A1ClubOfferes from "./A1ClubOfferes";
import PartnerOffers from "./PartnerOffers";
import Games from "./Games";
import FAQ from "./FAQ";

const MobileHomePage = () => {
  return (
    <>
      <div className="block xs:hidden relative w-full px-4">
        <div className="block xs:hidden bg-gray-112 w-full h-52 mt-4 rounded-t-3xl" />
        <div className="bg-red-253 flex flex-row justify-between items-center py-3 px-4 rounded-t-3xl absolute top-2/3 pb-10 w-[92%]">
          <div className="flex flex-row gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
              />
            </svg>
            <p>За А1 клуб</p>
          </div>
          <button className="bg-white text-red-255 rounded-full p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
        </div>
        <div className="p-4 bg-white z-20 absolute top-48 w-[92%] shadow-2xl rounded-3xl">
          <h2 className="text-xl pb-6">Добре дошъл в А1 клуб!</h2>
          <p className="text-gray-112">
            Тук ще откриеш специални оферти за теб, игри с атрактивни награди,
            както и годишни или ексклузивни отстъпки от нашите партньори в
            разнообразни сфери на дейност. За да се възползваш от всичко това
            открий своята А1 клубна карта с уникален номер.
          </p>
          <Offers />
          <ForClubCard />
          <A1ClubOfferes />
          <PartnerOffers />
          <Games />
        </div>
      </div>
      <div className="block xs:hidden mt-[156rem] px-4">
        <FAQ />
      </div>
    </>
  );
};

export default MobileHomePage;
