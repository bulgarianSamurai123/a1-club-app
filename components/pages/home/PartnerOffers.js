import React from "react";

import Button from "@/components/layout/Button";
import Paragraph from "@/components/layout/Paragraph";

const PartnerOffers = () => {
  return (
    <div className="flex flex-col-reverse s:flex-row gap-5 xs:gap-16 mt-10 xs:mt-14 items-center">
      <div>
        <h3>Оферти от партньори</h3>
        <Paragraph>
          С твоята персонална А1 клубна карта/клубен номер, можеш да се
          възползваш от атрактивни и разнообразни отстъпки, и ексклузивни
          предложения от нашите партньори в разнообразни категории като мода и
          красота, авто-мото, спорт и още много.
        </Paragraph>
        <Button>Виж всички</Button>
      </div>
      <img className="w-full" src="./assets/A1_Partner_Offers_654x510.png" alt="Partner Offers" />
    </div>
  );
};

export default PartnerOffers;
