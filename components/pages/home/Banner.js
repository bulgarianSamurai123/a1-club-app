import React from "react";
import Navigation from "@/components/layout/Navigation";
import MobileNavigation from "@/components/layout/MobileNavigation";

const Banner = () => {
  return (
    <div className="xs:bg-gradient-to-t from-white to-gray-242 s:px-36 xl:px-56 xl:drop-shadow-lg pb-3">
      <div className="hidden xs:block bg-gray-112 w-full h-52 mb-3 rounded-b-2xl" />
      <div className="hidden xs:flex flex-row gap-3 text-sm items-center pb-7">
        <button>Моят А1</button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-4 h-4 text-red-218"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
        <p>А1 клуб</p>
      </div>

      <Navigation />
      <MobileNavigation />
    </div>
  );
};

export default Banner;
