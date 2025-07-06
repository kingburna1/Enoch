'use client';
import { CiGrid41 } from "react-icons/ci";
import { CiBoxList } from "react-icons/ci";
import { FaCodeCompare } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { products } from '../Anxiety/cart';
import React from 'react';

export default function BuyLsdPage() {
  return (
    <>
    
    <div className="max-w-3xl text-[14px]  p-6 text-gray-900">
      <h1 className="text-xl font-bold mb-4">
        Buy LSD Blotter Papers for Sale in Colorado – Discreet Online Purchase
      </h1>
      <p className="mb-4">
        Looking to buy LSD blotter papers online? We provide premium-quality LSD blotter papers and tabs,
        discreetly shipped to your doorstep in Denver, Colorado, and beyond. Lysergic Acid Diethylamide (LSD),
        also known as “acid,” is a powerful hallucinogen widely available in various forms, including blotter paper,
        gel tabs, and liquid. Whether you’re searching for LSD tabs, gel tabs, or liquid LSD, our store ensures secure,
        fast, and reliable delivery.
      </p>

      <h2 className="text-md font-semibold mt-8 mb-3.5">Why Choose Us for LSD Blotter Papers?</h2>
      <p className="mb-4">
        We specialize in providing top-tier LSD blotters and gel tabs for sale online. With guaranteed quality and
        discreet packaging, we ship to numerous locations, including Colorado, Australia, the UK, Canada, and across
        Europe. Our inventory includes:
      </p>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li className='block'>LSD Blotters for sale in Colorado, Denver, and Adelaide</li>
        <li className='block'>LSD Gel Tabs available for online purchase in Michigan, Perth, and Melbourne</li>
        <li className='block'>A variety of LSD products shipped to Germany, Sweden, Romania, and more</li>
      </ul>

      <h2 className="text-md font-semibold mt-8 mb-3.5">How to Use and Store LSD Blotter Papers</h2>
      <p className="mb-4">
        Using LSD responsibly is crucial. Start with a low dose, especially if you’re new to psychedelics.
        Common forms of LSD include small squares of absorbent paper or gel tabs. When storing LSD,
        follow these tips to preserve potency:
      </p>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li className='block'>Wrap blotters or gel tabs in non-porous material, like tinfoil.</li>
        <li className='block'>Place the tinfoil in a sealed plastic bag to prevent moisture.</li>
        <li className='block'>Store the package in a cool, dark place, such as a refrigerator.</li>
        <li className='block'>Allow the container to reach room temperature before opening to avoid condensation.</li>
      </ul>

      <h2 className="text-md font-semibold mt-8 mb-3.5">Effects and Risks of LSD Use</h2>
      <p className="mb-4">
        LSD induces intense visual and mental experiences. However, misuse or high doses can lead to adverse effects, such as:
      </p>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li className='block'>Increased body temperature and heart rate</li>
        <li className='block'>Sleeplessness, dry mouth, and sweating</li>
        <li className='block'>Potential long-term effects like depression or psychosis</li>
      </ul>
      <p className="mb-4">
        For safe and enjoyable use, always purchase high-quality products from reputable sources like ours.
      </p>

      <h2 className="text-md font-semibold mt-8 mb-3.5">Where to Buy LSD Online</h2>
      <p className="mb-4">
        Our online store offers an extensive range of LSD products, including:
      </p>
      <ul className="list-disc list-inside mb-4 space-y-1">
        <li className='block'>LSD Blotter Papers for sale in the USA, Canada, Australia, and Europe</li>
        <li className='block'>LSD Gel Tabs in diverse flavors and formats</li>
        <li className='block'>LSD Sheets shipped to cities worldwide, including Melbourne, Montreal, and Dublin</li>
      </ul>
      <p className="mb-4">
        When you order from us, you benefit from discreet shipping, competitive prices, and guaranteed customer satisfaction.
      </p>

      <h2 className="text-md font-semibold mt-8 mb-3.5">Bulk Orders and Wholesale Discounts</h2>
      <p className="mb-4">
        Looking for LSD blotter papers in bulk? We offer wholesale deals and free shipping for large orders.
        Whether you’re in the USA, Australia, or Europe, our secure platform ensures your order arrives safely and confidentially.
      </p>

      <h2 className="text-md font-semibold mt-8 mb-3.5">Order LSD Blotter Papers Online Today</h2>
      <p className="mb-4">
        Explore our premium selection of LSD blotter papers, gel tabs, and liquid LSD. With global shipping
        to locations such as the UK, Germany, and Australia, we make it easy to access high-quality LSD products
        anywhere in the world.
      </p>
      <p className="mb-4">
        Order now and enjoy a transformative experience with the convenience of discreet delivery to your doorstep.
      </p>
    </div>



 <div>
      {/* head section here */}
          <div className=' mt-4'>
                <div className='flex justify-between items-center px-8 border-b-1 border-gray-200 pb-6'>
                    <div>showing all 4 results</div>
                    <div className='flex items-center gap-4'>
                      <div><CiGrid41 size={25} color='blue'/></div>
                      <div><CiBoxList size={25} color='blue' /></div>
                      <div className='flex items-center'>
                        <div>Show :</div>
                        <div>
                          <select className='border-1 border-gray-300 p-1 text-gray-600 text-[16px]'>
                            
                            <option>6</option>
                             <option>9</option>
                              <option>12</option>
                               <option>24</option>
                                <option>32</option>
                          </select>
                        </div>
                      </div>

                      <div>
                          <div>
                          <select className='border-1 border-gray-300 text-gray-600 p-1 text-[16px]'>
                            
                            <option>Default sorting</option>
                             <option>Sort by popularity</option>
                              <option>Sort by average rating</option>
                               <option>Sort by latest</option>
                                <option>Sort by price: low to high </option>
                                 <option>Sort by price: high to low </option>
                          </select>
                        </div>
                      </div>


                    </div>
                </div>
          </div>

      {/* head section end */}
        <div>
              <div className='grid grid-cols-3 gap-3 px-4 '>
                  {products.slice(21,28).map(product => (

                      <div key={product.id} className='group flex flex-col mt-2 pt-3 hover:shadow-xl p-4'>

                        <div className='relative'><img src={product.image1} alt="image here" />
                        <div className='absolute top-3 right-5'><FaRegHeart size={20} /></div>
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
                        <div><h1 className='text-[14px] font-semibold'>{product.priceRange}</h1></div>

                      </div>

                  )

                  )}
              </div>
        </div>
    </div>

    </>
  );
}
