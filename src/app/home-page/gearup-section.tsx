import Image from "next/legacy/image"; // Importing Next.js Image component for optimized image rendering
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Importing Chevron icons from react-icons for navigation
import Product1 from '@/app/assets/product1.png'; // Importing product images
import Product2 from '@/app/assets/product2.png';
import Product3 from '@/app/assets/product3.png';
import Product4 from '@/app/assets/product4.png';
import Link from "next/link";

export default function GearUp() {
  // Array containing men's product details
  const mensProducts = [
    {
      id: 1,
      name: "Nike Dri-FIT ADV TechKnit Ultra",
      category: "Men's Short-Sleeve Running Top",
      price: "₹ 3,895",
      image: Product1,
    },
    {
      id: 2,
      name: "Nike Dri-FIT Challenger",
      category: "Men's 18cm (approx.) 2-in-1 Versatile Shorts",
      price: "₹ 2,495",
      image: Product2,
    },
  ];

  // Array containing women's product details
  const womensProducts = [
    {
      id: 3,
      name: "Nike Dri-FIT ADV Run Division",
      category: "Women's Long-Sleeve Running Top",
      price: "₹ 5,295",
      image: Product3,
    },
    {
      id: 4,
      name: "Nike Fast",
      category: "Women's Mid-Rise 7/8 Running Leggings with Pockets",
      price: "₹ 3,795",
      image: Product4,
    },
  ];

  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-20 py-12 space-y-12">
      {/* Section Title */}
      <h2 className="text-[18px] lg:text-[23px] font-medium mb-0">Gear Up</h2>

      {/* Main Container for Men's and Women's Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-16 lg:gap-x-8">
        {/* Men's Section */}
        <Link href="/all-products"> <div>
          {/* Section Header with Navigation Buttons */}
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg md:text-xl font-semibold">Shop Mens</h3>
            <div className="flex items-center gap-2">
              {/* Left Navigation Button */}
              <button className="w-8 h-8 md:w-10 md:h-10 bg-gray-200 flex items-center justify-center rounded-full hover:bg-gray-300 transition">
                <FaChevronLeft className="text-gray-600 text-sm md:text-base" />
              </button>
              {/* Right Navigation Button */}
              <button className="w-8 h-8 md:w-10 md:h-10 bg-gray-200 flex items-center justify-center rounded-full hover:bg-gray-300 transition">
                <FaChevronRight className="text-gray-600 text-sm md:text-base" />
              </button>
            </div>
          </div>
          {/* Product Grid for Mens Products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-12">
            {mensProducts.map((product) => (
              <div key={product.id} className="space-y-4 text-center">
                {/* Product Image */}
                <div className="w-[250px] h-[250px] mx-auto">
                  <Image
                    src={product.image} // Image source
                    alt={product.name} // Alternative text for accessibility
                    className="w-full h-full object-contain" // Ensures image is contained
                    priority // Loads the image with higher priority
                  />
                </div>
                {/* Product Information */}
                <div className="text-left space-y-1">
                  <h4 className="text-sm md:text-base font-medium leading-tight">
                    {product.name} {/* Product Name */}
                  </h4>
                  <p className="text-gray-500 text-xs md:text-sm leading-tight">
                    {product.category} {/* Product Category */}
                  </p>
                  <p className="text-lg font-bold">{product.price} {/* Product Price */}</p>
                </div>
              </div>
            ))}
          </div>
        </div></Link>

        {/* Women's Section */}
        <Link href="/all-products"><div>
          {/* Section Header with Navigation Buttons */}
           <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg md:text-xl font-semibold">Shop Womens</h3>
            <div className="flex items-center gap-2">
              {/* Left Navigation Button */}
              <button className="w-8 h-8 md:w-10 md:h-10 bg-gray-200 flex items-center justify-center rounded-full hover:bg-gray-300 transition">
                <FaChevronLeft className="text-gray-600 text-sm md:text-base" />
              </button>
              {/* Right Navigation Button */}
              <button className="w-8 h-8 md:w-10 md:h-10 bg-gray-200 flex items-center justify-center rounded-full hover:bg-gray-300 transition">
                <FaChevronRight className="text-gray-600 text-sm md:text-base" />
              </button>
            </div>
          </div>
          {/* Product Grid for Women's Products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-12">
            {womensProducts.map((product) => (
              <div key={product.id} className="space-y-4 text-center">
                {/* Product Image */}
                <div className="w-[250px] h-[250px] mx-auto">
                  <Image
                    src={product.image} // Image source
                    alt={product.name} // Alternative text for accessibility
                    className="w-full h-full object-contain" // Ensures image is contained
                    priority // Loads the image with higher priority
                  />
                </div>
                {/* Product Information */}
                <div className="text-left space-y-1">
                  <h4 className="text-sm md:text-base font-medium leading-tight">
                    {product.name} {/* Product Name */}
                  </h4>
                  <p className="text-gray-500 text-xs md:text-sm leading-tight">
                    {product.category} {/* Product Category */}
                  </p>
                  <p className="text-lg font-bold">{product.price} {/* Product Price */}</p>
                </div>
              </div>
            ))}
          </div>
        </div></Link>
      </div>
    </div>
  );
}
