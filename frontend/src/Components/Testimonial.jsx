import React from "react";
import pp from "../assets/pp.png";

function Testimonials() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2 py-[5rem] bg-fixed bg-cover bg-[url('./assets/bg1.jpg')]">
      <div className=" flex ml-4 mr-4 md:ml-16 md:mr-16 lg:ml-[8rem] p-5 my-2 bg-gray-900 rounded-md shadow-lg items-center">
        <img
          src={pp}
          alt=""
          className="w-12 h-12 sm:w-32 sm:h-32 md:w-32 md:h-32 rounded-full object-cover"
        />
        <div>
          <div className="text-xl pb-1 font-bold text-white">Nischal Nepal</div>
          <div className="text-sm pb-1 font-bold text-white">CEO of Apple</div>

          <p className="text-white text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
            eius sapiente omnis eum repudiandae exercitationem libero iure
            voluptatibus. Inventore nulla ipsam expedita ratione obcaecati atque
            cupiditate voluptate dolorem, perspiciatis rerum.
          </p>
        </div>
      </div>
      <div className="flex mr-4 ml-4 md:mr-16 md:ml-16 lg:mr-[8rem] p-5 my-2 bg-gray-900 rounded-md shadow-lg items-center">
        <img
          src={pp}
          alt=""
          className="w-12 h-12 sm:w-32 sm:h-32 md:w-32 md:h-32 rounded-full object-cover"
        />
        <div>
          <div className="text-xl pb-1 font-bold text-white">Nischal Nepal</div>
          <div className="text-sm pb-1 font-bold text-white">CEO of Apple</div>

          <p className="text-white text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
            eius sapiente omnis eum repudiandae exercitationem libero iure
            voluptatibus. Inventore nulla ipsam expedita ratione obcaecati atque
            cupiditate voluptate dolorem, perspiciatis rerum.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
