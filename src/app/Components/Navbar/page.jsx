"use client";

import Link from "next/link";
import React from "react";
import {  signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
    const session = useSession();

    console.log(session)

  return (
    <nav className="border-b border-b-amber-200">
      <div className="flex items-center justify-between p-4 container mx-auto">
        <div>
          <h1 className="text-3xl font-medium">Sazid</h1>
        </div>

        <div className="text-lg font-medium">
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-amber-200">Home</Link>
            </li>
            <li>    
              <Link href="/product" className="hover:text-amber-200">Product</Link>
            </li>
            <li>
              <Link href="/" className="hover:text-amber-200">About</Link>
            </li>
          </ul>
        </div>

        <div className="space-x-3">
            {JSON.stringify(session)}
            <Link href='/auth/register'
              className="py-3 px-8 bg-amber-300 font-semibold rounded-xl"
            >
              Registration
            </Link>
            <button
              onClick={() => signIn()}
              className="py-3 px-8 bg-amber-300 font-semibold rounded-xl"
            >
              Login
            </button>
        
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
