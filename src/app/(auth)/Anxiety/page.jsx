'use client';
import React from 'react';
import { products } from './cart';
import { CiGrid41, CiBoxList } from "react-icons/ci";
import { FaCodeCompare, FaRegHeart } from "react-icons/fa6";
import { FaArrowDownWideShort } from "react-icons/fa6";

import { useState } from "react";

export default function Page() {
  const [showSelect, setShowSelect] = useState(false);
  return (
    <div>
      {/* Head section */}
      {/* LARGE SCREENS */}
      <div className='mt-4 hidden md:flex justify-between items-center px-4 sm:px-8 border-b border-gray-200 pb-6'>
        <div className="text-sm sm:text-base">showing all 4 results</div>
        <div className='flex flex-wrap items-center gap-4'>
          <div><CiGrid41 size={25} color='blue' /></div>
          <div><CiBoxList size={25} color='blue' /></div>
          <div className='flex items-center whitespace-nowrap'>
            <div className="mr-1 text-sm">Show :</div>
            <select className='border border-gray-300 p-1 text-gray-600 text-sm sm:text-base rounded'>
              <option>6</option>
              <option>9</option>
              <option>12</option>
              <option>24</option>
              <option>32</option>
            </select>
          </div>
          <div className='whitespace-nowrap'>
            <select className='border border-gray-300 text-gray-600 p-1 text-sm sm:text-base rounded'>
              <option>Default sorting</option>
              <option>Sort by popularity</option>
              <option>Sort by average rating</option>
              <option>Sort by latest</option>
              <option>Sort by price: low to high</option>
              <option>Sort by price: high to low</option>
            </select>
          </div>
        </div>
      </div>

      {/* SMALL SCREENS */}
      <div className='mt-4 md:hidden px-4'>
        {!showSelect ? (
          <div
            className='flex justify-end cursor-pointer'
            onClick={() => setShowSelect(true)}
            aria-label="Show sorting options"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if(e.key === 'Enter') setShowSelect(true)}}
          >
            <FaArrowDownWideShort size={30} color='blue' />
          </div>
        ) : (
          <div className='mt-2'>
            <select
              className='border border-gray-300 text-gray-600 p-2 w-full rounded text-sm'
              onBlur={() => setShowSelect(false)}  // hide select after choosing / blur
            >
              <option>Default sorting</option>
              <option>Sort by popularity</option>
              <option>Sort by average rating</option>
              <option>Sort by latest</option>
              <option>Sort by price: low to high</option>
              <option>Sort by price: high to low</option>
            </select>
          </div>
        )}
      </div>

      {/* Products Grid */}
      <div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 px-4 sm:px-8 py-6">
          {products.slice(0, 4).map(product => (
            <div key={product.id} className="group flex flex-col mt-2 pt-3 hover:shadow-xl p-4 rounded-md shadow-sm bg-white">
              <div className="relative">
                <img
                  src={product.image1}
                  alt="image here"
                  className="w-full h-auto object-cover rounded"
                  loading="lazy"
                />
                <div className="absolute top-3 right-5 cursor-pointer" aria-label="Add to favorites">
                  <FaRegHeart size={20} />
                </div>
                <div className="group relative">
                  <div className="flex p-2 px-5 absolute bottom-4 left-10 bg-blue-600 justify-between text-center gap-3 items-center
                    opacity-0 group-hover:opacity-100 transition duration-300 rounded text-xs sm:text-sm cursor-pointer select-none">
                    <div><FaCodeCompare color="white" size={16} /></div>
                    <div className="text-white">ADD TO CART</div>
                    <div>{/* quick view icon here if needed */}</div>
                  </div>
                </div>
              </div>
              <div><h1 className="text-[14px] text-gray-500 truncate">{product.category}</h1></div>
              <div><h1 className="text-[14px] text-gray-700 hover:text-blue-700 cursor-pointer truncate">{product.name}</h1></div>
              <div><h1 className="text-[16px] font-semibold">${product.price.toFixed(2)}</h1></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
