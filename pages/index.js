import React from "react";

import A1ClubOfferes from "@/components/pages/home/A1ClubOfferes";
import ForClubCard from "@/components/pages/home/ForClubCard";
import Offers from "@/components/pages/home/Offers";
import PartnerOffers from "@/components/pages/home/PartnerOffers";
import Welcome from "@/components/pages/home/Welcome";
import Games from "@/components/pages/home/Games";
import Partners from "@/components/pages/home/Partners";
import FAQ from "@/components/pages/home/FAQ";
import UserCard from "@/components/pages/home/UserCard";
import CarouselSegment from "@/components/pages/home/CarouselSegment";
import Banner from "@/components/pages/home/Banner";
import MobileHomePage from "@/components/pages/home/MobileHomePage";

const Home = () => {
  return (
    <div>
      <div className="block xs:hidden px-4">
        <CarouselSegment />
      </div>
      <Banner />
      
      <MobileHomePage />

      <div className="hidden xs:block px-10 s:px-36 xl:px-56">
        <CarouselSegment />
        <div className="hidden xs:flex gap-24">
          <div className="w-full lg:w-2/3">
            <Welcome />
            <Offers />
            <ForClubCard />
            <A1ClubOfferes />
            <PartnerOffers />
            <Games />
          </div>
          <UserCard />
        </div>
        <Partners />
        <FAQ />
      </div>
    </div>
  );
};

export default Home;
