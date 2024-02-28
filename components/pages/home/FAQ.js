import React from "react";

import DropDown from "@/components/layout/DropDown";

const FAQ = () => {
  return (
    <div>
      <h2 className="font-semibold text-2xl mt-14 pb-6 w-full text-center">
        Често задавани въпроси
      </h2>

      <div className="flex flex-col gap-3">
        <DropDown>Как мога да стана лоялен клиент на А1?</DropDown>
        <DropDown>Какво е А1 клубна карта/А1 клубен номер?</DropDown>
        <DropDown>Какво включва лоялната програма на А1?</DropDown>
      </div>
    </div>
  );
};

export default FAQ;
