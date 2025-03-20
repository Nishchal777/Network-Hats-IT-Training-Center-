import React from "react";
import { FaEye } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";
import { GiScales } from "react-icons/gi";

function About() {
  return (
    <div className="text-center px-4 lg:px-24 py-10">
      <div className="text-black capitalize font-bold text-4xl mb-5 border-b-4 inline-block pb-2 border-blue-500">
        about us
      </div>
      <div className=" mt-8 grid grid-cols-1 gap-3 sm:grid-cols-1 lg:grid-cols-3 xl:gap-8">
        <div className=" flex flex-col gap-3 items-center p-14 border border-gray-100 shadow-md transition-all duration-300 hover:shadow-2xl hover:text-white hover:bg-gray-900">
          <div>
            <FaEye className=" text-blue-500 size-[35px]" />
          </div>
          <div className=" font-bold text-lg">Our Vision</div>
          <div className="text-gray-500 text-center">
            Our vision is to be a leading force in shaping the future of digital
            transformation. We aim to be the trusted partner of choice for
            businesses seeking to thrive in the rapidly evolving digital
            landscape.
          </div>
        </div>
        <div className=" flex flex-col gap-3 items-center p-14 border border-gray-100 shadow-md transition-all duration-300 hover:shadow-2xl hover:text-white hover:bg-gray-900">
          <div>
            <TbTargetArrow className=" text-blue-500 size-[35px]" />
          </div>
          <div className="font-bold text-lg">Our Mission</div>
          <div className="text-gray-500  text-center">
            Our mission is to empower businesses and individuals to thrive in
            the digital world. We strive to deliver innovative solutions that
            exceed expectations, drive growth, and make a positive impact on our
            clients' success.
          </div>
        </div>
        <div className=" flex flex-col gap-3 items-center p-14 border border-gray-100 shadow-md transition-all duration-300 hover:shadow-2xl hover:text-white hover:bg-gray-900">
          <div>
            <GiScales className=" text-blue-500 size-[35px]" />
          </div>
          <div className="font-bold text-lg">Our Values</div>
          <div className="text-gray-500  text-center">
            Our values are the foundation of everything we do. Integrity,
            Innovation, Collaboration, and Customer Success are at the core of
            our identity and guide our actions every day.
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
