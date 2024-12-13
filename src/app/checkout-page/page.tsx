import Image from "next/image";
import { BsChatRightText } from "react-icons/bs";
import { IoLockClosedOutline } from "react-icons/io5";
import Product2 from "@/app/assets/product2.png";
import Product1 from "@/app/assets/product1.png";

export default function Checkout() {
  return (
    <div>
      {/* Header Section */}
      <header className="bg-white shadow py-4">
        <div className="container mx-auto flex items-center justify-between px-6 md:px-12 lg:px-24">
          {/* Logo */}
          <div>
            <Image src={Product2} alt="logo image" width={90} height={40} />
          </div>

          {/* Contact Info */}
          <div className="hidden md:flex items-center space-x-4">
            <h5 className="text-gray-700 text-sm">000 800 100 9538</h5>
            <BsChatRightText className="text-gray-700 text-xl cursor-pointer" />
            <IoLockClosedOutline className="text-gray-700 text-xl cursor-pointer" />
          </div>
        </div>
      </header>

      {/* Checkout Section */}
      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-10">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Left Section */}
          <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
            <h1 className="text-lg font-semibold mb-4">How would you like to get your order?</h1>
            <p className="text-sm leading-6 text-gray-600 mb-4">
              Customs regulation for India requires a copy of the recipients KYC.
              The address on the KYC needs to match the shipping address. Our
              courier will contact you via SMS/email to obtain a copy of your KYC.
              The KYC will be stored securely and used solely for the purpose of clearing customs.
              <a href="#" className="text-blue-600 hover:underline">Learn More</a>
            </p>

            {/* Delivery Method */}
            <div className="mb-6">
              <button className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-700">
                Deliver It
              </button>
            </div>

            {/* Address Form */}
            <form className="space-y-3">
              <h2 className="text-sm font-semibold mb-2">Enter your name and address:</h2>
              <input
                type="text"
                placeholder="First Name"
                className="border rounded px-3 py-2 w-full border-gray-400"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border rounded px-3 py-2 w-full border-gray-400"
              />
              <input
                type="text"
                placeholder="Address Line 1"
                className="border rounded px-3 py-2 w-full  border-gray-400"
              />
              <input
                type="text"
                placeholder="Address Line 2 (Optional)"
                className="border rounded px-3 py-2 w-full  border-gray-400"
              />
              <input
                type="text"
                placeholder="City"
                className="border rounded px-3 py-2 w-full  border-gray-400"
              />
              <input
                type="text"
                placeholder="Postal Code"
                className="border rounded px-3 py-2 w-full  border-gray-400"
              />
              <input
                type="text"
                placeholder="Country"
                className="border rounded px-3 py-2 w-full  border-gray-400"
              />
              <div className="mb-6">
              <button className="w-full bg-gray-400 text-white py-2 px-4 rounded hover:bg-gray-700 duration-500">
                Continue
              </button>
            </div>
            </form>
          </div>

          {/* Right Section */}
          <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            <div className="space-y-2 text-sm text-gray-700 mb-4">
              <p className="flex justify-between">
                Subtotal: <span>₹20,890.00</span>
              </p>
              <p className="flex justify-between">
                Delivery/Shipping: <span>Free</span>
              </p>
              <p className="flex justify-between font-semibold">
                Total: <span>₹20,890.00</span>
              </p>
            </div>
            <div className="mb-4 text-sm text-gray-600">Arrives Mon, 27 Mar - Wed, 12 Apr</div>

            {/* Order Items */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Image src={Product1} alt="Product2 Dri-FIT" width={60} height={60} className="rounded-md" />
                <div>
                  <p className="text-sm font-semibold">Product2 Dri-FIT ADV TechKnit Ultra Mens Short-Sleeve Running Top</p>
                  <p className="text-sm text-gray-600">₹3,895.00</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Image src={Product1} alt="Product2 Air Max" width={60} height={60} className="rounded-md" />
                <div>
                  <p className="text-sm font-semibold">Product2 Air Max 97 SE Mens Shoes</p>
                  <p className="text-sm text-gray-600">₹16,995.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
