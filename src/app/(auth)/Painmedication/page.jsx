'use client';

import { useState } from "react";
import React from 'react';
import { CiGrid41 } from "react-icons/ci";
import { CiBoxList } from "react-icons/ci";
import { FaCodeCompare } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { products } from '../Anxiety/cart';
import { FaArrowDownWideShort } from "react-icons/fa6";

export default function page() {
    const [showSelect, setShowSelect] = useState(false);
  
    return (
      <div>
          {/* cart section here  */}
          <div>
              {/* LARGE SCREENS */}
              <div className='mt-4 hidden md:block'>
                  <div className='flex justify-between items-center px-8 border-b border-gray-200 pb-6'>
                      <div>showing all 4 results</div>
                      <div className='flex items-center gap-4'>
                          <div><CiGrid41 size={25} color='blue' /></div>
                          <div><CiBoxList size={25} color='blue' /></div>
                          <div className='flex items-center'>
                              <div>Show :</div>
                              <div>
                                  <select className='border border-gray-300 p-1 text-gray-600 text-[16px]'>
                                      <option>6</option>
                                      <option>9</option>
                                      <option>12</option>
                                      <option>24</option>
                                      <option>32</option>
                                  </select>
                              </div>
                          </div>
                          <div>
                              <select className='border border-gray-300 text-gray-600 p-1 text-[16px]'>
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
              </div>

              {/* SMALL SCREENS */}
              <div className='mt-4 md:hidden px-4'>
                  {!showSelect ? (
                      <div
                          className='flex justify-end'
                          onClick={() => setShowSelect(true)}
                      >
                          <FaArrowDownWideShort size={30} color='blue' />
                      </div>
                  ) : (
                      <div className='mt-2'>
                          <select
                              className='border border-gray-300 text-gray-600 p-2 w-full rounded'
                              onBlur={() => setShowSelect(false)}  // hide select on blur
                              onChange={() => setShowSelect(false)} // hide select on selection
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

              {/* product grid */}
              <div>
                  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 px-4'>
                      {products.slice(43,47).map(product => (
                          <div key={product.id} className='group flex flex-col mt-2 pt-3 hover:shadow-xl p-4'>
                              <div className='relative'>
                                  <img
                                    src={product.image1}
                                    alt={product.title || "product image"}
                                    className="max-w-full h-auto"
                                  />
                                  <div className='absolute top-5 right-5'>
                                    <FaRegHeart size={20} />
                                  </div>
                                  <div className='group relative'>
                                      <div className='flex p-2 px-5 absolute bottom-4 left-10 bg-blue-600 justify-between text-center gap-3 items-center
                                      opacity-0 group-hover:opacity-100 transition duration-300'>
                                          <div><FaCodeCompare color='white' size={16} /></div>
                                          <div className='text-white text-[14px]'>ADD TO CART</div>
                                          <div>{/* quick view icon placeholder */}</div>
                                      </div>
                                  </div>
                              </div>
                              <div><h1 className='text-[14px] text-gray-500'>{product.category}</h1></div>
                              <div><h1 className='text-[14px] text-gray-700 hover:text-blue-700'>{product.title}</h1></div>
                              <div><h1 className='text-[16px] font-semibold'>{product.priceRange}</h1></div>
                          </div>
                      ))}
                  </div>
              </div>
          </div>
      </div>
    )
}
