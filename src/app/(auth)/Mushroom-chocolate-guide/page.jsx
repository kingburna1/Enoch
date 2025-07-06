'use client';

import React, { useState } from 'react';

import { products } from '../Anxiety/cart';
import { CiGrid41 } from "react-icons/ci";
import { CiBoxList } from "react-icons/ci";
import { FaCodeCompare } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { FaArrowDownWideShort } from "react-icons/fa6";

export default function MushroomChocolatePage() {
   const [showSelect, setShowSelect] = useState(false);
  return (
    <>
    <div className="max-w-4xl text-[14px]  p-6 text-gray-900">
      <h1 className="text-xl font-bold mb-3">
        Buy Mushroom Chocolate Bars Online at Psychedelic Awareness Shop
      </h1>
      <p className="mb-3">
        In today’s fast-paced world, people are constantly seeking ways to unwind and explore their consciousness.
        Psychedelics have gained popularity for their potential to provide unique and transformative experiences.
        One such product that has garnered attention is mushroom chocolate bars. These delectable treats offer a
        convenient and delicious way to consume psychedelic mushrooms.
      </p>

      <h2 className="text-md font-semibold mt-8 mb-3">Understanding Mushroom Chocolate Bars</h2>

      <h3 className="text-md font-semibold mt-3 mb-1">What Are Mushroom Chocolate Bars?</h3>
      <p className="mb-3">
        Mushroom chocolate bars combine the psychoactive properties of mushrooms with the delightful taste of chocolate,
        making the experience more palatable. These bars are typically infused with dried and ground magic mushrooms,
        providing a convenient and measured dosage.
      </p>

      <h3 className="text-md font-semibold mt-3 mb-1">Benefits of Mushroom Chocolate Bars</h3>
      <ul className="list-disc list-inside mb-3 space-y-1">
        <li className='block'><strong>Precise Dosage:</strong> Each bar contains a specific amount of psychedelic mushrooms for a controlled experience.</li>
        <li className='block'><strong>Taste:</strong> Chocolate masks the earthy mushroom flavor and enhances taste.</li>
        <li className='block'><strong>Convenience:</strong> Easy to carry, discreet, and requires no preparation.</li>
        <li className='block'><strong>Longer Shelf Life:</strong> Chocolate helps preserve the potency of the mushrooms.</li>
      </ul>

      <h2 className="text-md font-semibold mt-8 mb-3">Buying Mushroom Chocolate Bars Online</h2>

      <h3 className="text-md font-semibold mt-3 mb-1">Why Choose Online Purchases?</h3>
      <ul className="list-disc list-inside mb-3 space-y-1">
        <li className='block'><strong>Variety:</strong> Access to different brands, dosages, and flavors.</li>
        <li className='block'><strong>Convenience:</strong> Shop from home anytime.</li>
        <li className='block'><strong>Convenience:</strong> Shop from home anytime.</li>
        <li className='block'><strong>Reviews and Ratings:</strong> Make informed decisions based on customer feedback.</li>
      </ul>

      <h3 className="text-md font-semibold mt-3 mb-1">Tips for Buying Mushroom Chocolate Bars Online</h3>
      <ul className="list-disc list-inside mb-3 space-y-1">
        <li className='block'><strong>Research the Vendor:</strong> Check for reviews and transparency.</li>
        <li className='block'><strong>Check Legal Regulations:</strong> Understand the laws in your region.</li>
        <li className='block'><strong>Payment Security:</strong> Use secure payment methods only.</li>
        <li className='block'><strong>Shipping Policies:</strong> Review for discreet and safe delivery options.</li>
      </ul>

      <h2 className="text-md font-semibold mt-8 mb-3">Psychedelic Awareness Shop: Your Ultimate Destination</h2>

      <h3 className="text-md font-semibold mt-3 mb-1">High-Quality Products</h3>
      <p className="mb-3">
        They work with experienced cultivators and rigorously test each bar to ensure potency and safety.
      </p>

      <h3 className="text-md font-semibold mt-3 mb-1">Extensive Selection</h3>
      <p className="mb-3">
        A wide range of bars in various flavors, dosages, and brands to suit every preference.
      </p>

      <h3 className="text-md font-semibold mt-3 mb-1">Expert Guidance</h3>
      <p className="mb-3">
        Knowledgeable staff provide personalized recommendations for every experience level.
      </p>

      <h3 className="text-md font-semibold mt-3 mb-1">Discreet Packaging and Delivery</h3>
      <p className="mb-3">
        All orders are packaged privately with no external indicators of content.
      </p>

      <h3 className="text-md font-semibold mt-3 mb-1">Customer Satisfaction</h3>
      <p className="mb-3">
        With top-rated service and a loyal customer base, they prioritize your satisfaction at every step.
      </p>

      <h2 className="text-md font-semibold mt-8 mb-3">Conclusion</h2>
      <p className="mb-3">
        Mushroom chocolate bars offer a delicious, accurate, and discreet way to enjoy the benefits of
        psychedelic mushrooms. For a trusted, high-quality experience, Psychedelic Awareness Shop is the top destination.
        Their commitment to excellence, privacy, and education makes them the ideal choice for anyone exploring these products.
      </p>
    </div>


{/* cart section here */}



{/* cart section here  */}
        <div>
      {/* head section here */}
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


      {/* head section end */}
        <div>
              <div className='grid grid-cols-3 gap-3 px-4 '>
                  {products.slice(37,43).map(product => (

                      <div key={product.id} className='group flex flex-col mt-2 pt-3 hover:shadow-xl p-4'>

                        <div className='relative'><img src={product.image1} alt="image here" />
                        <div className='absolute top-5 right-5'><FaRegHeart size={20} /></div>
                        <div className='group relative'>

                        <div className='flex p-2 px-5 absolute bottom-4 left-10 bg-blue-600 justify-between text-center gap-3 items-center
                                        opacity-0 group-hover:opacity-100 transition duration-300'>
                          <div><FaCodeCompare color='white' size={16} /></div>
                          <div className='text-white text-[14px]'>ADD TO CART <span></span></div>
                         <div>  {/* quick view icon is supposed to be here   */} </div>
                        </div>
                      </div>

                        </div>
                        <div><h1 className='text-[14px] text-gray-500'> {product.category}</h1></div>
                        <div><h1 className='text-[14px] text-gray-700 hover:text-blue-700'> {product.title}</h1></div>
                        <div><h1 className='text-[16px] font-semibold'>$ {product.price}</h1></div>

                      </div>

                  )

                  )}
              </div>
        </div>
    </div>
    </>
  );
}
