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
          ? "fixed bg-[#1F1F39] items-center h-16 text-white duration-200 ease-in transition-all w-full z-10 p-2 px-4 flex justify-between"
          : "fixed transition-all items-center h-16 duration-300 w-full z-10 p-2 px-4 flex justify-between"
      }
    >
      <div className="flex">
        <img
          src={star}
          className={bgNav ? "w-5 h-5 invert filter" : "w-5 h-5"}
          alt=""
        />
        <p className="font-inter ml-1 font-semibold">Creativo.</p>
      </div>
      <div>
        <img
          onClick={handleNav}
          src={menu}
          alt=""
          className={
            bgNav
              ? "w-5 h-5 cursor-pointer text-white invert filter"
              : "w-5 h-5 cursor-pointer"
          }
        />
      </div>

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
            Portofolio
          </li>
          <li className="p-3 hover:border-b-[1px] cursor-pointer transition-all ease-in-out duration-200">
            Collaborate
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
