'use client'

import Image from "next/image";
import { FaRegFolderOpen } from "react-icons/fa";
import { RiFileCopyLine } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosContact } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";
import { useState } from "react";

export default function NavbarComponent() {
      const [menuOpen, setMenuOpen] = useState(false);

  // Close on body click
  const handleCloseMenu = () => setMenuOpen(false);

  const stopPropagation = (e) => e.stopPropagation();
  return (
    <div>
        <div className="bg-[#2370F4] relative">

      {/* First section of the navbar - leave untouched for responsiveness */}
      <div className="flex justify-between border-1 border-blue-700">
        <div></div>
        <div className="text-[14px]">
          <nav className="flex items-center gap-1.5 border-r-1 border-blue-900 text-white">
            <div className="border-1 border-blue-600 py-2 px-8">
              <a href="#">Welcome to Our</a>
            </div>
            <div className="flex gap-1.5 items-center border-r-1 border-blue-600 px-1.5 py-2">
              <FaRegFolderOpen />
              <a href="#">BLOG</a>
            </div>
            <div className="flex gap-1.5 items-center pr-15 py-2 border-r-1 border-blue-700">
              <RiFileCopyLine />
              <a href="#">FREQUENTLY ASKED QUESTIONS</a>
            </div>
            <div className="flex gap-1.5 items-center pr-15 py-3.5 border-r-1 border-blue-900" />
          </nav>
        </div>
      </div>

      <div className="flex justify-center ml-32 gap-4 text-amber-50 text-[14px]">
        <div className="border-r-1 border-blue-600 pr-4">STORE!</div>
        <div className="border-r-1 border-blue-600 pr-4">Contact us ?</div>
      </div>

      {/* BACKDROP OVERLAY */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 bg-opacity-30"
          onClick={handleCloseMenu}
        />
      )}

      {/* SIDEBAR CART */}
      <div
        className={`
          fixed top-0 right-0 z-50
          h-screen bg-amber-50
          transform ${menuOpen ? 'translate-x-0 ' : 'translate-x-full'}
          transition-transform duration-600
          w-full sm:w-[80%] md:w-[50%] lg:w-[25%]
        `}
        onClick={stopPropagation}
      >
        <div className="bg-[#2370F4] text-[#ffffff] font-bold text-[18px]">
          <h1 className="p-3 text-center">MY CART</h1>
        </div>
        <div className="flex flex-col mt-20 justify-center items-center">
          <MdOutlineShoppingBag size={75} color="gray" />
          <h1 className="mt-8 mb-8 text-[#555555] font-bold text-[18px]">
            SHOPPING CART IS EMPTY!
          </h1>
          <button className="cursor-pointer bg-blue-800 text-amber-50 text-[16px] w-[187px] h-[42px]">
            CONTINUE SHOPPING
          </button>
        </div>
      </div>

      {/* SECOND SECTION */}
      <nav className="flex flex-col md:flex-row justify-between items-center px-4 md:px-14 py-4 md:py-0">
        {/* Logo */}
        <div className="flex items-center mb-4 md:mb-0">
          <img
            className="w-[86px] h-[85px]"
            src="https://psychedelicsawarenessshop.com/wp-content/uploads/2023/03/logo-1024x1018-1.png"
            alt="LOGO"
          />
        </div>

        {/* Search */}
        <div className="flex w-full md:w-auto mb-4 md:mb-0">
          <input
            className="flex-grow md:w-[412px] h-[49px] border border-gray-300 rounded-l-3xl pl-4 bg-amber-50 focus:outline-none"
            type="text"
            placeholder="Search for products, categories, brands, sku..."
          />
          <select
            className="h-[49px] border border-l-0 border-gray-300 bg-amber-50 pl-2 text-gray-400 focus:outline-none"
          >
            <option>Apple</option>
            <option>Banana</option>
            <option>Cherry</option>
          </select>
          <div className="h-[49px] w-[49px] bg-amber-50 flex items-center justify-center border border-l-0 border-gray-300 rounded-r-3xl">
            <IoSearchOutline size={20} color="blue" />
          </div>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <IoIosContact size={30} color="white" />
            <div className="text-[10px] text-amber-50">
              <div>HELLO,</div>
              <div className="text-[12px] font-bold">SIGN IN</div>
            </div>
          </div>
          <div className="relative">
            <CiHeart size={35} color="white" />
            <span className="absolute top-0 right-0 w-[14px] h-[14px] rounded-full text-[10px] bg-blue-600 text-white flex items-center justify-center">0</span>
          </div>
          <div className="flex items-center gap-1 cursor-pointer duration-500" onClick={() => setMenuOpen(true)}>
            <div className="relative">
              <MdOutlineShoppingBag size={35} color="white" />
              <span className="absolute top-0 right-0 w-[14px] h-[14px] rounded-full text-[10px] text-white bg-blue-600 flex items-center justify-center">0</span>
            </div>
            <div className="text-[10px] text-amber-50">
              <div>Cart</div>
              <div className="font-bold text-[14px]">0.00$</div>
            </div>
          </div>
        </div>
      </nav>

      {/* THIRD SECTION */}
      <div className="bg-white border-b border-gray-400">
        <nav className="flex flex-wrap items-center gap-2 md:gap-5 text-[14px] p-2 md:p-0">
          <div className="border-r w-[40px] h-[40px] border-gray-400 p-2" />
          <div className="flex justify-between items-center gap-2 md:gap-8 border-r border-gray-400 p-2">
            <span>Shop By Department</span>
            <IoIosMenu size={30} color="black" />
          </div>
          <a className="text-black hover:text-blue-600 p-2">Home</a>
          <a className="text-black hover:text-blue-800 p-2">ABOUT US</a>
          <a className="text-black hover:text-blue-800 p-2">FREQUENTLY ASKED QUESTIONS</a>
          <a className="text-black hover:text-blue-800 p-2">SHOP</a>
          <a className="text-black hover:text-blue-800 p-2">BLOG</a>
          <a className="text-black hover:text-blue-800 p-2">CONTACT US</a>
          <a className="text-black hover:text-blue-800 p-2">TESTIMONIALS</a>
        </nav>
      </div>
    </div>
    </div>
  )
}
