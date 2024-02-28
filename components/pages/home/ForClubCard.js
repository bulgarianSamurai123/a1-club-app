import React from "react";

import Paragraph from "@/components/layout/Paragraph";

const ForClubCard = () => {
  return (
    <div>
      <h3 className="pb-3 text-lg">За А1 клубна карта</h3>
      <Paragraph>
        A1 клубна карта е дигитална карта, на която е изписан твоя персонален
        клубен номер.​ Можеш да я откриеш, след като влезеш в титулярния си
        профил в Моят А1 или след като се идентифицираш с номер на твоя А1
        услуга и ЕГН.​В търговските обекти на нашите партньори можеш да се
        възползваш от отстъпки като използваш персоналния клубен номер от
        картата.​
      </Paragraph>
      
      <div className="flex flex-row gap-3 pt-5">
        <img src="./assets/Group 584.svg" alt="PDF icon" />
        <button className="text-red-255">Правила и условия на А1 клуб</button>
      </div>
    </div>
  );
};

export default ForClubCard;
