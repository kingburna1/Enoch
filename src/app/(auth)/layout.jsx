'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function DashboardLayout({ children }) {
  const [activeCategory, setActiveCategory] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const routeToCategoryMap = {
      '/Anxiety': 'Anxiety Medication',
      '/dmt-vape-cartridges': 'DMT VAPE CARTRIDGES',
      '/Ecstacy(6)': 'Ecstacy',
      '/LSD(6)': 'LSD',
      '/MagicMushrooms(10)': 'Magic Mushrooms',
      '/Mushroom-chocolate-guide': 'MUSHROOM CHOCOLATE BARS',
      '/Painmedication': 'Pain medication',
      '/ResearchChemicals(7)': 'Research Chemicals',
    };

    const cleanPath = pathname.split('?')[0];
    if (routeToCategoryMap[cleanPath]) {
      setActiveCategory(routeToCategoryMap[cleanPath]);
    }
  }, [pathname]);

  const isActive = (href, label) =>
    activeCategory === label || pathname === href;

  const handleClick = (label) => {
    setActiveCategory(label);
  };

  return (
    <div className="relative min-h-screen">
      {/* Header section */}
      <div className="bg-gray-100 py-10 flex px-4 justify-center items-center flex-col">
        <h1 className="text-5xl text-gray-600 font-bold pl-4 mb-3">
          {activeCategory || 'Shop'}
        </h1>
        <div className="flex space-x-2 text-sm text-gray-600">
          <div>Home /</div>
          <div>{activeCategory || 'Shop'}</div>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className="
            hidden md:block md:sticky md:top-16 md:w-60 bg-white text-[#474646]
            max-h-[calc(100vh-6rem)] p-2 right-0
          "
        >
          <h2 className="text-[14px] pl-4 font-bold mb-4">PRODUCT CATEGORIES</h2>
          <nav className="flex flex-col text-[14px] pl-4 space-y-1">
            <Link
              href="/Anxiety"
              className={`hover:text-blue-600 p-2 rounded ${
                isActive('/Anxiety', 'Anxiety Medication')
                  ? 'text-blue-700 font-bold'
                  : ''
              }`}
              onClick={() => handleClick('Anxiety Medication')}
            >
              Anxiety Medication (4)
            </Link>
            <Link
              href="/dmt-vape-cartridges"
              className={`hover:text-blue-600 p-2 rounded ${
                isActive('/dmt-vape-cartridges', 'DMT VAPE CARTRIDGES')
                  ? 'text-blue-700 font-bold'
                  : ''
              }`}
              onClick={() => handleClick('DMT VAPE CARTRIDGES')}
            >
              DMT VAPE CARTRIDGES (11)
            </Link>
            <Link
              href="/Ecstacy(6)"
              className={`hover:text-blue-600 p-2 rounded ${
                isActive('/Ecstacy(6)', 'Ecstacy') ? 'text-blue-700 font-bold' : ''
              }`}
              onClick={() => handleClick('Ecstacy')}
            >
              Ecstacy (6)
            </Link>
            <Link
              href="/LSD(6)"
              className={`hover:text-blue-600 p-2 rounded ${
                isActive('/LSD(6)', 'LSD') ? 'text-blue-700 font-bold' : ''
              }`}
              onClick={() => handleClick('LSD')}
            >
              LSD (6)
            </Link>
            <Link
              href="/MagicMushrooms(10)"
              className={`hover:text-blue-600 p-2 rounded ${
                isActive('/MagicMushrooms(10)', 'Magic Mushrooms')
                  ? 'text-blue-700 font-bold'
                  : ''
              }`}
              onClick={() => handleClick('Magic Mushrooms')}
            >
              Magic Mushrooms (10)
            </Link>
            <Link
              href="/Mushroom-chocolate-guide"
              className={`hover:text-blue-600 p-2 rounded ${
                isActive('/Mushroom-chocolate-guide', 'MUSHROOM CHOCOLATE BARS')
                  ? 'text-blue-700 font-bold'
                  : ''
              }`}
              onClick={() => handleClick('MUSHROOM CHOCOLATE BARS')}
            >
              MUSHROOM CHOCOLATE BARS (6)
            </Link>
            <Link
              href="/Painmedication"
              className={`hover:text-blue-600 p-2 rounded ${
                isActive('/Painmedication', 'Pain medication')
                  ? 'text-blue-700 font-bold'
                  : ''
              }`}
              onClick={() => handleClick('Pain medication')}
            >
              Pain medication (4)
            </Link>
            <Link
              href="/ResearchChemicals(7)"
              className={`hover:text-blue-600 p-2 rounded ${
                isActive('/ResearchChemicals(7)', 'Research Chemicals')
                  ? 'text-blue-700 font-bold'
                  : ''
              }`}
              onClick={() => handleClick('Research Chemicals')}
            >
              Research Chemicals (7)
            </Link>
            <a href="#" className="text-blue-700 p-2 rounded">
              Show more
            </a>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 md:ml-4 p-4">{children}</main>
      </div>
    </div>
  );
}
