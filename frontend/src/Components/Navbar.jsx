import { useState, useEffect, useRef } from "react";
import React from "react";
import logo from "../assets/nh.png";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null); // Reference for the menu
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // if (window.scrollY > 50) {
      //   setScrolling(true);
      // } else {
      //   setScrolling(false);
      // }
      setScrolling(window.scrollY > 20); //same as above. 20 if user ha scrolled 20 pixels
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);
  return (
    <>
      <nav
        className={`fixed top-0 left-0 border-gray-200 w-full flex justify-between pt-1 px-10 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] items-center z-50 transition-all duration-300 ${
          scrolling ? "bg-white border-b " : "bg-transparent border-none "
        }`}
      >
        {/* Logo Section */}
        <div className="flex items-center">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <img src={logo} alt="logo" className="w-24 md:w-[7rem]" />
          </Link>
        </div>
        {/* Navigation Links */}
        <ul
          className={`hidden md:flex gap-6 ${
            scrolling ? "text-black" : "text-white"
          } `}
        >
          {["home", "about", "services", "courses", "contact"].map((item) => (
            <li key={item}>
              <Link
                to={item}
                spy={true} //Detects active section while scrolling
                smooth={true}
                duration={500}
                activeClass="border-blue-500 border-b-2"
                offset={-70} //Adjusts for the navbar height so the active state updates correctly
                className="cursor-pointer hover:border-blue-500 hover:border-b-2 pb-1"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
        {/* Mobile Menu Button (Hamburger / X) */}
        <button
          className={`md:hidden text-2xl z-50  ${
            scrolling ? "" : "text-white"
          }`}
          activeClass="border-blue-500 border-b-2"
          spy={true}
          offset={-70} //Adjusts for the navbar height so the active state updates correctly
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes className="" /> : <FaBars />}
        </button>
      </nav>
      {/*  Mobile Hamburger */}

      <div
        ref={menuRef}
        className={`fixed top-0 right-0 w-[12rem] h-full bg-white shadow-lg flex flex-col items-center pt-20 space-y-6 md:hidden z-50 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 `}
      >
        {/* Close Button at the Top Right */}
        <button
          className="absolute top-5 right-5 text-3xl text-gray-700"
          onClick={() => setIsOpen(false)}
        >
          <FaTimes />
        </button>
        {/* Mobile Menu Links */}
        <ul className="flex flex-col items-center space-y-5 text-black text-lg">
          {["home", "about", "services", "courses", "contact"].map((item) => (
            <li key={item} onClick={() => setIsOpen(false)}>
              <Link
                to={item}
                spy={true} //Detects active section while scrolling
                smooth={true}
                duration={500}
                offset={-70} //Adjusts for the navbar height so the active state updates correctly
                activeClass="border-blue-500 border-b-2"
                className="cursor-pointer  hover:border-blue-500 hover:border-b-2 pb-1"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Navbar;

/* Old Method */

{
  /* <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:border-blue-500 hover:border-b-2  pb-1"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:border-blue-500 hover:border-b-2  pb-1"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="courses"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:border-blue-500 hover:border-b-2  pb-1"
          >
            Courses
          </Link>
        </li>
        <li>
          <Link
            to="services"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:border-blue-500 hover:border-b-2  pb-1"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            spy={true}

            activeClass="border-b-2 border-blue-500"

            className="cursor-pointer hover:border-blue-500 hover:border-b-2  pb-1"
          >
            Contact
          </Link>
        </li> */
}
