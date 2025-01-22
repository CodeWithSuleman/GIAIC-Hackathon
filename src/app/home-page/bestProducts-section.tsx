"use client";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Importing icons for navigation
import Image from "next/image"; // Importing Next.js optimized Image component
import Link from "next/link";
import { useEffect, useState } from "react";
import { Products } from "../../../types/products";
import { client } from "@/sanity/lib/client";
import { fourProducts } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

export default function BestProducts() {
  const [product, setProduct] = useState<Products[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const fetchedProduct: Products[] = await client.fetch(fourProducts);
      setProduct(fetchedProduct);
    }
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl md:text-2xl font-bold">Best of Air Max</h2>

        {/* Navigation Buttons */}
        <div className="flex gap-2">
          <button className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300">
            <FaChevronLeft className="text-gray-600 text-lg" />
          </button>
          <button className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300">
            <FaChevronRight className="text-gray-600 text-lg" />
          </button>
        </div>
      </div>

      {/* Product Cards Section */}
      <Link href="/all-products">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {product.map((product) => (
            <div
              key={product._id}
              className="bg-white shadow rounded-lg p-4 hover:shadow-md transition-all"
            >
              {/* Product Image */}
              <div className="w-full h-48 mb-4 flex items-center justify-center">
                {product.image && (
                  <Image
                    src={urlFor(product.image).url()}
                    alt={product.productName}
                    width={200}
                    height={200}
                    className="object-contain"
                    priority
                  />
                )}
              </div>

              {/* Product Details */}
              <div className="text-center">
                <p className="text-lg font-semibold">{product.productName}</p>
                <p className="text-gray-700 text-sm">Rs {product.price}</p>
                <p className="text-gray-500 text-xs">{product.category}</p>
              </div>
            </div>
          ))}
        </div>
      </Link>
    </div>
  );
}
