import React from "react";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaUserGraduate } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

function Review() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-10 mt-8 bg-fixed bg-cover bg-[url('./assets/bg.jpg')]">
      <div className="flex flex-col gap-4 p-5 items-center ">
        <FaPeopleGroup className="size-[45px] text-blue-500" />
        <div className="font-bold text-white text-4xl">40+</div>
        <div className="text-white text-center">Happy Clients</div>
      </div>
      <div className="flex flex-col gap-4 p-5 items-center ">
        <FaUserGraduate className="size-[45px] text-blue-500" />
        <div className="font-bold text-white text-4xl">5K+</div>

        <div className="text-white text-center">Project Completed</div>
      </div>
      <div className="flex flex-col gap-4 p-5 items-center ">
        <AiOutlineFundProjectionScreen className="size-[45px] text-blue-500" />
        <div className="font-bold text-white text-4xl">30+</div>
        <div className="text-white text-center">Baneshowr, Kathmandu</div>
      </div>
    </div>
  );
}

export default Review;
