import React, { useContext, useEffect,useState } from "react";
import { assets } from "../assets/assets";
import { IoPersonOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import { RiColorFilterAiLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { NavLink,Link, useLocation } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { MdOutlineCollections } from "react-icons/md";
import { TiContacts } from "react-icons/ti";
import { ShopContext } from "../Context/ShopContext";

export default function Navbar() {

  const {cartCount,search,setSearch,product,showSearch,setShowSearch} = useContext(ShopContext);
  const [visible, setVisible] = useState(false)


  const location = useLocation();

  useEffect(()=>{
    if (location.pathname.includes('/collection')) {
      setVisible(true)
    }else{
      setVisible(false)
    }
  },[location])
  return (
    <div className="w-full border border-gray-300">
      <div className="grid grid-cols-[5fr_0fr_0.5fr]  sm:grid-cols-[1fr_4fr_1fr]  mt-2 sm:mx-5">
        <div className="flex items-center justify-start">
          <img src={assets.logo} className="w-30" alt="" />
        </div>
        <div className="bg-[#fffff] sm:flex hidden  justify-center items-center">
          
          <div className="sm:flex justify-center mt-3 mb-2 hidden  py-3 px-3 text-black">
        {/* <div className='flex text-3xl justify-start items-center gap-4'>
            <p className='hover:scale-140 transition-all ease-in-out cursor-pointer'><RiColorFilterAiLine /></p>
        </div> */}
        <ul className="flex justify-between gap-10 ">
          <NavLink
            to={"/"}
            className="cursor-pointer font-medium flex flex-col items-center gap-1"
          >
            <p>Home</p>
            <hr className="w-full border-none h-[1.5px] bg-[#ffffff] hidden" />
          </NavLink>
          <NavLink
            to={"/collection"}
            className="cursor-pointer font-medium flex flex-col items-center gap-1"
          >
            <p>Collection</p>
            <hr className="w-full border-none h-[1.5px] bg-[#ffffff] hidden" />
          </NavLink>
          <NavLink
            to={"/summer"}
            className="cursor-pointer font-medium flex flex-col items-center gap-1"
          >
            <p>Summer Collection</p>
            <hr className="w-full border-none h-[1.5px] bg-[#ffffff] hidden" />
          </NavLink>
          <NavLink
            to={"/winter"}
            className="cursor-pointer font-medium flex flex-col items-center gap-1"
          >
            <p>Winter Collection</p>
            <hr className="w-full border-none h-[1.5px] bg-[#ffffff] hidden" />
          </NavLink>
          <NavLink
            to={"/new-arival"}
            className="cursor-pointer font-medium flex flex-col items-center gap-1"
          >
            <p>New Arivals</p>
            <hr className="w-full border-none h-[1.5px] bg-[#ffffff] hidden" />
          </NavLink>
          <NavLink
            to={"/contact"}
            className="cursor-pointer font-medium flex flex-col items-center gap-1"
          >
            <p>Contact Us</p>
            <hr className="w-full border-none h-[1.5px] bg-[#ffffff] hidden" />
          </NavLink>
        </ul>
        {/* <div className='flex text-3xl justify-start items-center gap-4'>
        <p className='hover:scale-140 transition-all ease-in-out cursor-pointer'><CiSearch /></p>
      </div> */}
      </div>
        </div>
        <ul className="flex text-3xl justify-end items-center gap-4">
          <li className="hover:scale-140 transition-all ease-in-out cursor-pointer">
            <IoPersonOutline />
          </li>
          <Link to={"/cart"} className="hover:scale-140 relative transition-all ease-in-out cursor-pointer">
            <CiShoppingCart />
            <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{cartCount()}</p>
          </Link>
          <li onClick={()=>setShowSearch(!showSearch)} className="hover:scale-140 transition-all ease-in-out cursor-pointer">
            <CiSearch />
          </li>
        </ul>
      </div>
      {
        showSearch && visible ? (
      <div className=" py-2 mx-10 sm:mx-0">
     <div className="border  sm:w-130 rounded-full flex justify-between mx-auto bg-white  border-gray-300 ">
            <input
              type="text"
              className="py-2 outline-none mx-5"
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
              placeholder="Search for product"
            />
            <button className="py2 bg-black hidden rounded-full px-8 font-medium text-[#ffffff]">
              SEARCH
            </button>
      </div>

      </div>

        ):null
      }
      <nav>
        <div className="w-full sm:hidden flex justify-center items-center relative ">
          <ul className="flex w-full px-10 py-4 justify-between items-center gap-10 fixed bottom-0 bg-[#a6489dc5] text-white  z-50">
            <NavLink
              to={"/"}
              className="flex flex-col-reverse justify-center items-center "
            >
              <p>HOME</p> <IoMdHome className="text-2xl" />
            </NavLink>
            <NavLink
              to={"/collection"}
              className="flex flex-col-reverse justify-center items-center "
            >
              <p>COLLECTIONS</p> <MdOutlineCollections className="text-2xl" />
            </NavLink>
            <NavLink
              to={"/contact"}
              className="flex flex-col-reverse justify-center items-center "
            >
              <p>CONTACT</p> <TiContacts className="text-2xl" />
            </NavLink>
          </ul>
        </div>
      </nav>
    </div>
  );
}