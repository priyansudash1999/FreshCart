import React, { useState } from "react";
import { assets } from "../assets/assets";

const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="flex justify-between items-center py-5 px-6 bg-white shadow-sm">
      {/* Logo */}
      <img
        src={assets.logo}
        alt="logo"
        className="w-[150px] max-[1050px]:w-[130px] max-[900px]:w-[110px]"
      />

      {/* Menu Links */}
      <ul className="flex list-none gap-8 text-[#49557e] text-[18px] font-medium cursor-pointer 
                    max-[1050px]:gap-6 max-[1050px]:text-[16px] max-[750px]:hidden">
        {["home", "menu", "app", "contact"].map((item) => (
          <li
            key={item}
            onClick={() => setMenu(item)}
            className={`capitalize hover:text-[#ff6600] transition-colors duration-300 ${
              menu === item
                ? "border-b-[2px] border-orange-500 pb-[2px]"
                : "pb-[2px]"
            }`}
          >
            {item === "app" ? "Mobile App" : item.charAt(0).toUpperCase() + item.slice(1)}
          </li>
        ))}
      </ul>

      {/* Right Icons + Button */}
      <div className="flex items-center gap-6">
        {/* Search Icon */}
        <img
          src={assets.search_icon}
          alt="search"
          className="h-[28px] w-[28px] cursor-pointer max-[900px]:w-[22px]"
        />

        {/* Basket Icon with Notification Dot */}
        <div className="relative cursor-pointer">
          <img src={assets.basket_icon} alt="cart" className="h-[28px]" />
          <div className="absolute min-w-[10px] min-h-[10px] bg-orange-500 rounded-full -top-1 -right-1" />
        </div>

        {/* Sign In Button */}
        <button onClick={() => setShowLogin(true)} className="bg-transparent text-[16px] text-[#49557e] border border-[#49557e] px-6 py-2 rounded-full hover:bg-[#49557e] hover:text-white transition duration-300 
                          max-[1050px]:px-4 max-[1050px]:py-[6px] max-[900px]:text-[14px] cursor-pointer">
          Sign In
        </button>
      </div>

      {/* Mobile Menu Button */}
      
    </div>
  );
};

export default Navbar;
