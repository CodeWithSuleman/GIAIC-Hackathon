"use client";

import { Products } from "@/types/products";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { addToCart } from "@/app/actions/actions";
import Swal from "sweetalert2"
import { useRouter } from "next/navigation";
interface ProductPageProps {
  product: Products;
}

export default function ProductPage({ product }: ProductPageProps) {
  const router = useRouter()
  const handleAddToCart = (e: React.MouseEvent, product: Products) => {
    e.preventDefault();
    Swal.fire({
        position:"top-right",
        icon:"success",
        title:`${product.productName} added to cart`,
        showConfirmButton:false,
        timer:3000
    })
    addToCart(product);

    router.push("/cart-item")
  
  };

  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center px-4 sm:px-6 lg:px-12 py-8">
      {/* Product Image */}
      <div className="w-full max-w-sm">
        {product?.image && (
          <Image
            src={urlFor(product.image).url()}
            alt={product?.productName}
            width={200}
            height={200}
            className="w-full h-auto object-contain"
          />
        )}
      </div>

      {/* Product Details */}
      <div className="mt-6 lg:mt-0 lg:ml-10 text-center lg:text-left">
        <h1 className="text-2xl font-bold mb-4">{product?.productName}</h1>
        <p className="text-gray-600 mb-6">{product?.description}</p>
        <p className="text-lg font-semibold mb-6">Rs {product?.price}</p>
        <Link href="/cart-item">
          <button
            className="px-6 py-3 bg-black text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-all"
            onClick={(e) => handleAddToCart(e, product)}
          >
            Add to Cart
          </button>
        </Link>
      </div>
    </div>
  );
}
