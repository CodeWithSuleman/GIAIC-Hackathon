import Image from 'next/image';
import Shoe1 from '@/app/assets/shoe1.png';
import Link from 'next/link';

export default function ProductDetails() {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center px-4 sm:px-6 lg:px-12 py-8">
      {/* Product Image */}
      <div className="w-full max-w-sm">
        <Image
          src={Shoe1}
          alt="Nike Air Force 1"
          className="w-full h-auto object-contain"
          width={500}
          height={500}
        />
      </div>

      {/* Product Details */}
      <div className="mt-6 lg:mt-0 lg:ml-10 text-center lg:text-left mr-9">
        <h1 className="text-2xl font-bold mb-4">Nike Air Force 1 PLT.AF.ORM</h1>
        <p className="text-gray-600 mb-6">
          Turn style on its head with this crafted take on the Air Jordan 1 Mid.
          Its inside out inspired construction, including unique layering and
          exposed foam accents, ups the ante on this timeless Jordan Brand
          silhouette. Details like the deco stitching on the Swoosh add coveted
          appeal, while the unexpected shading, rich mixture of materials and
          aged midsole aesthetic give this release an artisan finish.
        </p>
        <p className="text-xl font-semibold mb-6">₹ 8,695.00</p>

        {/* Add to Cart Button */}
       <Link href="/cart">
        <button className="px-6 py-3 bg-black text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-all">
          Add to Cart
        </button></Link>
      </div>
    </div>
  );
}
