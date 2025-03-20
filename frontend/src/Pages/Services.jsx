import React from "react";
import services from "../assets/services";
import { GiScales } from "react-icons/gi";

const iconMap = { GiScales }; // Map string names to actual icons

function Services() {
  return (
    <div className="text-center px-4 lg:px-24 py-10">
      <div className="text-black capitalize font-bold text-4xl mb-5 border-b-4 inline-block pb-2 border-blue-500">
        Our Services
      </div>
      <div className="mt-8 grid gap-3 grid-cols-1 md:grid-cols-1   lg:grid-cols-3 xl:gap-8">
        {services.map((item, index) => {
          const IconComponent = iconMap[item.icon]; // Get actual icon component
          return (
            <div
              key={index}
              className="flex flex-col gap-3 p-16 border border-gray-100 shadow-md transition-all duration-300 hover:shadow-2xl hover:text-white hover:bg-gray-900"
            >
              <div className="flex justify-center items-center mb-1 gap-[0.75rem]">
                <div className="">
                  {IconComponent && (
                    <IconComponent className="text-blue-500 size-[45px]" />
                  )}
                </div>
                <div className="font-bold text-lg">{item.title}</div>
              </div>
              <div className="text-gray-500 text-center">
                {item.description}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
