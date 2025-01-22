import Image from "next/legacy/image"; // Importing Next.js Image component for optimized image handling
import HeroBanner from '@/app/assets/hero-image.png'; // Importing hero banner image
import Link from 'next/link';

export default function HeroSection() {
  return (
    <div className='py-3'>
      {/* Top Banner Section */}
      <div className="bg-primaryColor text-center py-3">
        {/* Greeting Text */}
        <p className="text-xs md:text-sm font-medium">Hello Nike App</p>
        <div>
          {/* App Download Promotion Text */}
          <p className="text-[10px] md:text-xs">
            Download the app to access everything Nike.{' '}
            <b>Get Your Great</b>
          </p>
        </div>
      </div>

      {/* Hero Image Section */}
      <div className="flex justify-center items-center px-6 py-2 pb-4">
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px] max-w-[1344px]">
          {/* Hero Banner Image */}
          <Image
            src={HeroBanner} // Image source
            alt="Banner" // Alternative text for accessibility
            layout="fill" // Makes the image fill the container
            objectFit="cover" // Ensures the image covers the container proportionally
            className="rounded-lg" // Adds rounded corners to the image
          />
        </div>
      </div>

      {/* Hero Text Section */}
      <div className='flex flex-col'>
        {/* Subheading */}
        <p className='text-center md:text-[15px] sm:text-[13px] text-[11px] font-medium'>First Look</p>
        {/* Main Heading */}
        <h1 className='text-center md:text-[56px] sm:text-[40px] text-[30px]'>Nike Air Max Pulse</h1>
        {/* Description */}
        <p className='text-center'>
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse<br />
          —designed to push you past your limits and help you go to the max.
        </p>
        
        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          {/* Notify Me Button */}
          <Link href={""}>
           <button className="bg-black text-white text-sm md:text-base px-4 py-2 md:px-6 md:py-3 rounded-full shadow-md hover:bg-gray-800 transition">
            Notify Me
          </button></Link>

          {/* Shop Air Max Button */}
          <Link href="/all-products">
          <button className="bg-black text-white text-sm md:text-base px-4 py-2 md:px-6 md:py-3 rounded-full shadow-md hover:bg-gray-800 transition">
            Shop Air Max
          </button></Link>
        </div>
      </div>
    </div>
  );
}
