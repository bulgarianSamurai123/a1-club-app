import React from "react";

import Button from "@/components/layout/Button";
import Paragraph from "@/components/layout/Paragraph";

const A1ClubOfferes = () => {
  return (
    <div className="flex flex-col s:flex-row gap-5 xs:gap-16 mt-10 xs:mt-14 items-center">
      <div className="bg-gray-500 w-full s:w-[150%] h-80 rounded-3xl" />
      <div>
        <h3>А1 клуб оферти</h3>
        <Paragraph>
          Специални оферти и отстъпки от цени на смартфони и други устройства, и
          различни видове бонуси от нас, като знак на благодарност за твоята
          лоялност.
        </Paragraph>
        <Button>Виж офертите</Button>
      </div>
    </div>
  );
};

export default A1ClubOfferes;
