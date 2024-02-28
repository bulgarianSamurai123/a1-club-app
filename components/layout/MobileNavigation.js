import { links } from "@/links";
import React from "react";

const MobileNavigation = () => {
  return (
    <nav className="flex xs:hidden w-full text-center">
      <ul className="grid grid-cols-2 gap-8 justify-center bg-gray-242 p-4 rounded-3xl">
        {links.map((link) => (
          <li
            key={link.id}
            className="bg-white w-auto rounded-3xl flex flex-col text-center justify-center items-center py-4 px-16"
          >
            <img className="w-5 h-5" src={link.icon} alt={link.linkTitle} />
            <p className="text-sm">{link.linkTitle}</p>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileNavigation;
