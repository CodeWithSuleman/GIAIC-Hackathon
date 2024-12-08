import Link from "next/link";
import { FaSearch, FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import { IoIosPhonePortrait, IoIosMailUnread } from "react-icons/io";
import { RiMessage2Fill } from "react-icons/ri";
import { BsBalloonFill } from "react-icons/bs";

export default function HelpPage() {
  return (
    <div className="container mx-auto max-w-screen-lg p-4 md:p-0">
      {/* Search Section */}
      <div className="text-center mb-10">
        <h1 className="text-[22px] md:text-[32px] font-semibold mb-6">GET HELP</h1>
        <div className="relative inline-block w-full sm:w-[70%] md:w-[40%]">
          <input
            type="text"
            placeholder="Search"
            className="border w-full border-gray-300 rounded pl-4 pr-10 py-2 focus:outline-none"
          />
          <FaSearch className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500" />
        </div>
      </div>

      {/* Content Layout */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-10">
        {/* Left Section */}
        <div className="w-full ">
          <h2 className="text-[22px] md:text-[28px] font-semibold mb-4">
            WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
          </h2>
          <p>
            We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:
          </p>
          <ul className="list-disc ml-6 my-4">
            <li>Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</li>
            <li>
              If you enter your PAN information at checkout, youll be able to pay for your order with PayTM or a local credit or debit card.
            </li>
            <li>Apple Pay</li>
          </ul>
          <p className="mb-6">
            Nike Members can store multiple debit or credit cards in their profile for faster checkout. If youre not already a Member,{" "}
            <Link href="/join-us" className="underline text-blue-600 hover:text-blue-800">
              join us today.
            </Link>
          </p>
          <div className="flex flex-wrap gap-4 mb-10">
            <Link href="/join-us">
              <button className="bg-black text-white text-sm px-6 py-3 rounded-full hover:bg-gray-800 transition">
                Join Us
              </button>
            </Link>
            <Link href="/">
              <button className="bg-black text-white text-sm px-6 py-3 rounded-full hover:bg-gray-800 transition">
                Shop Nike
              </button>
            </Link>
          </div>

          {/* FAQ Section */}
          <h3 className="font-semibold text-[20px] mb-4">FAQs</h3>
          <div>
            <p className="mb-2">
              <strong>Does my card need international purchases enabled?</strong>
            </p>
            <p className="text-gray-700 mb-4">
              Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases
              need to be enabled.
            </p>

            <p className="mb-2">
              <strong>Can I pay for my order with multiple methods?</strong>
            </p>
            <p className="text-gray-700 mb-4">
              No, payment for Nike orders cant be split between multiple payment methods.
            </p>

            <p className="mb-2">
              <strong>What payment method is accepted for SNKRS orders?</strong>
            </p>
            <p className="text-gray-700 mb-4">
              You can use any accepted credit card to pay for your SNKRS order.
            </p>

            <p className="mb-2">
              <strong>Why dont I see Apple Pay as an option?</strong>
            </p>
            <p className="text-gray-700 mb-4">
              To see Apple Pay as an option in the Nike App or on Nike.com, youll need to use a compatible Apple device running the latest OS, be signed in
              to your iCloud account and have a supported card in your Wallet. Additionally, youll need to use Safari to use Apple Pay on Nike.com.
            </p>
          </div>

          {/* Feedback Section */}
          <div className="mt-10">
            <h4 className="text-[16px] font-semibold mb-4">Was this answer helpful?</h4>
            <div className="flex flex-wrap gap-4 mb-6">
              <button className="flex items-center gap-1 text-sm text-gray-700 hover:text-black transition">
                <span className="text-xl">
                  <FaThumbsUp />
                </span>{" "}
                Yes
              </button>
              <button className="flex items-center gap-1 text-sm text-gray-700 hover:text-black transition">
                <span className="text-xl">
                  <FaThumbsDown />
                </span>{" "}
                No
              </button>
            </div>
            <h5 className="text-[14px] font-semibold mb-2">Related</h5>
            <ul className="list-disc pl-5 text-gray-700">
              <li>
                <Link href="/delivery-options" className="hover:underline">
                  WHAT ARE NIKES DELIVERY OPTIONS?
                </Link>
              </li>
              <li>
                <Link href="/free-delivery" className="hover:underline">
                  HOW DO I GET FREE DELIVERY ON NIKE ORDERS?
                </Link>
                <br />
              </li>
            </ul>
            <br />
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/3 flex flex-col items-center">
          <div className="p-6 rounded-lg w-full text-center border border-gray-200">
            <h2 className="text-lg font-semibold mb-6">CONTACT US</h2>

            {/* Phone Icon */}
            <div className="flex flex-col items-center gap-2 mb-6">
              <IoIosPhonePortrait className="w-12 h-12 md:w-16 md:h-16" />
              <p>
                <strong>000 800 919 0566</strong>
                <br />
                Products & Orders: 24 hours a day, 7 days a week
              </p>
            </div>

            {/* Message Icon */}
            <div className="flex flex-col items-center gap-2 mb-6">
              <RiMessage2Fill className="w-12 h-12 md:w-16 md:h-16" />
              <p>
                24 hours a day, <br /> 7 days a week
              </p>
            </div>

            {/* Mail Icon */}
            <div className="flex flex-col items-center gap-2 mb-6">
              <IoIosMailUnread className="w-12 h-12 md:w-16 md:h-16" />
              <p>
                Well reply within <br />
                five business days
              </p>
            </div>

            {/* Store Icon */}
            <div className="flex flex-col items-center gap-2">
              <BsBalloonFill className="w-12 h-12 md:w-16 md:h-16" />
              <h3>Store Locator</h3>
              <p>Find Nike retail stores near you</p>
              <br />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
