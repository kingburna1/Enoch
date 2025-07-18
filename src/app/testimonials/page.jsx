'use client'; // if using in app directory

import React from 'react';
import Link from 'next/link';
import TestimonialCardComponent from './../../components/testimonialc/TestimonialCardComponent';
import { testimonials } from './../utils/testimonial';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './stylesss.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Page = () => {
  return (
    <div>
      <div className="bg-gray-100 py-16 flex flex-col items-center text-center">
        <h1 className="text-5xl font-bold text-gray-800">Testimonials</h1>
        <div className="mt-4 text-gray-600 space-x-1">
          <Link href="/" className="hover:text-blue-500">Home</Link>
          <span>/</span>
          <Link href="/shopp" className="hover:text-blue-500">Testimonials</Link>
        </div>
      </div>
      <div className="mx-10 ">
      <Swiper
       slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}  
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          768: {
            slidesPerView: 3, // 3 slides per view on screens >= 768px (md and up)
          },
        }}
      
      >
        {testimonials.map((items) => (
          <SwiperSlide key={items.id}>
            <div className='my-10 flex justify-center items-center transform hover:scale-105 transition duration-300 '>
              <TestimonialCardComponent testimonials={items} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
         {/* Custom navigation buttons */}
         <div className="swiper-button-prev hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-1/2 -translate-y-1/2 left-0 z-10 bg-red-900" />
        <div className="swiper-button-next hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-1/2 -translate-y-1/2 right-0 z-10" />
      </div>
    </div>
  );
}

export default Page;
