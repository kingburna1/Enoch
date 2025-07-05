import React from 'react';
import Link from 'next/link';

const page = () => {
  return (
    <div>
          <div className="bg-gray-100 py-16 flex flex-col items-center text-center">
              <h1 className="text-5xl font-bold text-gray-800">Testimonials  </h1>
              <div className="mt-4 text-gray-600 space-x-1">
                <Link href="/" className="hover:text-blue-500">Home</Link>
                <span>/</span>
                <Link href="/shopp" className="hover:text-blue-500">Testimonials </Link>
               
                {/* <span className="text-gray-800">MUSHROOM CHOCOLATE BARS  </span> */}
              </div>
            </div>
      
    </div>
  );
}

export default page;
