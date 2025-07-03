
  "use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Facebook, Heart, Link2Icon, Linkedin, Repeat, Twitter } from 'lucide-react';

const page = () => {
    const [selectedQuantity, setSelectedQuantity] = useState('');
    const quantities = [   "5 blotters", "10 blotters", "25 blotters", "50 blotters", "100 blotters"];

    
  const handleQuantityChange = (event) => {
    setSelectedQuantity(event.target.value);
  };

  const [activeTab, setActiveTab] = useState('description'); 

  const getTabClasses = (tabName) => {
    // Base classes for all tabs
    let classes = 'px-6 py-3 text-base font-semibold cursor-pointer whitespace-nowrap ';

    // Classes for the active tab
    if (activeTab === tabName) {
      classes += 'text-gray-800 border-b-2 border-blue-600'; 
    } else {
      // Classes for inactive tabs
      classes += 'text-gray-600 hover:text-gray-800 hover:border-b-2 hover:border-gray-300'; 
    }
    return classes;
  };
  return (
    <div className="mx-10">
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2 p-4 h-screen '>
            <div>
                <img src="https://psychedelicsawarenessshop.com/wp-content/uploads/2024/11/1p-lsd-blotter-for-sale.webp" alt="" />
            </div>
            <div>
            <div className="container  p-4 md:p-8 lg:p-12">
      {/* Breadcrumbs */}
    <div className='flex justify-between items-center'>
      <div className="text-gray-600 text-sm mb-4">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/shopp" className="hover:text-blue-600">Shop</Link>
        <span className="mx-2">/</span>
        <Link href="/lsd" className="hover:text-blue-600">LSD</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-800">1P-LSD Blotters 150mcg - Premium...</span>
      </div>

        <div className="flex justify-end items-center mb-4 text-gray-700">
           <div className='group relative overflow-visible'>
            <div>
            <button>
            <Link2Icon />
            </button>
            </div>
            {/* hidden div */}
              
            <div className="absolute top-full mt-0 left-0 bg-white shadow-md p-2 rounded 
                    opacity-0 pointer-events-none group-hover:opacity-100 
                    group-hover:pointer-events-auto transition-all duration-300 z-10 flex gap-2">
                          <Link href="/lsd" className="hover:text-blue-600"><Facebook /></Link>
                          <Link href="/lsd" className="hover:text-blue-600"><Twitter /></Link>
                          <Link href="/lsd" className="hover:text-blue-600 fill-black"><Linkedin /></Link>
                          <Link href="/lsd" className="hover:text-blue-600"><Facebook /></Link>
                          <Link href="/lsd" className="hover:text-blue-600"><Facebook /></Link>                  
                   </div>
            
            </div>
       
        <button className="flex items-center mx-1 p-2 rounded-full hover:bg-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </button>

        <button className="flex items-center mx-1 p-2 rounded-full hover:bg-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      </div>

      {/* Product Title */}
      <h1 className="text-l md:text-xl  text-gray-700 mb-2">
        1P-LSD Blotters 150mcg - Premium Psychedelic Experience
      </h1>

      {/* Price Range */}
      <div className="flex items-center mb-4">
        <span className="text-2xl md:text-2xl font-bold text-gray-800 mr-2">
          $50.00 - $450.00
        </span>
        {/* Info Icon - You'll need to add an SVG or use an icon library */}
        <span className="text-gray-500 cursor-pointer border rounded-full w-5 h-5 flex justify-center items-center" title="Price may vary based on selection">
          !
        </span>
      </div>

      {/* Stock Status */}
      <p className="text-green-600 font-medium mb-6">In Stock</p>

      {/* Quantity Selection */}
      <div className="flex items-center mb-6">
        <label htmlFor="blotters" className="text-gray-700 font-medium mr-4">Blotters</label>
        <div className="relative inline-block w-48">
          <select
            id="blotters"
            value={selectedQuantity}
            onChange={handleQuantityChange}
            className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded-md shadow-sm leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
          >
            <option value="">Choose an option</option>
            {quantities.map((qty) => (
              <option key={qty} value={qty}>
                {qty}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.096 6.924 4.682 8.338z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Add to Cart & Buy Now Buttons */}
      <div className="flex items-center mb-6">
        {/* Quantity Input (Matches screenshot but works with the select above) */}
        <div className="flex items-center border border-gray-300 rounded-md mr-4">
          <button className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-l-md text-xl" onClick={() => { /* Decrement logic */ }}>-</button>
          <input
            type="text"
            className="w-12 text-center border-l border-r border-gray-300 focus:outline-none text-gray-700"
            value="1" 
            readOnly
          />
          <button className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-r-md text-xl" onClick={() => { /* Increment logic */ }}>+</button>
        </div>

        <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold p-3   mr-4 text-xs md:text-l">
          ADD TO CART
        </button>
        <button className="bg-orange-400 hover:bg-orange-500 text-white font-bold p-3   text-xs md:text-l">
          BUY NOW
        </button>
      </div>

      {/* Wishlist and Compare */}
      <div className="flex items-center text-gray-600 text-md">
        <button className="flex gap-1 items-center mr-6">
          <Heart size={16} strokeWidth={0.75} />
          <Heart />
          <span className=" hover:text-blue-600">Add to wishlist</span>
          
        </button>
        <button className="flex gap-1 items-center hover:text-blue-600">
        
        <Repeat size={20} strokeWidth={1.75} />
          Compare
        </button>
      </div>

      {/* SKU and Category */}
      <div className="mt-6 text-gray-700 text-sm">
        <p className="mb-1"><span className="font-semibold">SKU:</span> N/A</p>
        <p><span className="font-semibold">Category:</span> <Link href="/lsd" className="hover:text-blue-600">LSD</Link></p>
      </div>    
    </div>
            </div>
        </div>

         {/* more information path */}

         
        <div className="mt-5">
        
        <div className="w-full border-b border-gray-200"> 
      <div className="flex space-x-8">
       
        <button
          className={getTabClasses('description')}
          onClick={() => setActiveTab('description')}
        >
          DESCRIPTION
        </button>

       
        <button
          className={getTabClasses('additional')}
          onClick={() => setActiveTab('additional')}
        >
          ADDITIONAL INFORMATION
        </button>

        <button
          className={getTabClasses('reviews')}
          onClick={() => setActiveTab('reviews')}
        >
          REVIEWS (0)
        </button>
      </div>
    </div>
        </div>

        {/* related products */}

        <div className="mt-5">
            <h3 className="text-xl font-bold text-gray-700">RELATED PRODUCT</h3>
            <div className="w-12 h-1 bg-blue-500"></div>
        </div>

        {/* recently viewed */}
        <div className="mt-5">
        <h3 className="text-xl font-bold text-gray-700">RECENTLY VIEWED</h3>
        <div className="w-12 h-1 bg-blue-500"></div>
        </div>
      
    </div>
  );
}

export default page;
