import React, { useState } from "react";
import logo from "../Assets/Logo/Madison-logo.svg";
import { Link } from "react-scroll";
import books from "../Assets/Icons/ic_books4.svg";
import calendar from "../Assets/Icons/ic_calendar.svg";
import contact from "../Assets/Icons/ic_contact.svg";
import { BsInstagram, BsFacebook } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <>
      <div className="fixed top-0 z-50 w-full h-[100px] flex justify-around items-center px-4 bg-[#FDFBF5] shadow-xl">
        <div>
          <img src={logo} alt="logo" style={{ width: "120px" }} />
        </div>

        {/* Menu */}
        <ul className="hidden md:flex m-2 text-[#857B6A] font-light text-sm cursor-pointer">
          <li className="pl-4">
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="pl-4">
            <Link to="books" smooth={true} duration={500}>
              Books
            </Link>
          </li>
          <li className="pl-4">
            <Link to="calendar" smooth={true} duration={500}>
              Calendar
            </Link>
          </li>
          <li className="pl-4">
            <Link to="Contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
          <li className="pl-3 text-sm">
            <a
              href="https://www.instagram.com/deborahmadison/"
              target="_blank"
              rel="noreferrer"
            >
              <BsInstagram size={20} />
            </a>
          </li>
          <li className="pl-3 text-sm">
            <a
              href="https://www.facebook.com/cookwithdeborahmadison"
              target="_blank"
              rel="noreferrer"
            >
              <BsFacebook size={20} />
            </a>
          </li>
        </ul>
        {/*Beginning of the mobile menu*/}
        <div onClick={handleClick} className="md:hidden z-10">
          {!nav ? <FaBars /> : <FaTimes />}
        </div>
        {/* Mobile Menu Time */}
        <ul
          className={
            !nav
              ? "hidden"
              : "fixed top-0 left-0 z-100 w-full h-screen bg-[#E0DDCF] flex flex-col justify-center items-center"
          }
        >
          <div>
            <img
              src={logo}
              alt="logo"
              style={{ width: "120px" }}
              className="top-7 left-5 fixed"
            />
            <p className="flex text-xl font-medium">MENU</p>

            <li className="py-6 text-xl flex">
              <img src={books} alt="book logo" className="h-[25px] px-3" />
              <Link to="/books" className="font-bold">
                Books
              </Link>
            </li>
            <li className="py-6 text-xl flex">
              <img src={calendar} alt="book logo" className="h-[25px] px-2" />
              <Link to="/calendar" className="font-bold">
                Calendar
              </Link>
            </li>
            <li className="py-6 text-xl flex">
              <img src={contact} alt="book logo" className="h-[30px] px-2" />
              <Link to="/Contact" className="font-bold">
                Contact
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
