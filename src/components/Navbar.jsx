import star from "../../images/star.png";
import menu from "../../images/menu.png";
import { useState } from "react";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [bgNav, setBgNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setBgNav(true);
    } else {
      setBgNav(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <div
      className={
        bgNav
          ? "fixed bg-[#1F1F39] items-center h-16 text-white duration-200 ease-in transition-all w-full z-10 desktop:p-8 p-2 px-4 flex justify-between"
          : "fixed transition-all items-center h-16 desktop:p-8 duration-300 w-full z-10 p-2 px-4 flex justify-between"
      }
    >
      <div className="flex items-center justify-center">
        <img
          src={star}
          className={
            bgNav
              ? "w-5 h-5 phone:w-7 phone:h-7 phone:mb-2 invert filter"
              : " phone:w-7 phone:h-7 w-5 h-5"
          }
          alt=""
        />
        <a href="#home">
          <p className="font-inter ml-1 font-semibold phone:text-xl">
            Creativo.
          </p>
        </a>
      </div>
      <div>
        <img
          onClick={handleNav}
          src={menu}
          alt=""
          className={
            bgNav
              ? "laptop:hidden w-5 h-5 phone:w-7 phone:h-7 cursor-pointer text-white invert filter"
              : "laptop:hidden w-5 h-5 phone:w-7 phone:h-7  cursor-pointer"
          }
        />
      </div>
      <ul className="laptop:flex hidden gap-5 font-inter font-semibold">
        <li>
          <a
            href="#home"
            className="hover:bg-[#1F1F39] duration-300 transition-all hover:text-white px-3 py-1 rounded-lg"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#services"
            className="hover:bg-[#1F1F39] duration-300 transition-all hover:text-white px-3 py-1 rounded-lg"
          >
            About Us
          </a>
        </li>
        <li>
          <a
            href="#portofolio"
            className="hover:bg-[#1F1F39] duration-300 transition-all hover:text-white px-3 py-1 rounded-lg"
          >
            Portofolio
          </a>
        </li>
      </ul>

      <div
        className={
          nav
            ? "absolute z-20 bg-rose-950/80 w-full h-[500px] top-0 left-0 flex flex-col items-center justify-center transition-all duration-300"
            : "absolute z-20 bg-rose-950/80 w-full h-[500px] -top-[2000%] transition-all duration-300 left-0 flex flex-col items-center justify-center"
        }
      >
        <ul className="font-inter flex flex-col gap-5 text-white text-2xl p-6">
          <li className="p-3 hover:border-b-[1px] cursor-pointer transition-all ease-in-out duration-200">
            <a href="#home" onClick={handleNav}>
              Home
            </a>
          </li>
          <li className="p-3 hover:border-b-[1px] cursor-pointer transition-all ease-in-out duration-200">
            <a href="#services" onClick={handleNav}>
              Services
            </a>
          </li>
          <li className="p-3 hover:border-b-[1px] cursor-pointer transition-all ease-in-out duration-200">
            <a href="#portofolio" onClick={handleNav}>
              Portofolio
            </a>
          </li>
          <li className="p-3 hover:border-b-[1px] cursor-pointer transition-all ease-in-out duration-200">
            <a href="#collaborate" onClick={handleNav}>
              Collaborate
            </a>
          </li>
          <li
            onClick={handleNav}
            className="p-3 hover:border-b-[1px] cursor-pointer transition-all ease-in-out duration-200"
          >
            close
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
