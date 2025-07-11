'use client';

import { CiGrid41 } from "react-icons/ci";
import { CiBoxList } from "react-icons/ci";
import { FaCodeCompare } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { products } from '../Anxiety/cart';
import React, { useState } from 'react';
import { FaArrowDownWideShort } from "react-icons/fa6";


export default function BuyShroomsPage() {
   const [showSelect, setShowSelect] = useState(false);
  return (
<>

    <div className="max-w-4xl text-[14px] p-2 text-gray-900">
      <h1 className="text-xl font-bold mb-4 mt-4">
        How to Purchase Shrooms Online Safely and Securely
      </h1>
      <p className="mb-3.5">
        Buying magic shrooms online can be a nerve-wracking experience. With so many vendors out there,
        how do you know which ones to trust? This guide is here to help you navigate the process, ensuring
        you can purchase high-quality shrooms safely and securely.
      </p>

      <h2 className="text-md font-semibold mt-4.5 mb-3.5">Understanding the Basics</h2>
      <p className="mb-3.5"><strong>What are magic shrooms?</strong> Magic shrooms, or psilocybin mushrooms, are fungi containing the psychoactive compound psilocybin. They are known for their mind-altering effects and have been used for centuries in various cultural and spiritual practices.</p>
      <p className="mb-3.5"><strong>Legal considerations:</strong> The legality of magic shrooms varies widely depending on where you live. It’s crucial to research and understand the laws in your area before making a purchase.</p>

      <h2 className="text-md font-semibold mt-4.5 mb-3.5">Check a Vendor’s Reputation</h2>
      <p className="mb-3.5">
        Researching customer reviews can give you a good idea of what to expect. Look for consistent positive feedback and be wary of any red flags, such as numerous complaints about product quality or delivery issues.
      </p>

      <h2 className="text-md font-semibold mt-4.5 mb-3.5">Ensure Secure Transactions</h2>
      <p className="mb-3.5">
        Ensure the website uses HTTPS for encrypted communication. Use trusted payment methods like credit cards or PayPal that offer buyer protection.
      </p>

      <h2 className="text-md font-semibold mt-4.5 mb-3.5">Use Discretion when Shopping Online</h2>
      <p className="mb-3.5">
        Make informed decisions by reading reviews and using secure payment methods to protect your identity and data.
      </p>

      <h2 className="text-md font-semibold mt-4.5 mb-3.5">Consider Delivery Options Carefully</h2>
      <p className="mb-3.5">
        Choose delivery options that include tracking and discreet packaging. Vendors may offer multiple shipping speeds—select what suits your needs best.
      </p>

      <h2 className="text-md font-semibold mt-4.5 mb-3.5">Pay With Cryptocurrency When Possible</h2>
      <p className="mb-3.5">
        Cryptocurrency like Bitcoin adds a layer of privacy, making transactions harder to trace. While not all vendors accept it, it's ideal for users prioritizing anonymity.
      </p>

      <h2 className="text-md font-semibold mt-4.5 mb-3.5">Look for Discreet Packaging</h2>
      <p className="mb-3.5">
        Discreet packaging helps maintain privacy and prevents theft during shipping. Make sure the vendor offers this by default.
      </p>

      <h2 className="text-md font-semibold mt-4.5 mb-3.5">Customer Support and Return Policies</h2>
      <p className="mb-3.5">
        A good vendor provides reliable customer support and a clear return/refund policy. These are signs of a trustworthy business.
      </p>

      <h2 className="text-md font-semibold mt-4.5 mb-3.5">Product Quality Assurance</h2>
      <p className="mb-3.5">
        Choose vendors that are transparent about sourcing and quality testing. Understanding different strains and their effects helps you select the right one.
      </p>

      <h2 className="text-md font-semibold mt-4.5 mb-3.5">Understand the Dosage</h2>
      <p className="mb-3.5">
        Always start with a low dose, especially if you're new. Dosage guidelines vary based on the strain and your experience.
      </p>

      <h2 className="text-md font-semibold mt-4.5 mb-3.5">Stay Informed About Legal Issues</h2>
      <p className="mb-3.5">
        Stay updated on legal changes in your region by following trusted sources. This will help you avoid legal trouble and make safe decisions.
      </p>

      <h2 className="text-md font-semibold mt-4.5 mb-3.5">Joining Online Communities</h2>
      <p className="mb-3.5">
        Join forums and groups that focus on magic shrooms. You’ll find support, vendor reviews, and safe usage tips from experienced users.
      </p>

      <h2 className="text-md font-semibold mt-4.5 mb-3.5">Educational Resources</h2>
      <p className="mb-3.5">
        Dive into books, podcasts, websites, and videos to learn more about magic shrooms and their effects, risks, and benefits.
      </p>

      <h2 className="text-md font-semibold mt-4.5 mb-3.5">Conclusion</h2>
      <p className="mb-3.5">
        Buying magic shrooms online doesn’t have to be risky. By following these steps, you can ensure your experience is safe, informed, and discreet.
      </p>

      <h2 className="text-md font-semibold mt-4.5 mb-3.5">FAQs</h2>
      <ul className="list-disc list-inside space-y-2">
        <li className='block'><strong>Is it legal to buy shrooms online?</strong> It depends on your location. Always check local laws before purchasing.</li>
        <li className='block'><strong>How can I tell if a vendor is reputable?</strong> Look for customer reviews, good website design, and secure payment options.</li>
        <li className='block'><strong>What payment methods are safest?</strong> Credit cards and PayPal are typically safest due to buyer protection features.</li>
        <li className='block'><strong>What should I do if my package doesn’t arrive?</strong> Contact the vendor’s support team. Reliable vendors will assist with missing shipments.</li>
        <li className='block'><strong>Can I return shrooms if they are not as described?</strong> That depends on the vendor’s return policy. Check this before you buy.</li>
      </ul>
    </div>

{/* cart section of the page is here */}



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
              <div className='grid grid-cols-2 lg:grid-cols-3 gap-3 px-5 '>
                  {products.slice(27,38).map(product => (

                      <div key={product.id} className='group flex flex-col mt-2 pt-3 hover:shadow-xl p-4'>

                        <div className='relative'><img src={product.image1} alt="image here" />
                        <div className='absolute top-5 right-5'><FaRegHeart size={20} /></div>
                        <div className='group relative'>

                                <div className='flex absolute bottom-4 left-4 sm:left-6 md:left-10
     bg-blue-600 items-center justify-between text-center gap-2 sm:gap-3
     p-2 sm:p-3 md:p-4 opacity-0 group-hover:opacity-100 transition duration-300'>

  <div><FaCodeCompare color='white' size={16} /></div>
  
  <div className='text-white text-[12px] sm:text-[13px] md:text-[14px]'>
    ADD TO CART <span></span>
  </div>
  
  <div>
    {/* quick view icon is supposed to be here */}
  </div>
</div>

                      </div>

                        </div>
                        <div><h1 className='text-[14px] text-gray-500'> {product.category}</h1></div>
                        <div><h1 className='text-[14px] text-gray-700 hover:text-blue-700'> {product.title}</h1></div>
                        <div><h1 className='text-[16px] font-semibold'>{product.priceRange}</h1></div>

                      </div>

                  )

                  )}
              </div>
        </div>
    </div>
  </>
  );
}
