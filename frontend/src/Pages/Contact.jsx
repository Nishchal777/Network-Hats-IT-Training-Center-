import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Contact() {
  const handleMail = () => {
    window.location.href = "mailto:nepalnischal7@gmail.com";
  };
  return (
    <div className="text-center px-10 sm:px-10 py-10">
      <div className="text-black capitalize font-bold text-4xl mb-2 border-b-4 inline-block pb-2 border-blue-500">
        Get In Touch
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-6">
        <div className="flex flex-col  gap-3 p-5 items-center ">
          <FaPhoneAlt className="size-[40px] text-blue-500" />
          <div className="font-bold text-lg">Phone</div>
          <div className="text-gray-500 text-center">+9779864832535</div>
        </div>
        <div className="flex flex-col gap-3 p-5 items-center ">
          <MdEmail className="size-[45px] text-blue-500" />
          <div className="font-bold text-lg">Mail</div>
          <Link onClick={handleMail}>
            <div className="text-gray-500 text-center">
              nepalnischal7@gmail.com
            </div>
          </Link>
        </div>
        <div className="flex flex-col gap-3 p-5 items-center ">
          <FaLocationDot className="size-[40px] text-blue-500" />
          <div className="font-bold text-lg">Address</div>
          <Link to="https://maps.app.goo.gl/irBNRaEVVndgTpUx9">
            <div className="text-gray-500 text-center">
              Baneshowr, Kathmandu
            </div>
          </Link>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pb-5">
          <input
            className="w-full p-3 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Name"
          />
          <input
            className="w-full p-3 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            placeholder="Email"
          />
        </div>

        <div className="flex flex-col gap-5">
          <input
            type="text"
            className="w-full p-3 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Subject"
          />
          <textarea
            className="w-full p-3 bg-gray-200 rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-blue-500 "
            placeholder="Message"
          ></textarea>
        </div>

        <div className="mt-5 text-center">
          <button className="bg-blue-500 text-white py-3 px-6 rounded-md hover:opacity-60 transition">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
