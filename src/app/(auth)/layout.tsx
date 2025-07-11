'use client';

import { ReactNode, useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    // Auto-detect active category from pathname if not already set
    const routeToCategoryMap: Record<string, string> = {
      '/Anxiety': 'Anxiety Medication',
      '/dmt-vape-cartridges': 'DMT VAPE CARTRIDGES',
      '/Ecstacy(6)': 'Ecstacy',
      '/LSD(6)': 'LSD',
      '/MagicMushrooms(10)': 'Magic Mushrooms',
      '/Mushroom-chocolate-guide': 'MUSHROOM CHOCOLATE BARS',
      '/Painmedication': 'Pain medication',
      '/ResearchChemicals(7)': 'Research Chemicals',
    };

    const cleanPath = pathname.split('?')[0]; // ignore query params
    if (routeToCategoryMap[cleanPath]) {
      setActiveCategory(routeToCategoryMap[cleanPath]);
    }
  }, [pathname]);

  const isActive = (href: string, label: string) =>
    activeCategory === label || pathname === href;

  const handleClick = (label: string) => {
    setActiveCategory(label);
  };

  return (
    <div className="relative">
      {/* Header section */}
      <div className="bg-gray-100 py-10 w-full flex px-4 justify-center items-center flex-col">
        <h1 className="text-2xl text-gray-600 font-bold pl-4 mb-3">
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
            hidden md:block md:sticky md:top-13 md:w-60 bg-white text-[#474646]
            max-h-[calc(100vh-6rem)] p-2 right-0"
        >
          <h2 className="text-[14px] pl-4 font-bold mb-4">PRODUCT CATEGORIES</h2>
          <nav className="flex flex-col text-[14px] pl-4 space-y-1">
            <Link href="/Anxiety" className={`hover:text-blue-600 p-2 rounded ${isActive('/Anxiety', 'Anxiety Medication') ? 'text-blue-700 font-bold' : ''}`} onClick={() => handleClick('Anxiety Medication')}>Anxiety Medication (4)</Link>
            <Link href="/dmt-vape-cartridges" className={`hover:text-blue-600 p-2 rounded ${isActive('/dmt-vape-cartridges', 'DMT VAPE CARTRIDGES') ? 'text-blue-700 font-bold' : ''}`} onClick={() => handleClick('DMT VAPE CARTRIDGES')}>DMT VAPE CARTRIDGES (11)</Link>
            <Link href="/Ecstacy(6)" className={`hover:text-blue-600 p-2 rounded ${isActive('/Ecstacy', 'Ecstacy') ? 'text-blue-700 font-bold' : ''}`} onClick={() => handleClick('Ecstacy')}>Ecstacy (6)</Link>
            <Link href="/LSD(6)" className={`hover:text-blue-600 p-2 rounded ${isActive('/LSD', 'LSD') ? 'text-blue-700 font-bold' : ''}`} onClick={() => handleClick('LSD')}>LSD (6)</Link>
            <Link href="/MagicMushrooms(10)" className={`hover:text-blue-600 p-2 rounded ${isActive('/MagicMushrooms', 'Magic Mushrooms') ? 'text-blue-700 font-bold' : ''}`} onClick={() => handleClick('Magic Mushrooms')}>Magic Mushrooms (10)</Link>
            <Link href="/Mushroom-chocolate-guide" className={`hover:text-blue-600 p-2 rounded ${isActive('/Mushroom-chocolate-guide', 'MUSHROOM CHOCOLATE BARS') ? 'text-blue-700 font-bold' : ''}`} onClick={() => handleClick('MUSHROOM CHOCOLATE BARS')}>MUSHROOM CHOCOLATE BARS (6)</Link>
            <Link href="/Painmedication" className={`hover:text-blue-600 p-2 rounded ${isActive('/Painmedication', 'Pain medication') ? 'text-blue-700 font-bold' : ''}`} onClick={() => handleClick('Pain medication')}>Pain medication (4)</Link>
            <Link href="/ResearchChemicals(7)" className={`hover:text-blue-600 p-2 rounded ${isActive('/ResearchChemicals', 'Research Chemicals') ? 'text-blue-700 font-bold' : ''}`} onClick={() => handleClick('Research Chemicals')}>Research Chemicals (7)</Link>
            <a href="#" className="text-blue-700 p-2 rounded">Show more</a>
          </nav>
        </aside>

        {/* Main content area */}
        <div className="flex-1 md:ml-1 min-h-screen flex flex-col">
          <main className="p-2">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
