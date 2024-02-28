import React from "react";

import Paragraph from "@/components/layout/Paragraph";

const Welcome = () => {
  return (
    <div>
      <h2 className="font-semibold text-2xl pb-3">Добре дошли в А1 клуб!</h2>
      <Paragraph>
        Тук ще откриеш специални оферти за теб, игри с атрактивни награди, както
        и годишни или ексклузивни отстъпки от нашите партньори в разнообразни
        сфери на дейност. За да се възползваш от всичко това открий своята А1
        клубна карта с уникален номер.
      </Paragraph>
    </div>
  );
};

export default Welcome;
