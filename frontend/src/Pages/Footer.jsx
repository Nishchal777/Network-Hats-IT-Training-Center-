import React from "react";
import logo from "../assets/nh.png";

function Footer() {
  return (
    <div className="bg-gray-900  flex flex-col items-center p-4 text-gray-400">
      <div>
        <img src={logo} alt="logo" className="w-20" />
      </div>
      <div>
        Copyright © 2024. All Rights Reserved. Designed by Nischal Nepal.
      </div>
    </div>
  );
}

export default Footer;
