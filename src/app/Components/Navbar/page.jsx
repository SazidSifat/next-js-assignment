"use client";

import Link from "next/link";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const session = useSession();


  return (
    <nav className="border-b border-b-amber-200">
      <div className="flex items-center justify-between p-4 container mx-auto">
        <div>
          <Link href="/">
            <h1 className="text-3xl font-semibold">Smart Tech</h1>
          </Link>
        </div>

        <div className="text-lg font-medium">
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-blue-700">
                Home
              </Link>
            </li>
            <li>
              <Link href="/product" className="hover:text-blue-700">
                Product
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-blue-700">
                About
              </Link>
            </li>
            {session?.status === "authenticated" && (
              <li>
                <Link
                  href="/dashboard/add-product"
                  className="hover:text-blue-700"
                >
                  Add Product
                </Link>
              </li>
            )}
          </ul>
        </div>

        {session?.status === "authenticated" ? (
          <div className="space-x-3">
            {/* {JSON.stringify(session)} */}
            <button
              onClick={() => signOut({ redirect: true, callbackUrl: "/" })}
              className="py-3 px-8 bg-red-300 font-semibold rounded-xl"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="space-x-3">
            {/* {JSON.stringify(session)} */}
            <button>
              <Link
                href="/auth/register"
                className=" py-3 px-6 hidden lg:block bg-blue-500 text-white hover:bg-blue-600 rounded-2xl font-semibold shadow-lg transition"
              >
                Registration
              </Link>
            </button>
            <button
              href=""
              onClick={() => signIn()}
              className=" px-6 py-3 bg-blue-500 text-white hover:bg-blue-600 rounded-2xl font-semibold shadow-lg transition"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
