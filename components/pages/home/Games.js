import React from "react";

import Button from "@/components/layout/Button";
import Paragraph from "@/components/layout/Paragraph";

const Games = () => {
  return (
    <div className="flex flex-col s:flex-row gap-5 xs:gap-16 mt-10 xs:mt-14 items-center">
      <img src="./assets/A1_Prize-Games_654x510.png" alt="Price Games" />
      <div>
        <h3>Игри с награди</h3>
        <Paragraph>
          Очакват те интересни игри с неустоими награди. За да се възползваш,
          влез в титулярния си профил в Моят А1. С А1 клуб късметът е на твоя
          страна!​
        </Paragraph>
        <Button>Към игрите</Button>
      </div>
    </div>
  );
};

export default Games;
