import Image from "next/legacy/image"; // Importing Next.js optimized Image component
import FeaturedImage from '@/app/assets/featured-image.png'; // Importing the featured image

export default function Featured() {
    return (
        <div>
            {/* Section title */}
            <p className="md:text-[15px] sm:text-[13px] text-[11px] font-medium flex justify-start items-start px-4 pb-2">
                Featured
            </p>

            {/* Featured Image Container */}
            <div className="flex justify-center items-center px-4 py-0 pb-4">
                <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px] max-w-[1344px]">
                    {/* Featured Image */}
                    <Image
                        src={FeaturedImage} // Source of the featured image
                        alt="Banner" // Alt text for accessibility
                        layout="fill" // Use the full width and height of the container
                        objectFit="cover" // Ensure the image covers the container without distortion
                        className="rounded-lg" // Add rounded corners to the image
                    />
                </div>
            </div>

            {/* Text and Button Section */}
            <div className='flex flex-col'>
                {/* Title */}
                <h1 className='text-center md:text-[56px] sm:text-[40px] text-[30px]'>
                    STEP INTO WHAT FEELS GOOD
                </h1>

                {/* Subtitle */}
                <p className='text-center'>
                    Cause everyone should know the feeling of running in that perfect pair.
                </p>

                {/* Button Section */}
                <div className="flex flex-wrap justify-center gap-4 mt-4">
                    {/* Find your Store Button */}
                    <button className="bg-black text-white text-sm md:text-base px-4 py-2 md:px-6 md:py-3 rounded-full shadow-md hover:bg-gray-800 transition">
                        Find your Store
                    </button>
                </div>
            </div>
        </div>
    );
}
