import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaFlickr,
  FaRss,
  FaYoutube
} from 'react-icons/fa';

const FooterComponent = () => {
  return (
    <footer className="bg-[#142335] text-white  py-10 px-10">
    <div className="max-w-7xl mx-auto grid md:grid-cols-6 gap-4 text-sm">
      {/* About Column */}
      <div className="md:col-span-2 space-y-4">
        <h2 className="text-lg font-semibold">Welcome to Psychedelics Awareness Shop</h2>
        <p>
          We are one of the industry's premier online sellers when it comes to Psychedelic Products. Be sure to read reviews on each item; these were written by real customers who have experienced them firsthand. Our passion lies in offering excellent products and legal distribution of Psychedelic Magic Mushrooms and DMT VAPE CARTRIDGES, bringing a level of professional commerce, responsibility, and innovation into an unregulated sector that previously didn’t exist.
        </p>
        <p>
          It can be challenging to offer money-back guarantees on Psychedelic Products but that is exactly why we do — because we love what we do and what Psychedelic Products available all over and everyone should have the awareness.
        </p>
        <div className="flex items-center space-x-2">
          <span>📍</span>
          <span>1537 4th Street 174 San Rafael, CA 94901</span>
        </div>
        <div className="flex items-center space-x-2">
          <span>🕒</span>
          <span>Mon - Fri / 9:00 AM - 6:00 PM</span>
        </div>
      </div>

      {/* Info Column */}
      <div>
        <h3 className="text-md font-semibold mb-3">INFORMATION</h3>
        <ul className="space-y-2">
          <li><a href="/about" className="hover:underline">About Us</a></li>
          <li><a href="/contact" className="hover:underline">Contact Us</a></li>
          <li><a href="/about" className="hover:underline">Shipping & Delivery</a></li>
          <li><a href="/blog" className="hover:underline">Latest News</a></li>
          <li><a href="/contact" className="hover:underline">Our Sitemap</a></li>
        </ul>
      </div>

      {/* Service Column */}
      <div>
        <h3 className="text-md font-semibold mb-3">OUR SERVICE</h3>
        <ul className="space-y-2">
          <li><a href="/about" className="hover:underline">Privacy Policy</a></li>
          <li><a href="/about" className="hover:underline">Terms of Sale</a></li>
          <li><a href="/contact" className="hover:underline">Customer Service</a></li>
          <li><a href="/contact" className="hover:underline">Delivery Information</a></li>
          <li><a href="/contact" className="hover:underline">Payments</a></li>
        </ul>
      </div>

      {/* Account Column */}
      <div>
        <h3 className="text-md font-semibold mb-3">MY ACCOUNT</h3>
        <ul className="space-y-2">
          <li><a href="login" className="hover:underline">My Account</a></li>
          <li><a href="/shopp" className="hover:underline">My Shop</a></li>
          <li><a href="/shoppingcart" className="hover:underline">My Cart</a></li>
          <li><a href="/chechout" className="hover:underline">Checkout</a></li>
          <li><a href="/" className="hover:underline">My Wishlist</a></li>
        </ul>
      </div>

        {/* Newsletter & Social Icons */}
    <div className="w-fit mx-auto  flex flex-col  gap-4">
    <h3 className="text-md font-semibold mb-3">NEWSLETTER</h3>
      <div className="text-xs">Subscribe to our mailing list to get the new updates!</div>
      <div className="flex space-x-1 text-white text-lg">
        <div className=" w-5 h-5 flex justify-center items-center bg-blue-800">
             <FaFacebookF  className="text-xs"/>
             </div>
       
        <div className=" w-5 h-5 flex justify-center items-center bg-blue-300">
        <FaTwitter  className="text-xs" />
        </div>
        <div className=" w-5 h-5 flex justify-center items-center bg-blue-400">
        <FaLinkedinIn  className="text-xs"/>
        </div>

        <div className=" w-5 h-5 flex justify-center items-center bg-red-800">
        <FaInstagram  className="text-xs"/>
        </div>

        <div className="w-5 h-5 flex justify-center items-center bg-red-300">
        <FaFlickr  className="text-xs"/>
        </div>
        <div className=" w-5 h-5 flex justify-center items-center bg-yellow-600">
        <FaRss  className="text-xs"/>
        </div>

        <div className="w-5 h-5 flex justify-center items-center bg-red-900">
        <FaYoutube  className="text-xs"/>
        </div>
      </div>
    </div>

    </div>

  

    {/* Bottom Footer */}
    <div className="max-w-7xl mx-auto mt-8 flex flex-col md:flex-row justify-between items-center text-sm border-t border-gray-700 pt-4">
      <p>Kapee © 2025 by PressLayouts All Rights Reserved.</p>
      <div className="flex gap-2 mt-2 md:mt-0">
        <img src="https://psychedelicsawarenessshop.com/wp-content/themes/kapee/assets/images/payments-method.png" alt="Visa" className="h-6" />
        {/* <img src="/paypal.png" alt="PayPal" className="h-6" />
        <img src="/discover.png" alt="Discover" className="h-6" />
        <img src="/maestro.png" alt="Maestro" className="h-6" />
        <img src="/mastercard.png" alt="MasterCard" className="h-6" />
        <img src="/amex.png" alt="American Express" className="h-6" /> */}
      </div>
    </div>
  </footer>
  );
}

export default FooterComponent;
