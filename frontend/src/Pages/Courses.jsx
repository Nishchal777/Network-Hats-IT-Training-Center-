import React from "react";
import Programming from "../Components/Programming";
import Development from "../Components/Development";
import NetworkandSecurity from "../Components/NetworkandSecurity";

function Courses() {
  return (
    <div>
      <div className="text-center px-4 lg:px-24 py-10">
        <div className=" text-black capitalize font-bold text-4xl mb-5 border-b-4 inline-block pb-2 border-blue-500">
          Our Courses
        </div>
      </div>

      <Programming />
      <Development></Development>
      <NetworkandSecurity></NetworkandSecurity>
    </div>
  );
}

export default Courses;
