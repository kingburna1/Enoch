import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <div>
         <div className="bg-gray-100 py-16 flex flex-col items-center text-center">
              <h1 className="text-5xl font-bold text-gray-800">Magic Mushrooms  </h1>
              <div className="mt-4 text-gray-600 space-x-1">
                <Link href="/" className="hover:text-blue-500">Home</Link>
                <span>/</span>
                <Link href="/shopp" className="hover:text-blue-500">Shop</Link>
                <span>/</span>
                <span className="text-gray-800">Magic Mushrooms </span>
              </div>
            </div>
      
    </div>
  );
}

export default page;
