
'use client'
import CardComponent from "@/components/card/CardComponent";
import CardComponent1 from "@/components/card/CardComponent1";
import CardComponent2 from "@/components/card/CardComponent2";
import NavbarComponent from "@/components/navbar/NavbarComponent";
import Image from "next/image";
import { maintypes } from "./utils/maintypes";
import { drugs } from "./utils/drugs";
import { useState } from "react"
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Scrollbar, Navigation, FreeMode, Mousewheel, Grid } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';


export default function Home() {
     const [number, setNumber] = useState(3)
    const [textEntered, setTextEntered] = useState("")
    
    const increment = () => {
        setNumber(number+1)
    }

    const decrement = () => {
        setNumber(number >0 ? number-1 : 0)
    }

  return (
    <div className="text-gray-800 px-14">
      
      <p className="uppercase text-center text-sm text-gray-600 pt-5">Level up your psychedelic experience with our online store! We offer both magic mushrooms and DMT vape pens for sale at affordable prices for those new to this scene. </p>
    <div className='flex justify-center items-center'>
      <h1 className="font-extrabold text-center text-[25px] py-3 w-[85%] margin-auto">BUY MAGIC MUSHROOMS AND DMT VAPE PEN ONLINE AT PSYCHEDELICS AWARENESS SHOP </h1>
    </div>

    <div className='h-screen overflow-hidden'>
      <img src='/HERO.jpg' alt="hero" className='h-full w-full object-cover transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer'/>
    </div>

    {/* SHOP BY CATEGORIES */}
    <div className="border-t-3 border-x-1 border-b-1 border-x-gray-200 border-b-gray-200 border-[#17a2b8] mt-18 grid grid-cols-[1fr_2fr_3fr]">
      {/* GRID 1 */}
      <div className="text-center border-r-1 border-r-gray-200">
        <div className='py-5 border-b-1 border-gray-200'>
          <h1 className='text-xl font-bold text-[#17a2b8]'>SHOP BY CATEGORIES</h1>
        </div>

        <ol className="flex flex-col gap-3 text-[14.5px] py-3 px-3">
          <li className="hover:text-[#17a2b8] transition-transform duration-300 ease-in-out cursor-pointer"> <a href="/Anxiety" className="hover:underline">Anxiety</a> </li>
          <li className="hover:text-[#17a2b8] transition-transform duration-300 ease-in-out cursor-pointer">  <a href="/ResearchChemicals(7)" className="hover:underline">Research Chemicals</a> </li>
          <li className="hover:text-[#17a2b8] transition-transform duration-300 ease-in-out cursor-pointer"> <a href="/Painmedication" className="hover:underline">Pain Medication</a> </li>
          <li className="hover:text-[#17a2b8] transition-transform duration-300 ease-in-out cursor-pointer"> <a href="/Mushroom-chocolate-guide" className="hover:underline">MUSHROOM CHOCOLATE BARS</a> </li>
          <li className="hover:text-[#17a2b8] transition-transform duration-300 ease-in-out cursor-pointer"> <a href="/MagicMushrooms(10)" className="hover:underline">Magic Mushrooms </a> </li>
          <li className="hover:text-[#17a2b8] transition-transform duration-300 ease-in-out cursor-pointer"><a href="/LSD(6)" className="hover:underline">LSD</a></li>
          <li className="hover:text-[#17a2b8] transition-transform duration-300 ease-in-out cursor-pointer"><a href="/Ecstacy(6)" className="hover:underline">Ecstacy    </a></li>
          <li className="hover:text-[#17a2b8] transition-transform duration-300 ease-in-out cursor-pointer">  <a href="/dmt-vape-cartridges" className="hover:underline">DMT VAPE CARTRIDGES</a></li>
        </ol>
      </div>

      {/* GRID 2 - Horizontal Scroll with Snap */}
<div className="overflow-x-auto snap-x snap-mandatory">
  <div className="flex">
    <img
      src="https://psychedelicsawarenessshop.com/wp-content/uploads/2023/02/il_794xN.4034282683_9ugb.webp"
      alt="img"
      className="w-screen object-cover shrink-0 snap-start"
    />
    <img
      src="https://psychedelicsawarenessshop.com/wp-content/uploads/2023/02/download-8.jpg"
      alt="img"
      className="w-screen h-70 object-cover shrink-0 snap-start"
    />
    <img
      src="https://psychedelicsawarenessshop.com/wp-content/uploads/2023/02/ab164215-c9a5-4e37-b05e-06647d1e64dd_1140x641.jpg"
      alt="img"
      className="w-screen h-64 object-cover shrink-0 snap-start"
    />
    <img
      src="https://psychedelicsawarenessshop.com/wp-content/uploads/2023/02/unnamed.png"
      alt="img"
      className="w-screen h-64 object-cover shrink-0 snap-start"
    />
  </div>
</div>
      

      {/* GRID 3 */}
      <div className="grid grid-cols-4 gap-x-42 overflow-x-auto pb-4">
        {drugs.map((item, index) => <CardComponent key={item.id} drug={item} /> )}
      </div>
    </div>
    {/* SHOP BY CATEGORIES END */}

    <section className="py-5 text-center">
      <div>
        <h1 className="font-bold text-center text-[28px] py-3 margin-auto">Buy Psychedelics Online in 2025 – Trusted Source for Magic Mushrooms, DMT Vape Pens & More</h1>
        <p className="text-sm">Looking to explore <span className='font-semibold'>magic mushrooms for sale, DMT vape pens,</span> or <span className='font-semibold'>psychedelic products online</span> in 2025? Welcome to Psychedelics Awareness Shop, your #1 trusted destination for high-quality <span className='font-semibold'>psilocybin mushrooms, DMT vape cartridges, LSD blotters,</span> and more. Whether you’re looking to <span className='font-semibold'>buy magic mushrooms online, order DMT cartridges,</span> or find <span className='font-semibold'>psychedelic mushrooms online,</span> we provide the best quality, discreet shipping, and unbeatable customer service.</p>
      </div>
      
      <div>
        <h1 className="font-bold text-center text-[28px] py-3 margin-auto">Buy Magic Mushrooms Online – Trusted Source for Psilocybin Products</h1>
        <p className="text-sm">If you’re wondering <span className='font-semibold'>where to buy magic mushrooms, </span> we make it simple, safe, and convenient. We offer a wide selection of <span className='font-semibold'>psilocybin mushrooms for sale,</span> including:</p>
        <ul className="text-sm flex flex-col gap-3 py-3">
          <li className="hover:text-[#007bff] transition duration-300 ease-in-out cursor-pointer">🍄 Penis Envy Magic Mushroom</li>
          <li className="hover:text-[#007bff] transition duration-300 ease-in-out cursor-pointer">🍄 Magic Mushroom Collection</li>
          <li className="hover:text-[#007bff] transition duration-300 ease-in-out cursor-pointer">🍄 Buy Magic Mushrooms Online in New York</li>
          <li className="hover:text-[#007bff] transition duration-300 ease-in-out cursor-pointer">🍄 Psilocybin Mushroom Resources</li>
          <li className="hover:text-[#007bff] transition duration-300 ease-in-out cursor-pointer">🍄 Psychedelic Mushroom Shopping Guide</li>
        </ul>
        <p className="text-sm py-3">Whether you’re microdosing or seeking a full therapeutic journey, you can <span className='font-semibold'>buy psychedelic mushrooms online</span> from our curated catalog. We ship across the U.S., Canada, Australia, and Europe with full discretion and rapid processing.</p>
      </div>

       <div>
        <h1 className="font-bold text-center text-[28px] py-3 margin-auto">Magic Mushrooms Buy Guide – Fast Shipping, Lab-Tested Strains</h1>
        <p className="text-sm">New to <span className='font-semibold'> shrooms buy </span> online? We ensure every product is:</p>
        <ul className="disc text-sm flex flex-col gap-2 py-3">
          <li>✅ Lab-Tested</li>
          <li>✅ Potent & Pure</li>
          <li>✅ Sealed for Discretion</li>
          <li>✅ Shipped Nationwide in 24–72 Hours</li>
        </ul>
        <p className="text-sm py-3">You can also browse our entire mushroom catalog for popular strains like <span className='font-semibold'>Golden Teachers, Penis Envy, Albino A+, </span>  and more.</p>
      </div>

      <div>
        <h1 className="font-bold text-center text-[28px] py-3 margin-auto">Buy DMT Vape Pens for Sale – Premium Vaping Experience</h1>
        <p className="text-sm">We offer a wide range of <span className='font-semibold'>DMT vape pens for sale, </span>  ideal for beginners and advanced users. Our premium cartridges and pens are pure, potent, and discreet. Start with the most trusted options in 2025:</p>
        <ul className="disc text-sm flex flex-col gap-3 py-3">
          <li className="hover:text-[#007bff] transition-transform duration-300 ease-in-out cursor-pointer">🔥 DMT Cartridge 1mL – Best Seller</li>
          <li className="hover:text-[#007bff] transition-transform duration-300 ease-in-out cursor-pointer">🔥 Top DMT Vape Pens Guide</li>
          <li className="hover:text-[#007bff] transition-transform duration-300 ease-in-out cursor-pointer">🔥 DMT Vape Cartridges Collection</li>
          <li className="hover:text-[#007bff] transition-transform duration-300 ease-in-out cursor-pointer">🔥 Buy Dimethyltryptamine (DMT) Direct</li>
          <li className="hover:text-[#007bff] transition-transform duration-300 ease-in-out cursor-pointer">🔥 Browse Our Full DMT Vape Collection</li>
        </ul>
        <p className="text-sm py-3">Whether you’re searching <span className='font-semibold'>DMT vape pen for sale, DMT vape buy,</span> or just looking for high-purity vapor options, we have what you need.</p>
      </div>

      <div className="pb-4 border-b-1">
        <h1 className="font-bold text-center text-[28px] py-3 margin-auto">Why Customers Trust Psychedelics Awareness Shop</h1>
      
        <ul className="disc text-sm flex flex-col gap-2 py-3 font-semibold">
          <li>✅ Discreet Packaging & Secure Checkout</li>
          <li>✅ Overnight & Express Shipping</li>
          <li>✅ Premium-Grade Psychedelic Products</li>
          <li>✅ Bulk Order Discounts Available</li>
        </ul>
        <p className="text-sm py-3">Our main store is designed to help you navigate the entire psychedelic catalog effortlessly—from <span className='font-semibold'>magic mushrooms for sale to DMT vape pens </span>  and more.</p>
      </div>

      <div>
        <h1 className="font-bold text-center text-[28px] py-3 margin-auto">Other Trending Psychedelic Searches in 2025</h1>

        <ul className="disc text-sm flex flex-col gap-2 py-3 font-semibold">
          <li>Magic mushroom for sale near me</li>
          <li>Order magic mushrooms online USA</li>
          <li>Where to buy magic mushrooms legally</li>
          <li>Buy coke online discreet shipping</li>
          <li>Psilocybin for sale for microdosing</li>
          <li>Best site to buy psychedelic mushrooms online</li>
        </ul>
      </div>

      <div>
        <h1 className="font-bold text-center text-[28px] py-3 margin-auto">How to Order Online – Fast & Safe Checkout</h1>

        <ul className="ordered text-sm flex flex-col gap-2 py-3">
          <li><span className='font-semibold'>Visit</span> the <span className="hover:text-[#007bff] transition-transform duration-300 ease-in-out cursor-pointer">Psychedelics Awareness Shop</span></li>
          <li><span className='font-semibold'>Browse</span> by product category: 
          <span className="hover:text-[#007bff] transition-transform duration-300 ease-in-out cursor-pointer"> Magic Mushrooms</span> or 
          <span className="hover:text-[#007bff] transition-transform duration-300 ease-in-out cursor-pointer"> DMT Vapes</span></li>
          <li><span className='font-semibold'>Add to Cart </span>the products you want</li>
          <li><span className='font-semibold'>Checkout Securely  </span>with credit card or crypto</li>
          <li><span className='font-semibold'>Track Your Shipment </span> and receive in 24–72 hours</li>
        </ul>
        <p className="text-sm py-3">We also support <span className='font-semibold'>bulk buyers </span>  with special pricing on large orders. If you’re looking to stock up on <span className='font-semibold'> DMT vape pen for sale or magic mushrooms buy, </span>contact us for exclusive wholesale deals.</p>
      </div>

      <div>
        <h1 className="font-bold text-center text-[28px] py-3 margin-auto">Other Trending Psychedelic Searches in 2025</h1>
        <p className="text-sm">Whether you’re shopping for <span className='font-semibold'>magic mushrooms, psilocybin capsules, or DMT vapes, the Psychedelics Awareness Shop </span>  is your all-in-one destination. With guides, top-rated products, and expert support, we make psychedelic discovery safe, reliable, and accessible.</p>
        <p className="text-sm py-3">Explore our partner sites to learn more:</p>
        <ul className="disc text-sm flex flex-col gap-3 py-3">
          <li className="hover:text-[#007bff] transition-transform duration-300 ease-in-out cursor-pointer">Psilocybin Mushroom Store</li>
          <li className="hover:text-[#007bff] transition-transform duration-300 ease-in-out cursor-pointer">Magic Mushroom Marketplace</li>
          <li className="hover:text-[#007bff] transition-transform duration-300 ease-in-out cursor-pointer">Psychedelics Portal</li>
        </ul>
        <p className="text-sm py-3">Don’t miss out on the best products of 2025. <span className='font-semibold'>Order magic mushrooms, DMT vape pens, or psilocybin mushrooms for sale </span>  today and enjoy <span className='font-semibold'> fast, discreet delivery </span>to your doorstep.</p>
      </div>
    </section>


    <section className="flex gap-4">
      <div className='w-[600px]'></div>

    <div className='relative group w-[900px]'>
      <Swiper
        modules={[ Scrollbar, Navigation, FreeMode, Mousewheel]}
         navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        spaceBetween={20}
        slidesPerView={4}
  
        scrollbar={{ draggable: true,
                      hide: true, }}
        // allowSlidePrev={true}
        // touchRatio={1}
        // threshold-={5}
        freeMode={true}
        mousewheel={{ forceToAxis: true }}
         className="mySwiper cursor-pointer relative">

        {maintypes.map((item, index) => (
          <SwiperSlide>
            <CardComponent2 key={item.id} type={item} />
          </SwiperSlide>
        ))}

        {/* NAVIGATION */}
    {/* <div className='flex justify-between relative z-10 top-[50%] py-3 w-full'> */}
        <button  onClick={decrement} className='swiper-button-prev -translate-y-1/2 opacity-0 group-hover:opacity-100 absolute z-10 top-[50%] left-8 bg-white hover:bg-white/90 transition-opacity duration-500 ease-in-out cursor-pointer shadow-2xl shadow-gray-400 h-8 w-8 rounded-full flex items-center justify-center'><ArrowLeft size={18} /></button>
        <button  onClick={increment} className='swiper-button-next -translate-y-1/2 opacity-0 group-hover:opacity-100 absolute z-10 top-[50%] right-5 bg-white hover:bg-white/90 transition-opacity duration-500 ease-in-out cursor-pointer shadow-2xl shadow-gray-400 h-8 w-8 rounded-full flex items-center justify-center'><ArrowRight size={18} /></button>
    {/* </div> */}
     {/* NAVIGATION END */}

        {/* RESPONSIVE NAVIGATION */}
    {/* <div className='flex md:hidden justify-between items-center mt-[3%] py-3 border-t-1 border-[#262626]'>
        <div className='flex gap-4 items-center'>
            <button  onClick={decrement} className='swiper-button-prev cursor-pointer  border-1 border-[#262626] text-[#999999] h-8 w-8 rounded-full flex items-center justify-center'><ArrowLeft size={18} /></button>
            <button  onClick={increment} className='swiper-button-next cursor-pointer bg-[#1a1a1a] border-1 border-[#262626] text-white h-8 w-8 rounded-full flex items-center justify-center'><ArrowRight size={18} /></button>
        </div>
    </div> */}
    {/* RESPONSIVE NAVIGATION END */}
      </Swiper> 
  </div>

      {/* <div className='flex gap-3'>
        {maintypes.map((item, index) => <CardComponent2 key={item.id} type={item} /> )}
      </div> */}
    </section>

    <section className="pt-10 flex flex-col gap-4">
      <div>
        <h1 className="font-bold text-[25px] py-3 margin-auto">Magic Mushrooms</h1>
        <p className="text-sm"><span className="hover:text-[#007bff] transition-transform duration-300 ease-in-out cursor-pointer">Magic mushrooms</span>, also known as psilocybin mushrooms, are fungi that contain the psychoactive compound psilocybin. When ingested, psilocybin is converted to psilocin, which can induce altered states of consciousness, mystical experiences, and profound insights. Many users report a deep connection with nature and heightened creativity.</p>
      </div>

      <div>
        <h1 className="font-bold text-[25px] py-3 margin-auto">LSD (Lysergic Acid Diethylamide)</h1>
        <p className="text-sm"><span className="hover:text-[#007bff] transition-transform duration-300 ease-in-out cursor-pointer">LSD</span>, often referred to as “acid,” is a synthetic psychedelic compound. It is known for its potent hallucinogenic effects, which can include vivid visuals, altered perception of time, and a sense of interconnectedness. Buy LSD blotters online  has been the subject of scientific research and has played a significant role in the counterculture movement of the 1960s.</p>
      </div>

      <div>
        <h1 className="font-bold text-[25px] py-3 margin-auto">DMT (Dimethyltryptamine)</h1>
        <p className="text-sm"><span className="hover:text-[#007bff] transition-transform duration-300 ease-in-out cursor-pointer">DMT</span> s a naturally occurring psychedelic compound found in various plants and animals. It is often referred to as the “spirit molecule” due to the intensely profound and mystical experiences it can induce. DMT trips are typically short but incredibly intense, leading users to encounter entities, alternate dimensions, and a profound sense of awe.</p>
        <p className='py-3 text-sm'>Now that we have a basic understanding of these substances, let’s dive into the world of buying psychedelics online.</p>
        </div>

       <div>
        <h1 className="font-bold text-[25px] py-3 margin-auto">Where to Buy Psychedelics Online</h1>
        <p className="text-sm">The internet has revolutionized the way we access information and products, including psychedelics. However, it’s essential to approach this topic with caution and responsibility. Here are some reputable sources where you can buy psychedelics online with us :</p>
      </div>
    </section>


    <section className="flex flex-col gap-4 pt-4">
      <h1 className="font-bold text-[26px] ">Why Buy Psychedelics Online with Us ?</h1>
      <div>
        <h3 className="text-sm font-semibold py-3">Convenience</h3>
        <p className="text-sm">Buying psychedelics online  from your home is a better alternative than trying to find a dealer. This purchase method can be especially helpful for those who live in areas where psychedelics are not readily available or who may have difficulty accessing them due to mobility, medical, or transportation issues.</p>
      </div>

      <div>
        <h3 className="text-sm font-semibold py-3">Safety</h3>
        <p className="text-sm">There are risks associated with buying psychedelics online, including the possibility of receiving a different substance than what you ordered. The impact of various substances on your physical and mental health can be significant, so this risk is a major consideration. To mitigate the risk, purchasing psychedelics from reputable sources is important. At Psychedelics Awareness Shop, we understand how important it is to have access to safe psychedelics. We go above and beyond to ensure our products meet strict quality and purity standards.</p>
      </div>

      <div>
        <h3 className="text-sm font-semibold py-3">Private</h3>
        <p className="text-sm">When purchasing psychedelics online, you must be assured that the seller is trustworthy. We take your privacy seriously, use the latest technology to secure your personal and financial information and utilize only reliable payment methods. Our website uses encryption to provide enhanced security so we can guarantee your information remains confidential.</p>
      </div>

      <div>
        <p className="text-sm">When purchasing from an online store, choosing a business that offers shipment tracking and discreet packaging is important to protect your privacy. Ensure the store uses cushioning and sealed packaging for items requiring extra protection. Our store also provides anonymous worldwide shipping to ensure complete privacy and security.</p>
      </div>
    </section>

    {/* OUR CATEGORIES */}
    <div className="border-t-3 border-x-1 border-b-1 border-x-gray-200 border-b-gray-200 border-[#dc3545] mt-18 grid grid-cols-[1fr_2fr_3fr]">
      {/* GRID 1 */}
      <div className="text-center border-r-1 border-r-gray-200">
        <div className='py-5 border-b-1 border-gray-200'>
          <h1 className='text-xl font-bold text-[#dc3545]'>Our Categories</h1>
        </div>

        <ol className="flex flex-col gap-3 text-[14.5px] py-3 px-3">
          <li className="hover:text-[#dc3545] transition-transform duration-300 ease-in-out cursor-pointer">Uncategorized</li>
          <li className="hover:text-[#dc3545] transition-transform duration-300 ease-in-out cursor-pointer">Research Chemicals</li>
          <li className="hover:text-[#dc3545] transition-transform duration-300 ease-in-out cursor-pointer">Research Chemicals</li>
          <li className="hover:text-[#dc3545] transition-transform duration-300 ease-in-out cursor-pointer">MUSHROOM CHOCOLATE BARS</li>
          <li className="hover:text-[#dc3545] transition-transform duration-300 ease-in-out cursor-pointer">Magic Mushrooms</li>
          <li className="hover:text-[#dc3545] transition-transform duration-300 ease-in-out cursor-pointer">LSD</li>
          <li className="hover:text-[#dc3545] transition-transform duration-300 ease-in-out cursor-pointer">Ecstacy</li>
          <li className="hover:text-[#dc3545] transition-transform duration-300 ease-in-out cursor-pointer">DMT VAPE CARTRIDGES</li>
        </ol>
      </div>

      {/* GRID 2 */}
      <div>
        <img src="/shrooms.png" alt='img' className='w-full object-cover'/>
      </div>

      {/* GRID 3 */}
       <div className="grid grid-cols-4 gap-x-42 overflow-x-auto pb-4">
        {drugs.map((item, index) => <CardComponent key={item.id} drug={item} /> )}
      </div>
    </div>
    {/* OUR CATEGORIES END */}

    <section className="pt-8">
      <div>
        <h1 className="font-bold text-[26px] pb-3">Looking to Buy LSD Online, Buy DMT Online, or Buy Magic Mushrooms?</h1>
        <p className="text-sm">Are you interested in purchasing LSD, DMT, or Magic Mushrooms online? Look no further than the Psychedelic Awareness Shop. We are committed to delivering an exceptional online shopping experience for all your psychedelic needs. Our extensive product range includes DMT vape cartridges, magic mushrooms, and LSD, all available for discreet delivery to your doorstep. Our user-friendly and secure website ensures an anonymous shopping experience, guaranteeing the swift and perfect delivery of your desired products.</p>
      </div>

      <div className="pt-5">
        <p className="text-sm">At Psychedelic Awareness Shop, there’s no minimum order requirement, allowing you to test our legitimacy before making bulk purchases. You can conveniently order magic mushrooms online and have them delivered to your doorstep on the same day. Experience the convenience and reliability of our services today.</p>
      </div>
    </section>


    {/* POPULAR FASHION */}
    <div className="border-t-3 border-x-1 border-b-1 border-x-gray-200 border-b-gray-200 border-[#17a2b8] mt-18 grid grid-cols-[1fr_5fr]">
      {/* GRID 1 */}
      <div className="text-center border-r-1 border-r-gray-200">
        <div className='py-5 border-b-1 border-gray-200'>
          <h1 className='text-xl font-bold text-[#17a2b8]'>Popular Fashion</h1>
        </div>

        <ol className="flex flex-col gap-3 text-[14.5px] py-3 px-3">
          <li className="hover:text-[#17a2b8] transition-transform duration-300 ease-in-out cursor-pointer">Uncategorized</li>
          <li className="hover:text-[#17a2b8] transition-transform duration-300 ease-in-out cursor-pointer">Research Chemicals</li>
          <li className="hover:text-[#17a2b8] transition-transform duration-300 ease-in-out cursor-pointer">Research Chemicals</li>
          <li className="hover:text-[#17a2b8] transition-transform duration-300 ease-in-out cursor-pointer">MUSHROOM CHOCOLATE BARS</li>
          <li className="hover:text-[#17a2b8] transition-transform duration-300 ease-in-out cursor-pointer">Magic Mushrooms</li>
          <li className="hover:text-[#17a2b8] transition-transform duration-300 ease-in-out cursor-pointer">LSD</li>
          <li className="hover:text-[#17a2b8] transition-transform duration-300 ease-in-out cursor-pointer">Ecstacy</li>
          <li className="hover:text-[#17a2b8] transition-transform duration-300 ease-in-out cursor-pointer">DMT VAPE CARTRIDGES</li>
        </ol>
      </div>

      {/* GRID 2 */}
      <div className="grid grid-cols-4">
        {drugs.map((item, index) => <CardComponent1 key={item.id} drug={item} /> )}
      </div>
    </div>
    {/* POPULAR FASHION END */}

    <section className="grid grid-cols-4 gap-8 py-10">
      <div>
        <h1 className="text-xl font-bold py-2 border-b-1 border-blue-600 w-fit">RECENT</h1>
        <div className='border-t-1 border-gray-200 pt-5 flex flex-col gap-5'>

          <div className='flex gap-3 items-center border-b-1 border-gray-200'>
            <img src='https://psychedelicsawarenessshop.com/wp-content/uploads/2024/11/WhatsApp-Image-2021-05-12-at-5.21.45-AM-300x300.jpeg' alt='img' className=" w-15 h-15 object-cover"/>
            <div>
              <p className="text-gray-800 text-[14px] pt-2 hover:text-blue-500 transition-transform ease-in-out duration-300 cursor-pointer">Columbian Cocaine Now</p>
            <p className="text-gray-800 font-semibold text-[17px]">$350.00 - $1,500.00</p>
            </div>
          </div>

         <div className='flex gap-3 items-center border-b-1 border-gray-200'>
            <img src='https://psychedelicsawarenessshop.com/wp-content/uploads/2025/03/Xylazine-tranq-3-300x200.jpg' alt='img' className="w-15 h-15 object-cover"/>
            <div>
              <p className="text-gray-800 text-[14px] pt-2 hover:text-blue-500 transition-transform ease-in-out duration-300 cursor-pointer">Xylazine (Tranq)</p>
            <p className="text-gray-800 font-semibold text-[17px]">$300.00 - $1,000.00</p>
            </div>
          </div>

         <div className='flex gap-3 items-center'>
            <img src='https://psychedelicsawarenessshop.com/wp-content/uploads/2025/03/ghows-DA-01fa5fe2-12b9-4fbc-8579-6e4e48bf5ce4-cce1f25e-300x300.webp'  alt='img' className=" w-15 h-15 object-cover" />
            <div>
              <p className="text-gray-800 text-[14px] pt-2 hover:text-blue-500 transition-transform ease-in-out duration-300 cursor-pointer">Crack Cocaine</p>
            <p className="text-gray-800 font-semibold text-[17px]">$350.00 - $1,500.00</p>
            </div>
          </div>

        </div>
      </div>

       <div>
        <h1 className="text-xl font-bold py-2 border-b-1 border-blue-600 w-fit">FEATURED</h1>
        <div className='border-t-1 border-gray-200'>

        </div>
      </div>

       <div>
        <h1 className="text-xl font-bold py-2 border-b-1 border-blue-600 w-fit">ON SALE</h1>
        <div className='border-t-1 border-gray-200 pt-5'>
            <div className='flex gap-3 items-center'>
            <img src='https://psychedelicsawarenessshop.com/wp-content/uploads/2023/02/deadhead-5ml-cart-sale.jpg'  alt='img' className=" w-15 h-15 object-cover" />
            <div>
              <p className="text-gray-800 text-[14px] pt-2 hover:text-blue-500 transition ease-in-out duration-300 cursor-pointer">DMT 3 Cadridges Deal .5mL</p>
            <p className="text-gray-800 font-semibold text-[17px]">$350.00</p>
            </div>
          </div>

        </div>
      </div>

       <div>
        <h1 className="text-xl font-bold py-2 border-b-1 border-blue-600 w-fit">TOP RATED</h1>
        <div className='border-t-1 border-gray-200 pt-5 flex flex-col gap-5'>

          <div className='flex gap-3 items-center border-b-1 border-gray-200'>
            <img src='https://psychedelicsawarenessshop.com/wp-content/uploads/2023/02/pb-nndmt-vanilla.jpg'  alt='img' className=" w-15 h-15 object-cover" />
            <div>
              <p className="text-gray-800 text-[14px] pt-2 hover:text-blue-500 transition ease-in-out duration-300 cursor-pointer">DMT NN .5ML(400MG DMT)</p>
            <p className="text-gray-800 font-semibold text-[17px]">$150.00</p>
            </div>
          </div>

          <div className='flex gap-3 items-center border-b-1 border-gray-200'>
            <img src='https://psychedelicsawarenessshop.com/wp-content/uploads/2024/11/cooper503-buy-meth-online-1-0c171eee-6chm-600x600.jpg'  alt='img' className=" w-15 h-15 object-cover" />
            <div>
              <p className="text-gray-800 text-[14px] pt-2 hover:text-blue-500 transition ease-in-out duration-300 cursor-pointer">Crystal Meth</p>
            <p className="text-gray-800 font-semibold text-[17px]">$220.00 – $1,800.00</p>
            </div>
          </div>

          <div className='flex gap-3 items-center'>
            <img src='https://psychedelicsawarenessshop.com/wp-content/uploads/2023/02/mungus-shroom-1.jpg'  alt='img' className=" w-15 h-15 object-cover" />
            <div>
              <p className="text-gray-800 text-[14px] pt-2 hover:text-blue-500 transition ease-in-out duration-300 cursor-pointer">White Rabbit Magic Mushroom</p>
            <p className="text-gray-800 font-semibold text-[17px]">$90.00 – $800.00</p>
            </div>
          </div>

        </div>
      </div>
    </section>
    </div>
  );
}
