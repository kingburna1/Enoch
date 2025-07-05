'use client'; // If you're using app directory in Next.js 13+

import React, { useState } from 'react';
import Link from 'next/link';

const page = () => {
    const [form, setForm] = useState({
        email: '',
        password: '',
        remember: false,
      });
    
      const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm({
          ...form,
          [name]: type === 'checkbox' ? checked : value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', form);
        // Handle actual login logic here
      };
  return (
    <>
         <div className="bg-gray-100 py-16 flex flex-col items-center text-center">
              <h1 className="text-5xl font-bold text-gray-800">My account  </h1>
              <div className="mt-4 text-gray-600 space-x-1">
                <Link href="/" className="hover:text-blue-500 cursor-pointer">Home</Link>
                <span>/</span>
                <Link href="/shopp" className="hover:text-blue-500 cursor-pointer">Shop</Link>
                <span>/</span>
                <Link href="/signup" className="text-gray-800 cursor-pointer">My account </Link>
              </div>
            </div>

    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="flex  max-w-4xl shadow-lg gap-6 rounded overflow-hidden bg-white">
        {/* Left Section */}
        <div className="w-fit bg-blue-600 text-white p-8 hidden md:block">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <p className="text-md">Get access to your Orders,<br />Wishlist and Recommendations.</p>
        </div>

        {/* Right Section */}
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-fit px-4 py-10 space-y-3"
        >
          {/* Email */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Enter Username/Email address"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className='w-10 h-5 bg-blue-600 shadow-md'></div>

          {/* Remember + Forgot Password */}
          <div className="flex items-center justify-between text-sm text-blue-600">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="remember"
                checked={form.remember}
                onChange={handleChange}
                className="accent-blue-600"
              />
              <span>Remember me</span>
            </label>
            <a href="#" className="hover:underline">Lost your password?</a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded"
          >
            LOG IN
          </button>

          {/* Signup Link */}
          <div className="border p-3 text-center text-blue-600  text-xs rounded hover:bg-blue-600 hover:text-white">
            NEW TO PSYCHEDELICS AWARENESS SHOP | <br />
            MAGIC MUSHROOMS DELIVERY ONLINE? <br />
            <a href="/signup" className="underline">SIGN UP</a>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}

export default page;
