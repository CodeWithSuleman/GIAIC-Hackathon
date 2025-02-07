import Image from "next/legacy/image";
import Logo from '@/app/assets/logo.png';
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function LoginPage() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-white px-4">
      {/* Logo */}
      <div className="mb-6">
        <Image src={Logo} alt="Nike Logo" width={50} height={50} />
      </div>

      {/* Title */}
      <h1 className="text-center text-[22px] md:text-[32px] sm:text[28px] font-semibold mb-6">
        YOUR ACCOUNT <br /> FOR EVERYTHING <br /> NIKE
      </h1>

      {/* Login Form - Only Show When Signed Out */}
      <SignedOut>
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

          {/* Keep Me Signed In and Forgot Password */}
          <div className="flex justify-between items-center mb-4 text-sm">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Keep me signed in
            </label>
            <Link href="#" className="text-gray-400 hover:underline">
              Forgotten your password?
            </Link>
          </div>

          {/* Privacy Policy */}
          <div>
            <p className="text-gray-400 text-[15px] m-5 text-center">
              By logging in, you agree to Nikes Privacy Policy <br /> and Terms of Use.
            </p>
          </div>

          {/* Sign In Button (Clerk) */}
          <SignInButton mode="modal">
            <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">
              SIGN IN
            </button>
          </SignInButton>

          {/* Join Us */}
          <p className="mt-4 text-center text-sm">
            Not a Member?{" "}
            <Link href="/join-us" className="text-gray-400 hover:underline hover:text-black">
              Join Us
            </Link>
          </p>
        </div>
      </SignedOut>

      {/* Show User Profile Button When Signed In */}
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}
