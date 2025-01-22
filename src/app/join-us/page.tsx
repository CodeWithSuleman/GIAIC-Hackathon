import Image from "next/legacy/image";
import Logo from '@/app/assets/logo.png';
import Link from "next/link";

export default function JoinUs() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-white px-4">
      {/* Logo */}
      <div className="mb-6">
        <Image src={Logo} alt="Nike Logo" width={50} height={50} />
      </div>

      {/* Title */}
      <h1 className="text-center text-[22px] md:text-[32px] sm:text[28px] font-semibold mb-6">
        Become a Nike Member
      </h1>

      <div>
                <p className="text-gray-400 text-[15px] mb-4 text-center">
                Create your Nike Member profile and get <br /> first access to the very best of Nike <br />products, inspiration and community.
                </p>
            </div>

      {/* Form */}
      <div className="w-full max-w-sm">
        {/* Email Input */}
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* First Name Input */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter First Name"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Last Name Input */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter Last Name"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
        {/* DOB Input */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter Date of Birth"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
        
        <div className="flex flex-col items-center space-y-4 text-gray-400 py-2">
      {/* Dropdown */}
      <select
        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
      >
        <option value="India" className="">India</option>
        <option value="USA">USA</option>
        <option value="UK">UK</option>
        <option value="Australia">Australia</option>
      </select>

      {/* Gender Selection */}
      <div className="flex space-x-4">
        <button className="w-36 px-4 py-2 border border-gray-300 rounded text-center hover:bg-gray-100 focus:ring-2 focus:ring-black">
          Male
        </button>
        <button className="w-36 px-4 py-2 border border-gray-300 rounded text-center hover:bg-gray-100 focus:ring-2 focus:ring-black">
          Female
        </button>
      </div>
    </div>

        {/* Keep Me Signed In and Forgot Password */}
        <div className="flex justify-between items-center mb-4 text-sm">
          <label className="flex items-center text-gray-400">
            <input type="checkbox" className="mr-2 " />
            Sign up for emails to get updates from Nike on <br /> products, offers and your Member benefits
          </label>
        </div>
            <div>
                <p className="text-gray-400 text-[15px] mb-2 text-center">
                By creating an account, you agree to Nikes <span className="underline">Privacy Policy</span> and <span className="underline">Terms of Use</span>.
                </p>
            </div>
        {/* Sign In Button */}
        <Link href="">
        <button className="w-full bg-black text-white py-2 mb-3 rounded hover:bg-gray-800">
          Join Us
        </button>
        </Link>
      
      </div>
    </div>
  );
}
