"use client"
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import  { useState } from 'react';
import { useRef } from 'react';


const page = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    company: '',
    country: 'United States (US)',
    streetAddress: '',
    apartment: '',
    city: '',
    state: 'California',
    zip: '',
    phone: '',
    email: '',
    shipToDifferent: false,
    notes: '',
  });

  const countries = [
    "United States (US)",
    "Canada",
    "United Kingdom",
    "Germany",
    "Australia",
    "France",
    "Netherlands",
    "South Africa",
    "Cameroon",
    "Nigeria",
    "Ghana",
    "India",
    "Brazil",
    "Japan",
  ];
  return (
    <div>
              <div className="w-full h-[200px] bg-gray-100 py-6 flex justify-center">
                 <div className="flex items-center space-x-3 text-sm md:text-base">
                   <Link href="/shoppingcart" className="text-gray-800 hover:text-blue-600 font-semibold text-2xl transition duration-200 cursor-pointer">Shopping Cart</Link>
                     <ChevronRight className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-800 font-semibold text-2xl hover:text-blue-600 transition duration-200 cursor-pointer">Checkout</span>
                   <ChevronRight className="w-4 h-4 text-gray-500" />
              <span className="text-gray-600 font-semibold text-2xl">Order Complete</span>
           </div>
      </div>
 
 

        {/* Information */}

        <div className=" px-4 md:px-10 py-3 bg-white  mt-5  border-t border-gray-300  border-b mx-5">
          <div className="flex justify-center items-center gap-1">
            <span className='text-blue-500 font-bold text-xl'>i</span>
            <span className='text-sm'>	Have a coupon?</span>
            <span className='text-blue-500 text-sm'> Click here to enter your code</span>
          </div>

        </div>

        {/* the grids path */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-10 py-10">
           {/* the left grid */}
          <div>

          <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Billing details</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block font-semibold mb-1">First name <span className="text-red-500">*</span></label>
          <input className="w-full border border-gray-300 p-2 rounded" type="text" />
        </div>
        <div>
          <label className="block font-semibold mb-1">Last name <span className="text-red-500">*</span></label>
          <input className="w-full border border-gray-300 p-2 rounded" type="text" />
        </div>
      </div>

      <div className="mt-4">
        <label className="block font-semibold mb-1">Company name (optional)</label>
        <input className="w-full border border-gray-300 p-2 rounded" type="text" />
      </div>

      <div className="mt-4">
        <label className="block font-semibold mb-1">Country / Region <span className="text-red-500">*</span></label>
        <select className="w-full border border-gray-300 p-2 rounded">
          {countries.map((country, i) => (
            <option key={i}>{country}</option>
          ))}
        </select>
      </div>

      <div className="mt-4">
        <label className="block font-semibold mb-1">Street address <span className="text-red-500">*</span></label>
        <input className="w-full border border-gray-300 p-2 rounded mb-2" placeholder="House number and street name" />
        <input className="w-full border border-gray-300 p-2 rounded" placeholder="Apartment, suite, unit, etc. (optional)" />
      </div>

      <div className="mt-4">
        <label className="block font-semibold mb-1 text-red-600">Town / City *</label>
        <input className="w-full border border-red-500 p-2 rounded" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label className="block font-semibold mb-1">State <span className="text-red-500">*</span></label>
          <input className="w-full border border-gray-300 p-2 rounded" defaultValue="California" />
        </div>
        <div>
          <label className="block font-semibold mb-1">ZIP Code <span className="text-red-500">*</span></label>
          <input className="w-full border border-gray-300 p-2 rounded" />
        </div>
      </div>

      <div className="mt-4">
        <label className="block font-semibold mb-1">Phone <span className="text-red-500">*</span></label>
        <input className="w-full border border-gray-300 p-2 rounded" />
      </div>

      <div className="mt-4">
        <label className="block font-semibold mb-1">Email address <span className="text-red-500">*</span></label>
        <input className="w-full border border-gray-300 p-2 rounded" />
      </div>

        <div className="mt-4">
      <div className="mt-6 flex items-center">
      <input
          id="shipToDifferent"
          type="checkbox"
           className="mr-2"
          onChange={(e) => {
          const div = document.getElementById('shipToAddressSection');
          if (div) {
         div.classList.toggle('hidden', !e.target.checked);
        }
      }}
     />

        <label htmlFor="shipToDifferent" className="font-semibold">Ship to a different address?</label>
      </div>
          
          {/* the hidden form  */}
        <div id="shipToAddressSection" className='mt-8 hidden'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block font-semibold mb-1">First name <span className="text-red-500">*</span></label>
          <input className="w-full border border-gray-300 p-2 rounded" type="text" />
        </div>
        <div>
          <label className="block font-semibold mb-1">Last name <span className="text-red-500">*</span></label>
          <input className="w-full border border-gray-300 p-2 rounded" type="text" />
        </div>
      </div>

      <div className="mt-4">
        <label className="block font-semibold mb-1">Company name (optional)</label>
        <input className="w-full border border-gray-300 p-2 rounded" type="text" />
      </div>

      <div className="mt-4">
        <label className="block font-semibold mb-1">Country / Region <span className="text-red-500">*</span></label>
        <select className="w-full border border-gray-300 p-2 rounded">
          {countries.map((country, i) => (
            <option key={i}>{country}</option>
          ))}
        </select>
      </div>

      <div className="mt-4">
        <label className="block font-semibold mb-1">Street address <span className="text-red-500">*</span></label>
        <input className="w-full border border-gray-300 p-2 rounded mb-2" placeholder="House number and street name" />
        <input className="w-full border border-gray-300 p-2 rounded" placeholder="Apartment, suite, unit, etc. (optional)" />
      </div>

      <div className="mt-4">
        <label className="block font-semibold mb-1 text-red-600">Town / City *</label>
        <input className="w-full border border-red-500 p-2 rounded" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label className="block font-semibold mb-1">State <span className="text-red-500">*</span></label>
          <input className="w-full border border-gray-300 p-2 rounded" defaultValue="California" />
        </div>
        <div>
          <label className="block font-semibold mb-1">ZIP Code <span className="text-red-500">*</span></label>
          <input className="w-full border border-gray-300 p-2 rounded" />
        </div>
      </div>

      <div className="mt-4">
        <label className="block font-semibold mb-1">Phone <span className="text-red-500">*</span></label>
        <input className="w-full border border-gray-300 p-2 rounded" />
      </div>

      <div className="mt-4">
        <label className="block font-semibold mb-1">Email address <span className="text-red-500">*</span></label>
        <input className="w-full border border-gray-300 p-2 rounded" />
      </div>
          

        </div>

      </div>

      <div className="mt-4">
        <label className="block font-semibold mb-1">Order notes (optional)</label>
        <textarea
          className="w-full h-[200px] border border-gray-300 p-2 rounded"
          rows="4"
          placeholder="Notes about your order, e.g. special notes for delivery."
        ></textarea>
      </div>
    </div>
          </div>

          {/* the right div */}
          <div>
          <div className="bg-white p-6 rounded shadow-md max-w-xl w-full px-10">
  <h2 className="text-2xl font-semibold mb-6">Your order</h2>

  <div className="border-t border-b  border-gray-300 py-4">
    <div className="flex  items-center gap-50 font-semibold text-gray-600 text-md">
      <span className="">PRODUCT</span>
      <span>SUBTOTAL</span>
    </div>

    {/* Product List */}
    <div className="mt-4 space-y-4">
      {/* Product 1 */}
      <div className="flex  items-center gap-15">
        <div className="flex items-center  space-x-3">
          <img src="/img1.jpg" alt="LSD" className="w-12 h-12 object-cover" />
          <p className="text-sm  text-gray-600 font-bold">LSD Liquid - 25* 200 ug × 1</p>
        </div>
        <span className="text-blue-600 font-semibold">$220.00</span>
      </div>

      {/* Product 2 */}
      <div className="flex  items-center gap-15">
        <div className="flex items-center space-x-3">
          <img src="/img2.jpg" alt="Xylazine" className="w-12 h-12 object-cover" />
          <p className="text-sm  text-gray-600 font-bold">Xylazine (Tranq) - 50 ML × 1</p>
        </div>
        <span className="text-blue-600 font-semibold">$300.00</span>
      </div>

      {/* Product 3 */}
      <div className="flex  items-center gap-10">
        <div className="flex items-center space-x-3">
          <img src="/img3.jpg" alt="Xanax" className="w-12 h-12 object-cover" />
          <p className="text-sm  text-gray-600 font-bold">Overnight xanax alprazolam × 1</p>
        </div>
        <span className="text-blue-600 font-semibold">$2.00</span>
      </div>

      {/* Subtotal */}
      <div className="flex  items-center gap-58 border-t pt-2 font-semibold ">
        <span>Subtotal</span>
        <span className="text-blue-600">$522.00</span>
      </div>
    </div>
  </div>

  {/* Shipping */}
  <div className="py-4 border-b border-gray-200 flex justify-between items-center ">
    <p className="text-sm  text-gray-600 font-bold mb-2">Shipping</p>
    <div className="space-y-2">
      <label className="flex items-center">
        <input type="radio" name="shipping" className="mr-2 " />
        <span className=" text-sm  text-gray-600 font-bold"> EXPRESS SHIPMENT: </span><span className="text-blue-600 ml-1">$50.00</span>
      </label>
      <label className="flex items-center">
        <input type="radio" name="shipping" className="mr-2" defaultChecked />
        <span className=" text-sm  text-gray-600 font-bold"> STANDARD SHIPMENT: </span> <span className="text-blue-600 ml-1">$30.00</span>
      </label>
      <label className="flex items-center">
        <input type="radio" name="shipping" className="mr-2" />
        <span className=" text-sm  text-gray-600 font-bold"> Free shippin: </span>
      </label>
    </div>
  </div>

  {/* Total */}
  <div className="py-4 border-b flex justify-between font-semibold">
    <span className="text-gray-600">Total</span>
    <span className="text-blue-600">$552.00</span>
  </div>

  {/* Payment Methods */}
  <div className="py-4 space-y-4">
    {/* Zelle */}
    <div>
      <label className="flex items-center font-semibold">
        <input type="radio" name="payment" className="mr-2" defaultChecked />
        ZELLE PAY
      </label>
      <div className="bg-gray-100 text-sm p-4 rounded mt-2">
        EMAIL US FOR YOUR ZELLE PAY INFO AT : <br />
        <span className="text-gray-700">frankmagicmushroomshop@gmail.com</span>
      </div>
    </div>

    {/* Bitcoin */}
    <label className="flex items-center font-semibold">
      <input type="radio" name="payment" className="mr-2" />
      BITCOIN PAYMENT
    </label>

    {/* Western Union */}
    <label className="flex items-center font-semibold">
      <input type="radio" name="payment" className="mr-2" />
      Western Union OR Ria Money Transfer
    </label>

    {/* Apple Pay */}
    <label className="flex items-center font-semibold">
      <input type="radio" name="payment" className="mr-2" />
      APPLE PAY OR VENMO
    </label>
  </div>

  {/* Privacy Note */}
  <div className="mt-6 text-sm text-gray-700">
    Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our{' '}
    <span className="text-black font-semibold underline">privacy policy</span>.
  </div>

  {/* Place Order Button */}
  <button className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded">
    PLACE ORDER
  </button>
</div>

          </div>

        </div>
         
    </div>
  );
}

export default page;
