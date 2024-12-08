import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Importing icons for navigation
import Image from "next/image"; // Importing Next.js optimized Image component
import Shoe1 from "@/app/assets/shoe1.png"; // Importing product image 1
import Shoe2 from "@/app/assets/shoe2.png"; // Importing product image 2
import Link from "next/link";

export default function BestProducts() {
  // Product data array
  const products = [
    {
      id: 1,
      name: "Nike Air Max Pulse",
      price: "₹ 13,995",
      category: "Women's Shoe",
      image: Shoe1,
    },
    {
      id: 2,
      name: "Nike Air Max Pulse",
      price: "₹ 13,995",
      category: "Women's Shoe",
      image: Shoe1,
    },
    {
      id: 3,
      name: "Nike Air Max Pulse",
      price: "₹ 13,995",
      category: "Women's Shoe",
      image: Shoe2,
    },
  ];

  return (
    <div>
      {/* Header Section with Title and Navigation Buttons */}
      <div className="flex justify-between md:px-[45px] sm:px-[38px] px-[20px] py-[2vh]">
        <div>
          {/* Section Title */}
          <p className="md:text-[22px] sm:text-[20px] text-[17px] font-medium">
            Best of Air Max
          </p>
        </div>
        <div className="flex gap-4 mt-0">
          {/* Left Arrow Button */}
          <button className="w-10 h-10 bg-gray-200 flex items-center justify-center rounded-full hover:bg-gray-300 transition">
            <FaChevronLeft className="text-gray-600 text-sm md:text-base" />
          </button>

          {/* Right Arrow Button */}
          <button className="w-10 h-10 bg-gray-200 flex items-center justify-center rounded-full hover:bg-gray-300 transition">
            <FaChevronRight className="text-gray-600 text-sm md:text-base" />
          </button>
        </div>
      </div>

      {/* Product Cards Section */}
      <Link href='/all-products'>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-8 px-6 md:px-12 lg:px-16 py-8">
        {products.map((product) => (
          <div
            key={product.id} // Unique key for each product
            className="flex flex-col items-center w-full max-w-[400px] mx-auto"
          >
            {/* Product Image */}
            <div className="w-full h-auto mb-4">
              <Image
                src={product.image} // Product image source
                alt={product.name} // Alt text for accessibility
                className="w-full h-full object-cover" // Image styling
                priority // Prioritize image loading
              />
            </div>

            {/* Product Info Section */}
            <div className="w-full">
              {/* Product Name and Price */}
              <div className="flex justify-between text-sm md:text-base font-medium">
                <p>{product.name}</p> {/* Product name */}
                <p>{product.price}</p> {/* Product price */}
              </div>
              {/* Product Category */}
              <p className="text-gray-400 text-xs md:text-sm">
                {product.category}
              </p>
            </div>
          </div>
        ))}
      </div></Link>
    </div>
  );
}
