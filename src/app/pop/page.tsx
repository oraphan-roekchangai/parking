"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [activeTab, setActiveTab] = useState("LOGIN");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 grid md:grid-cols-2">
      {/* Left: Image */}
      <div className="relative hidden md:block p-3">
        <div className="h-[calc(100vh-24px)] w-full overflow-hidden rounded-lg ring-2 ring-blue-400">
          <Image
            src="/raban-haaijk-wftNpcjCHT4-unsplash.jpg"
            alt="Parking lot"
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* Right: Form */}
      <div className="flex items-center justify-center px-6 py-10">
        <div className="w-full max-w-md">
          

          {/* Tabs */}
          <div className="mb-8 flex justify-center">
            <div className="inline-flex rounded-full bg-gray-100 p-1 shadow-sm">
              <button
                onClick={() => setActiveTab("LOGIN")}
                className={`px-6 py-2 text-sm font-medium rounded-full transition-all ${
                  activeTab === "LOGIN"
                    ? "bg-blue-500 text-white shadow"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                SIGN IN
              </button>
              <button
                onClick={() => setActiveTab("SIGNUP")}
                className={`px-6 py-2 text-sm font-medium rounded-full transition-all ${
                  activeTab === "SIGNUP"
                    ? "bg-blue-500 text-white shadow"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                SIGN UP
              </button>
            </div>
          </div>
<h1 className="mb-8 text-center text-4xl font-extrabold tracking-wide">
            {activeTab === "LOGIN" ? "SIGN IN" : "SIGN UP"}
          </h1>
          <form className="space-y-5" onSubmit={handleSubmit}>
            {activeTab === "LOGIN" ? (
              <>
                {/* Login Form */}
                {/* Username */}
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">Username</label>
                  <input
                    type="text"
                    placeholder="abcdefg"
                    className="w-full rounded-md border border-gray-200 bg-gray-50 p-3 text-sm outline-none ring-blue-500 transition focus:border-blue-400 focus:ring-2"
                  />
                </div>

                {/* Password */}
                <div>
                  <div className="mb-1 flex items-center justify-between">
                    <label className="block text-sm font-medium text-gray-700">Password</label>
                    <a href="#" className="text-xs text-blue-600 hover:underline">
                      Forgot Password?
                    </a>
                  </div>
                  <input
                    type="password"
                    className="w-full rounded-md border border-gray-200 bg-gray-50 p-3 text-sm outline-none ring-blue-500 transition focus:border-blue-400 focus:ring-2"
                  />
                </div>

                {/* Remember me */}
                <label className="inline-flex select-none items-center gap-2 text-sm text-gray-700">
                  <input type="checkbox" className="size-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                  Remember Me
                </label>

                {/* Submit */}
                <button
                  type="submit"
                  className="mt-2 w-full rounded-xl bg-gradient-to-b from-blue-500 to-blue-600 py-3 text-lg font-semibold text-white shadow-lg transition hover:from-blue-600 hover:to-blue-700 active:translate-y-[1px]"
                >
                  Sign in
                </button>
              </>
            ) : (
              <>
                {/* Sign Up Form */}
                {/* Username */}
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">Username</label>
                  <input
                    type="text"
                    placeholder="Enter your username"
                    className="w-full rounded-md border border-gray-200 bg-gray-50 p-3 text-sm outline-none ring-blue-500 transition focus:border-blue-400 focus:ring-2"
                  />
                </div>
                {/* Full Name */}
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full rounded-md border border-gray-200 bg-gray-50 p-3 text-sm outline-none ring-blue-500 transition focus:border-blue-400 focus:ring-2"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-md border border-gray-200 bg-gray-50 p-3 text-sm outline-none ring-blue-500 transition focus:border-blue-400 focus:ring-2"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full rounded-md border border-gray-200 bg-gray-50 p-3 text-sm outline-none ring-blue-500 transition focus:border-blue-400 focus:ring-2"
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">Password</label>
                  <input
                    type="password"
                    placeholder="Create a password"
                    className="w-full rounded-md border border-gray-200 bg-gray-50 p-3 text-sm outline-none ring-blue-500 transition focus:border-blue-400 focus:ring-2"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="mt-2 w-full rounded-xl bg-gradient-to-b from-blue-500 to-blue-600 py-3 text-lg font-semibold text-white shadow-lg transition hover:from-blue-600 hover:to-blue-700 active:translate-y-[1px]"
                >
                  Sign up
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}