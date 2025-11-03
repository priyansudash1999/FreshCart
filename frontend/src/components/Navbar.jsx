import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";

const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState("home");
  const {getCartTotal, token, setToken} = useContext(StoreContext)
  const naviagate = useNavigate()
  const logout = () => {
    localStorage.removeItem('TOKEN')
    setToken("")
    naviagate("/")
  }

  return (
    <div className="flex justify-between items-center py-5 px-6 bg-white shadow-sm">
      {/* Logo */}
      <Link to="/"><img
        src={assets.logo}
        alt="logo"
        className="w-[150px] max-[1050px]:w-[130px] max-[900px]:w-[110px]"
      /></Link>

      {/* Menu Links */}
      <ul className="flex list-none gap-8 text-[#49557e] text-[18px] font-medium cursor-pointer 
                    max-[1050px]:gap-6 max-[1050px]:text-[16px] max-[750px]:hidden">
        {["home", "menu", "app", "contact"].map((item, ind) => (
          <li
            key={ind}
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
          <Link to="/cart"><img src={assets.basket_icon} alt="cart" className="h-[28px]" /></Link>
          <div className={getCartTotal() === 0 ? '' : 'absolute min-w-[10px] min-h-[10px] bg-orange-500 rounded-full -top-1 -right-1'} />
        </div>
        {!token ? <button onClick={() => setShowLogin(true)} className="bg-transparent text-[16px] text-[#49557e] border border-[#49557e] px-6 py-2 rounded-full hover:bg-[#49557e] hover:text-white transition duration-300 
                          max-[1050px]:px-4 max-[1050px]:py-[6px] max-[900px]:text-[14px] cursor-pointer">
          Sign In
        </button> : <div className="relative navbar-profile group">
                      <img src={assets.profile_icon} alt="" />

                      <ul className="
                        absolute hidden group-hover:flex 
                        flex-col gap-[10px]
                        right-0 z-50
                        bg-[#fff2ef] 
                        p-[12px_35px]
                        rounded-[4px] 
                        border border-orange-500 
                        outline-2 outline-white
                        list-none
                      ">
                        <li className="flex items-center justify-center gap-2 cursor-pointer hover:text-orange-500">
                          <img className="w-4" src={assets.bag_icon} alt="" />
                          <p className="">Orders</p>
                        </li>
                        <hr />
                        <li onClick={logout} className="flex items-center justify-center gap-2 cursor-pointer hover:text-orange-500">
                          <img className="w-4" src={assets.logout_icon} alt="" />
                          <p className="">Logout</p>
                        </li>
                      </ul>
                    </div>

        }
        
      </div>
      
    </div>
  );
};

export default Navbar;
