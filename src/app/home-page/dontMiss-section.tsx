import Image from "next/image";
import DontMissBanner from '@/app/assets/dontmiss-section.png';
import Link from "next/link";

export default function DontMiss() {
    return (
        <div>
            {/* Section Title */}
            <p className="md:text-[15px] sm:text-[13px] text-[11px] font-medium flex justify-start items-start px-4 pb-2">
                Dont Miss
            </p>

            {/* Banner Image */}
            <div className="flex justify-center items-center px-4 py-0 pb-4">
                <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px] max-w-[1344px]">
                    <Image
                        src={DontMissBanner} // Image source
                        alt="Banner" // Alt text for accessibility
                        layout="fill" // Makes the image fill its container
                        objectFit="cover" // Ensures the image scales properly
                        className="rounded-lg" // Adds rounded corners to the image
                    />
                </div>
            </div>

            {/* Flight Essentials Section */}
            <div className='flex flex-col'>
                {/* Heading */}
                <h1 className='text-center md:text-[52px] sm:text-[40px] text-[30px]'>
                    FLIGHT ESSENTIALS
                </h1>

                {/* Subheading */}
                <p className='text-center'>
                    Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.
                </p>

                {/* Shop Button Section */}
                <div className="flex flex-wrap justify-center gap-4 mt-4">
                    {/* Shop Button */}
                   <Link href="/all-products"> <button className="bg-black text-white text-sm md:text-base px-4 py-2 md:px-6 md:py-3 rounded-full shadow-md hover:bg-gray-800 transition">
                        Shop
                    </button></Link>
                </div>
            </div>
        </div>
    );
}
