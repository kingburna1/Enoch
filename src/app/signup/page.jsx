'use client'; // Only if using App Router

import React, { useState } from 'react';
import Link from 'next/link';

const page = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email registered:', email);
    // Trigger password generation or API call here
  };

  return (
    <div>
          <div className="bg-gray-100 py-16 flex flex-col items-center text-center">
              <h1 className="text-5xl font-bold text-gray-800">My account  </h1>
              <div className="mt-4 text-gray-600 space-x-1">
                <Link href="/" className="hover:text-blue-500">Home</Link>
                <span>/</span>
                <Link href="/shopp" className="hover:text-blue-500">Shop</Link>
                <span>/</span>
                <Link href="/signup" className="text-gray-800">My account </Link>
              </div>
            </div>
      

   
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="md:flex-row flex w-full max-w-4xl shadow-lg rounded overflow-hidden bg-white flex-col">
        {/* Left Section */}
        <div className="w-full md:w-5/12 bg-blue-600 text-white p-8">
          <h2 className="text-2xl font-bold mb-4">Signup</h2>
          <p className="text-xs leading-relaxed">
            Your personal data will be used to support your experience throughout this website,
            to manage access to your account, and for other purposes described in our
            <span className="underline  ml-1 cursor-pointer text-black">privacy policy</span>.
          </p>
        </div>

        {/* Right Section */}
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-7/12 p-8 flex flex-col justify-center space-y-6"
        >
          {/* Email input */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Enter Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <p className="text-gray-700 text-sm">A password will be sent to your email address.</p>

          {/* Register button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded"
          >
            REGISTER
          </button>

          {/* Login link */}
          <div className="border p-4 text-center text-blue-600 font-semibold text-sm rounded hover:bg-blue-600 hover:text-white transition duration-300">
            EXISTING USER? <a href="/login" className="underline">LOG IN</a>
          </div>
        </form>
      </div>
    </div>
     </div>
  );
};

export default page;
