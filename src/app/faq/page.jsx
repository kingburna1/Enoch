"use client";

import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import React from 'react';

const page = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <div
        className="w-full h-[300px] flex flex-col justify-center items-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://psychedelicsawarenessshop.com/wp-content/uploads/2019/10/header-bg-1-placeholder.jpg')",
        }}
      >
        <div className="flex flex-col gap-4 justify-center items-center text-white mt-10">
          <h3 className="text-2xl md:text-6xl font-semibold">
            FREQUENTLY ASKED QUESTIONS
          </h3>
          <div className="flex gap-2 justify-center items-center text-white">
            <button className="hover:text-blue-500 transition duration-300 ease-initial">
              Home
            </button>
            <button className=""> / FREQUENTLY ASKED QUESTIONS</button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7 p-10 mx-5">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">
            Shipping Information
          </h2>
          <div className="w-14 h-1 bg-blue-500 mt-1"></div>

          {/* questions */}
          <div>
            {/* First question */}
            <div className="border-1 border-gray-300 my-5">
              <div className="flex justify-between items-center border border-gray-300 p-3 hover:bg-gray-100 transition duration-300 ease-in-out">
                <div>
                  <h3 className="font-semibold text-gray-700 hover:text-blue-400 transition duration-300">
                    Is it safe to buy psychedelics products online?
                  </h3>
                </div>

                <div>
                  {openIndex !== 0 ? (
                    <button onClick={() => toggleAnswer(0)}>
                      <ChevronDown />
                    </button>
                  ) : (
                    <button onClick={() => toggleAnswer(0)}>
                      <ChevronUp />
                    </button>
                  )}
                </div>
              </div>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === 0
                    ? "max-h-96 opacity-100 p-4"
                    : "max-h-0 opacity-0 p-0"
                } text-gray-600`}
              >
                <p className="transition-opacity duration-300">
                  At Psychedelics Awareness Shop we take your safety and privacy
                  very seriously. We use cutting-edge technology to ensure all
                  personal and financial data is secure and your order is
                  processed safely and discreetly to your doorstep.
                </p>
              </div>
            </div>

            {/* Second question */}
            <div className="border-1 border-gray-300 my-5">
              <div className="flex justify-between items-center border border-gray-300 p-3 hover:bg-gray-100 transition duration-300 ease-in-out">
                <div>
                  <h3 className="font-semibold text-gray-700 hover:text-blue-400 transition duration-300">
                  How do you ship and package the products?
                  </h3>
                </div>

                <div>
                  {openIndex !== 1 ? (
                    <button onClick={() => toggleAnswer(1)}>
                      <ChevronDown />
                    </button>
                  ) : (
                    <button onClick={() => toggleAnswer(1)}>
                      <ChevronUp />
                    </button>
                  )}
                </div>
              </div>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === 1
                    ? "max-h-96 opacity-100 p-4"
                    : "max-h-0 opacity-0 p-0"
                } text-gray-600`}
              >
                <p className="transition-opacity duration-300">
                Delivery times vary depending on your location, but most orders within USA and Canada will be overnight shipment and out of USA will take 3 to 5 days
                </p>
              </div>
            </div>
            {/* Third question */}
            <div className="border-1 border-gray-300 my-5">
              <div className="flex justify-between items-center border border-gray-300 p-3 hover:bg-gray-100 transition duration-300 ease-in-out">
                <div>
                  <h3 className="font-semibold text-gray-700 hover:text-blue-400 transition duration-300">
                  Can i track my order ? 
                  </h3>
                </div>

                <div>
                  {openIndex !== 2 ? (
                    <button onClick={() => toggleAnswer(2)}>
                      <ChevronDown />
                    </button>
                  ) : (
                    <button onClick={() => toggleAnswer(2)}>
                      <ChevronUp />
                    </button>
                  )}
                </div>
              </div>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === 2
                    ? "max-h-96 opacity-100 p-4"
                    : "max-h-0 opacity-0 p-0"
                } text-gray-600`}
              >
                <p className="transition-opacity duration-300">
                Yes, all orders come with a tracking number that you can use to track your order once we have confirm your payment
                </p>
              </div>
            </div>

            {/* fouth question */}

            <div className="border-1 border-gray-300 my-5">
              <div className="flex justify-between items-center border border-gray-300 p-3 hover:bg-gray-100 transition duration-300 ease-in-out">
                <div>
                  <h3 className="font-semibold text-gray-700 hover:text-blue-400 transition duration-300">
                  Will my parcel be charged customs and import charges? 
                  </h3>
                </div>

                <div>
                  {openIndex !== 3 ? (
                    <button onClick={() => toggleAnswer(3)}>
                      <ChevronDown />
                    </button>
                  ) : (
                    <button onClick={() => toggleAnswer(3)}>
                      <ChevronUp />
                    </button>
                  )}
                </div>
              </div>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === 3
                    ? "max-h-96 opacity-100 p-4"
                    : "max-h-0 opacity-0 p-0"
                } text-gray-600`}
              >
                <p className="transition-opacity duration-300">
                Once payment is received, no extra charges will be required until your package arrives at the comfort of your own home.
                </p>
              </div>
            </div>


            {/* question 5 */}
            <div className="border-1 border-gray-300 my-5">
              <div className="flex justify-between items-center border border-gray-300 p-3 hover:bg-gray-100 transition duration-300 ease-in-out">
                <div>
                  <h3 className="font-semibold text-gray-700 hover:text-blue-400 transition duration-300">
                  Do you ship internationaly? 
                  </h3>
                </div>

                <div>
                  {openIndex !== 4 ? (
                    <button onClick={() => toggleAnswer(4)}>
                      <ChevronDown />
                    </button>
                  ) : (
                    <button onClick={() => toggleAnswer(4)}>
                      <ChevronUp />
                    </button>
                  )}
                </div>
              </div>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === 4
                    ? "max-h-96 opacity-100 p-4"
                    : "max-h-0 opacity-0 p-0"
                } text-gray-600`}
              >
                <p className="transition-opacity duration-300">
                Yes we do ship worldwide
                </p>
              </div>
            </div>

          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">Returns & Refunds</h2>
          <div className="w-14 h-1 bg-blue-500 mt-1"></div>
          <div>
              {/* six question */}
            <div className="border-1 border-gray-300 my-5">
              <div className="flex justify-between items-center border border-gray-300 p-3 hover:bg-gray-100 transition duration-300 ease-in-out">
                <div>
                  <h3 className="font-semibold text-gray-700 hover:text-blue-400 transition duration-300">
                  What payment methods do you accept? 
                  </h3>
                </div>

                <div>
                  {openIndex !== 5 ? (
                    <button onClick={() => toggleAnswer(5)}>
                      <ChevronDown />
                    </button>
                  ) : (
                    <button onClick={() => toggleAnswer(5)}>
                      <ChevronUp />
                    </button>
                  )}
                </div>
              </div>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === 5
                    ? "max-h-96 opacity-100 p-4"
                    : "max-h-0 opacity-0 p-0"
                } text-gray-600`}
              >
                <p className="transition-opacity duration-300">
                We accept all major Zelle Pay ,Bitcoin  and Cash app, as well as payments through PayPal.
                </p>
              </div>
            </div>

            {/* sevend question */}
            <div className="border-1 border-gray-300 my-5">
              <div className="flex justify-between items-center border border-gray-300 p-3 hover:bg-gray-100 transition duration-300 ease-in-out">
                <div>
                  <h3 className="font-semibold text-gray-700 hover:text-blue-400 transition duration-300">
                       Is Delivery Guaranteed ? 
                  </h3>
                </div>

                <div>
                  {openIndex !== 6 ? (
                    <button onClick={() => toggleAnswer(6)}>
                      <ChevronDown />
                    </button>
                  ) : (
                    <button onClick={() => toggleAnswer(6)}>
                      <ChevronUp />
                    </button>
                  )}
                </div>
              </div>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === 6
                    ? "max-h-96 opacity-100 p-4"
                    : "max-h-0 opacity-0 p-0"
                } text-gray-600`}
              >
                <p className="transition-opacity duration-300">
                we guarantee safe and secure delivery of your package. Plus, if for any reason you don't receive what you ordered, simply let us know and we'll happily reship it to you! So there's no need to worry - we've got your back from start to finish!
                </p>
              </div>
            </div>
            {/* eight question */}
            <div className="border-1 border-gray-300 my-5">
              <div className="flex justify-between items-center border border-gray-300 p-3 hover:bg-gray-100 transition duration-300 ease-in-out">
                <div>
                  <h3 className="font-semibold text-gray-700 hover:text-blue-400 transition duration-300">
                  How long will my refund take? 
                  </h3>
                </div>

                <div>
                  {openIndex !== 7 ? (
                    <button onClick={() => toggleAnswer(7)}>
                      <ChevronDown />
                    </button>
                  ) : (
                    <button onClick={() => toggleAnswer(7)}>
                      <ChevronUp />
                    </button>
                  )}
                </div>
              </div>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === 7
                    ? "max-h-96 opacity-100 p-4"
                    : "max-h-0 opacity-0 p-0"
                } text-gray-600`}
              >
                <p className="transition-opacity duration-300">
                Once you cancel your order through Psychedelics Awareness Shop, it won't take long at all. Typically, the funds should appear on your payment method within 5 business days after we've processed the cancellation.
                </p>
              </div>
            </div>

            {/* nine question */}

            <div className="border-1 border-gray-300 my-5">
              <div className="flex justify-between items-center border border-gray-300 p-3 hover:bg-gray-100 transition duration-300 ease-in-out">
                <div>
                  <h3 className="font-semibold text-gray-700 hover:text-blue-400 transition duration-300">
                  Can my Order be shipped to a PO Box? 
                  </h3>
                </div>

                <div>
                  {openIndex !== 8 ? (
                    <button onClick={() => toggleAnswer(8)}>
                      <ChevronDown />
                    </button>
                  ) : (
                    <button onClick={() => toggleAnswer(8)}>
                      <ChevronUp />
                    </button>
                  )}
                </div>
              </div>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === 8
                    ? "max-h-96 opacity-100 p-4"
                    : "max-h-0 opacity-0 p-0"
                } text-gray-600`}
              >
                <p className="transition-opacity duration-300">
                Absolutely! Your Order can be delivered right to your P.O. box without issue, unless you require expedited shipping — in that case, please provide us with a physical address instead.
                </p>
              </div>
            </div>


            {/* question 10*/}
            <div className="border-1 border-gray-300 my-5">
              <div className="flex justify-between items-center border border-gray-300 p-3 hover:bg-gray-100 transition duration-300 ease-in-out">
                <div className=" " >
                  <h3 className="font-semibold text-gray-700 hover:text-blue-400 transition duration-300">
                  Do I need to stay at home for my Order? 
                  </h3>
                </div>

                <div>
                  {openIndex !== 9 ? (
                    <button onClick={() => toggleAnswer(9)}>
                      <ChevronDown />
                    </button>
                  ) : (
                    <button onClick={() => toggleAnswer(9)}>
                      <ChevronUp />
                    </button>
                  )}
                </div>
              </div>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === 9
                    ? "max-h-96 opacity-100 p-4"
                    : "max-h-0 opacity-0 p-0"
                } text-gray-600`}
              >
                <p className="transition-opacity duration-300">
                Absolutely not! You don't have to be present when your Package arrives; provided you've entered a valid address and the delivery is on time, no signature will be necessary.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
