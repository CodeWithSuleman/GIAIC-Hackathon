import Product4 from '@/app/assets/product4.png'
import Product1 from '@/app/assets/product1.png'
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import Image from "next/legacy/image"
import Link from 'next/link';
export default function Cart() {
  return (
    <div className="container mx-auto p-4">
      <div className='bg-primaryColor max-w-[780px] h-[70px] '>
        <div className='md:m-5 mx-1 my-2'>
          <h1>Free Delivery</h1>
          <p className='text-[14px]'>Applies to orders of ₹ 14 000.00 or more. <span className='underline'>View details</span></p>

        </div>
      </div>
      {/* Bag and Summary Container */}
      <div className="flex flex-col md:flex-row gap-4">

        {/* Bag Section */}
        <div className="flex-1 bg-white shadow-md p-4">
          <h2 className="text-xl font-bold mb-4">Bag</h2>

          {/* Product Card */}
          <div className="border-b pb-4 mb-4">
            <div className="flex items-center gap-5">
              {/* Product Image */}
              <Image
                src={Product1}
                alt="Product"
                className="w-[150px] h-[150px] object-cover"
              />
              {/* Product Details */}
              <div>

                <div className='flex justify-evenly6566'>
                  <h3 className="font-medium">Nike Dri-FIT ADV TechKnit Ultra</h3>
                  <p className="">MRP: ₹ 3,895.00</p>
                </div>
                <p className="text-gray-600 text-sm">Mens Short-Sleeve Running Top</p>
                <p className="text-gray-600 text-sm">Size: L | Quantity: 1</p>

                <div className="flex gap-3 mt-2">
                  {/* Actions */}
                  <button ><RiDeleteBin6Line className='w-[24px] h-[24px]' /></button>
                  <button ><FaRegHeart className='w-[24px] h-[24px]' /></button>
                </div>
              </div>
            </div>


          </div>

          {/* Second Product */}
          <div className="border-b pb-4 mb-4">
            <div className="flex items-center gap-5">
              <Image
                src={Product4}
                alt="Product"
                className="w-[150px] h-[150px] object-cover"
              />
              <div>
                <div className='flex justify-evenly'>
                  <h3 className="font-medium">Nike Air Max 97 SE</h3>
                  <p>MRP: ₹ 16,995.00</p>
                </div>
                <p className="text-gray-600 text-sm">Mens Shoes</p>
                <p className="text-gray-600 text-sm">Size: 8 | Quantity: 1</p>

                <div className="flex gap-3 mt-2">
                  {/* Actions */}
                  <button ><RiDeleteBin6Line className='w-[24px] h-[24px]' /></button>
                  <button ><FaRegHeart className='w-[24px] h-[24px]' /></button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <div className="w-full md:w-1/3 bg-white shadow-md p-4">
          <h2 className="text-xl font-bold mb-4">Summary</h2>
          <div className="flex justify-between">
            <p>Subtotal</p>
            <p>₹ 20,890.00</p>
          </div>
          <div className="flex justify-between">
            <p>Estimated Delivery & Handling</p>
            <p>Free</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between font-bold text-lg">
            <p>Total</p>
            <p>₹ 20,890.00</p>
          </div>
          <Link href='/checkout-page'>
          <button className="bg-black text-white w-full py-2 mt-4 rounded-lg">
            Member Checkout
          </button></Link>
        </div>
      </div>

      {/* Favourites Section */}
      <div className="mt-8 bg-white shadow-md p-4">
        <h2 className="text-xl font-bold mb-4">Favourites</h2>
        <p className="text-gray-600">There are no items saved to your favourites.</p>
      </div>
    </div>

  )
}