"use client"

import { FaHeart, FaShoppingBag, FaSearch } from 'react-icons/fa'; // Importing icons from React Icons
import Frame from '@/app/assets/Frame.png'; // Importing a frame image asset
import Image from "next/legacy/image"; // Importing Image component from Next.js for optimized image rendering
import Link from 'next/link'; // Importing Link component from Next.js for navigation
import Logo from '@/app/assets/logo.png'; // Importing the logo image asset
import { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
// import { Products } from '../../../types/products';



interface Product {
  _id: string;
  productName: string;
  category: string;
}

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await client.fetch(
        groq`*[_type == "product"]{ 
          _id, 
          productName, 
          category 
        }`
      );
      setData(result);
    };

    fetchData();
  }, []);

  const handleSearch = (event: { target: { value: string; }; })=>{
    const query = event.target.value.toLowerCase();
    setSearchQuery(query)
    
    const filterResults = data.filter((item)=>item.productName.toLowerCase().includes(query));
    setSearchResults(filterResults)
  }


  return (
    <header className=''>
      {/* Top bar */}
      <div className="bg-primaryColor flex justify-between items-center px-6 py-2 md:text-[11px] sm:text-[9px] text-[8px] font-medium text-gray-500">
        {/* Left section: Frame icon */}
        <Image src={Frame} alt={''} width={25} height={25} />

        {/* Right section: Top navigation links */}
        <div className="flex md:gap-4 sm:gap-3 gap-2">
          <Link href="#" className="hover:text-gray-800">Find Link Store</Link>
          <Link href="/help" className="hover:text-gray-800">Help</Link>
          <Link href="/join-us" className="hover:text-gray-800">Join Us</Link>
          <Link href="/signin" className="hover:text-gray-800">Sign In</Link>
        </div>
      </div>

      {/* Main navigation */}
      <div className="flex flex-wrap justify-between items-center px-6 py-4">
        {/* Left section: Logo */}
        <div className="flex items-center md:w-[68px] sm:w-[50px] w-[20px]">
          <Link href="/">
          <Image
            src={Logo}
            alt="Nike Logo"
            className="md:w-[68px] sm:w-[50px] w-[20px]" // Responsive logo size
          /></Link>
        </div>

        {/* Center section: Navigation links */}
        <nav className="flex gap-4 md:gap-6 text-gray-700 font-medium md:text-[16px] sm:text-[14px] text-[10px]">
          <Link href="#" className="hover:text-black whitespace-nowrap">New & Featured</Link>
          <Link href="#" className="hover:text-black whitespace-nowrap">Men</Link>
          <Link href="#" className="hover:text-black whitespace-nowrap">Women</Link>
          <Link href="#" className="hover:text-black whitespace-nowrap">Kids</Link>
          <Link href="#" className="hover:text-black whitespace-nowrap">Sale</Link>
          <Link href="#" className="hover:text-black whitespace-nowrap">SNKRS</Link>
        </nav>

        {/* Right section: Search bar, wishlist, and cart */}
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          {/* Search bar (visible on larger screens) */}
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-300 rounded-full pl-4 pr-10 py-2 text-sm focus:outline-none"
              value={searchQuery}
              onChange={handleSearch}
            />
            <FaSearch className="absolute right-3 top-2.5 text-gray-500" /> {/* Search icon */}
            {searchQuery && (
            <div className="absolute bg-white border border-gray-300 rounded-lg shadow-md mt-2 w-full">
              {searchResults.length > 0 ? (
                searchResults.map((item) => (
                  <div key={item._id} className="p-2 hover:bg-gray-100 cursor-pointer">
                    {item.productName} - {item.category}
                  </div>
                ))
              ) : (
                <p className="p-2 text-gray-500">No results found.</p>
              )}
            </div>
          )}
          </div>
          {/* Wishlist icon */}
          <FaHeart className="text-gray-700 md:w-[24px] md:h-[24px] sm:w-[20px] sm:h-[20px] w-[16px] h-[16px] cursor-pointer hover:text-black" />
          {/* Cart icon */}
          <FaShoppingBag className="text-gray-700 md:w-[24px] md:h-[24px] sm:w-[20px] sm:h-[20px] w-[16px] h-[16px] cursor-pointer hover:text-black" />
        </div>
      </div>

      {/* Mobile search bar */}
      <div className="block md:hidden px-6 mt-2">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded-full pl-4 pr-10 py-2 text-sm focus:outline-none w-full"
          />
          <FaSearch className="absolute right-3 top-2.5 text-gray-500" /> {/* Search icon */}
        </div>
      </div>
    </header>
  );
};
