 "use client";
import { useState } from "react";
import { ChevronRight } from 'lucide-react';
import React from 'react';
import Link from "next/link";

const page = () => {
    const [shipping, setShipping] = useState("express");

    const getShippingCost = () => {
      switch (shipping) {
        case "express":
          return 50;
        case "standard":
          return 30;
        case "free":
          return 0;
        default:
          return 0;
      }
    };
  
    const subtotal = 520;
    const total = subtotal + getShippingCost();
   
  return (
    
    <div>
           <div className="w-full h-[200px] bg-gray-100 py-6 flex justify-center">
             <div className="flex items-center space-x-3 text-sm md:text-base">
               <span className="text-gray-800 hover:text-blue-600 font-semibold text-2xl transition duration-200 cursor-pointer">Shopping Cart</span>
               <ChevronRight className="w-4 h-4 text-gray-500" />
              <Link href="/checkout" className="text-gray-800 font-semibold text-2xl hover:text-blue-600 transition duration-200 cursor-pointer">Checkout</Link>
        <ChevronRight className="w-4 h-4 text-gray-500" />
        <span className="text-gray-600 font-semibold text-2xl">Order Complete</span>
      </div>
    </div>

    {/* Information */}

    <div className="w-full px-4 md:px-10 py-10 bg-white ">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Cart Items */}
        <div className="col-span-2 border-gray-100 rounded-md shadow-sm overflow-hidden h-fit">
          <div className="grid grid-cols-12 bg-gray-100 font-bold text-gray-700 p-4 text-sm">
            <div className="col-span-6">Product</div>
            <div className="col-span-2 text-center">Price</div>
            <div className="col-span-2 text-center">Quantity</div>
            <div className="col-span-2 text-center">Subtotal</div>
          </div>

          {/* Item 1 */}
          <div className="grid grid-cols-12 items-center border-b border-gray-200  p-4">
            <div className="col-span-6 flex items-center gap-3">
              <button className="text-gray-400 hover:text-red-500">🗑️</button>
              <img src="/lsd-bottle.png" alt="product" className="w-12 h-12" />
              <span>LSD Liquid - 25* 200 ug</span>
            </div>
            <div className="col-span-2 text-center text-blue-600 font-semibold">$220.00</div>
            <div className="col-span-2 flex justify-center items-center gap-2">
              <button className="w-7 h-7 border-gray-100 rounded-full flex items-center justify-center">-</button>
              <input type="text" value="1" className="w-10 text-center border-gray-100 rounded-md" readOnly />
              <button className="w-7 h-7 border-gray-100 rounded-full flex items-center justify-center">+</button>
            </div>
            <div className="col-span-2 text-center text-blue-600 font-semibold">$220.00</div>
          </div>

          {/* Item 2 */}
          <div className="grid grid-cols-12 items-center border-b border-gray-200  p-4">
            <div className="col-span-6 flex items-center gap-3">
              <button className="text-gray-400 hover:text-red-500">🗑️</button>
              <img src="/tranq-bottle.jpg" alt="product" className="w-12 h-12" />
              <span>Xylazine (Tranq) - 50 ML</span>
            </div>
            <div className="col-span-2 text-center text-blue-600 font-semibold">$300.00</div>
            <div className="col-span-2 flex justify-center items-center gap-2">
              <button className="w-7 h-7 border-gray-100 rounded-full flex items-center justify-center">-</button>
              <input type="text" value="1" className="w-10 text-center border rounded-md" readOnly />
              <button className="w-7 h-7 border rounded-full flex items-center justify-center">+</button>
            </div>
            <div className="col-span-2 text-center text-blue-600 font-semibold">$300.00</div>
          </div>

          {/* Coupon Section */}
          <div className="flex justify-between items-center p-4">
            <input
              type="text"
              placeholder="Coupon code"
              className="border p-2 rounded-md w-1/2"
            />
            <button className="bg-blue-600 text-white font-bold px-6 py-2 rounded-md">
              APPLY COUPON
            </button>
            <button className="bg-blue-300 text-white font-bold px-6 py-2 rounded-md">
              UPDATE CART
            </button>
          </div>
        </div>

        {/* Right: Cart Totals */}
        <div className="border-gray-100 rounded-md shadow-sm p-6 w-full bg-white">
      <h3 className="text-xl font-bold text-gray-800 mb-6">CART TOTALS</h3>

      <div className="flex justify-between items-center mb-4">
        <span className="font-semibold">Subtotal</span>
        <span className="text-blue-600 font-bold">${subtotal.toFixed(2)}</span>
      </div>

      <hr className="my-4" />

      <div className="mb-4  flex justify-between ">
        <span className="font-semibold block mb-2">Shipping</span>

        {/* Shipping Options */}
        <div className="space-y-2 text-sm text-gray-700">
          <label className="flex items-start gap-2">
            <input
              type="radio"
              name="shipping"
              value="express"
              checked={shipping === "express"}
              onChange={(e) => setShipping(e.target.value)}
              className="mt-1 accent-blue-500"
            />
            <div>
              <span className="font-semibold">EXPRESS SHIPMENT:</span>
              <div className="text-blue-600 font-bold">$50.00</div>
            </div>
          </label>

          <label className="flex items-start gap-2">
            <input
              type="radio"
              name="shipping"
              value="standard"
              checked={shipping === "standard"}
              onChange={(e) => setShipping(e.target.value)}
              className="mt-1 accent-blue-500"
            />
            <div>
              <span className="font-semibold">STANDARD SHIPMENT:</span>
              <div className="text-blue-600 font-bold">$30.00</div>
            </div>
          </label>

          <label className="flex items-start gap-2">
            <input
              type="radio"
              name="shipping"
              value="free"
              checked={shipping === "free"}
              onChange={(e) => setShipping(e.target.value)}
              className="mt-1 accent-blue-500"
            />
            <div className="font-semibold">Free shipping</div>
          </label>

          <p className="mt-1 text-sm">Shipping to <strong>CA.</strong></p>
          <button className="text-sm text-gray-700 underline mt-1">Change address</button>
        </div>
      </div>

      <hr className="my-4" />

      <div className="flex justify-between items-center mb-6 text-lg font-bold">
        <span>Total</span>
        <span className="text-blue-600">${total.toFixed(2)}</span>
      </div>

      <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-md">
        PROCEED TO CHECKOUT
      </button>
    </div>
      </div>
    </div>

    </div>
  );
}

export default page;
