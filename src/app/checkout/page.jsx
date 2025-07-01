import { ChevronRight } from 'lucide-react';
import React from 'react';

const page = () => {
  return (
    <div>
              <div className="w-full h-[200px] bg-gray-100 py-6 flex justify-center">
                 <div className="flex items-center space-x-3 text-sm md:text-base">
                   <span className="text-gray-800 hover:text-blue-600 font-semibold text-2xl transition duration-200 cursor-pointer">Shopping Cart</span>
                     <ChevronRight className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-800 font-semibold text-2xl hover:text-blue-600 transition duration-200 cursor-pointer">Checkout</span>
                   <ChevronRight className="w-4 h-4 text-gray-500" />
              <span className="text-gray-600 font-semibold text-2xl">Order Complete</span>
           </div>
      </div>
 


        {/* Information */}
        
    </div>
  );
}

export default page;
