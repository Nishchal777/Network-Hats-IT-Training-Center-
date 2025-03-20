import React from "react";
import { GiScales } from "react-icons/gi";
import network from "../assets/Network";

const iconMap = { GiScales }; // Map string names to actual icons

function Network() {
  return (
    <div className=" px-4 lg:px-24 py-4">
      <div className="pt-8 text-black capitalize font-bold text-xl border-b-4 border-blue-500 inline-block pb-1">
        Network & Security
      </div>
      <div className="text-center py-1">
        <div className="mt-8 grid gap-3 grid-cols-1 md:grid-cols-1   lg:grid-cols-3 xl:gap-4">
          {network.map((item, index) => {
            const IconComponent = iconMap[item.icon]; // Get actual icon component
            return (
              <div
                key={index}
                className="flex flex-col gap-3 p-10 border border-gray-100 shadow-md transition-all duration-300 hover:shadow-2xl hover:text-white hover:bg-gray-900 hover:scale-105"
              >
                <div className="flex justify-center items-center mb-1 gap-[1rem]">
                  <div className="">
                    {IconComponent && (
                      <IconComponent className="text-blue-500 size-[45px]" />
                    )}
                  </div>
                  <div className="font-bold text-2xl">{item.title}</div>
                </div>
                <div className="text-gray-500 text-center">
                  {item.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Network;
