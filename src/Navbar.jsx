import React from "react";
import logo from "./assets/idéelogo-removebg-preview.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-[#374151] flex items-center justify-between p-[10px]">
      <a href="/">
        <img src={logo} alt="idéelogo" className="h-[100px] w-[100px]" />
      </a>

      <div className=" flex">
        <button className="font-bold text-lg text-gray-300 hover:bg-slate-600 h-[40px] w-[150px] rounded-lg ">
          <Link to="/">LIFESTYLE</Link>
        </button>
        <button className="font-bold text-lg text-gray-300 hover:bg-slate-600 h-[40px] w-[150px] rounded-lg ">
          <Link to="/beaute"> BEAUTE</Link>
        </button>
        <button className="font-bold text-lg text-gray-300 hover:bg-slate-600 h-[40px] w-[150px] rounded-lg  ">
          <Link to="/mode"> MODE</Link>
        </button>
        <button className="font-bold text-lg text-gray-300 hover:bg-slate-600 h-[40px] w-[150px] rounded-lg  ">
          <Link to="/sante"> SANTE</Link>
        </button>
        <button className="font-bold text-lg text-gray-300 hover:bg-slate-600 h-[40px] w-[150px] rounded-lg ">
          <Link to="/maison"> MAISON</Link>
        </button>
        <button className="font-bold text-lg text-gray-300 hover:bg-slate-600 h-[40px] w-[150px] rounded-lg ">
          <Link to="/cuisine"> CUISINE</Link>
        </button>
      </div>
      {/* <div className=" h-8 bg-slate-300">

      </div> */}
    </header>
  );
};

export default Navbar;
