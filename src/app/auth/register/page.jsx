"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { registerUser } from "@/app/action/auth/register";
import { toast } from "react-toastify";

export default function RegisterPage() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    const payload = { name, email, password };

    const result = await registerUser(payload);

    if (result) {
      toast.success("Registration Successful");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[60vh] bg-gray-100 dark:bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow w-full max-w-md"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">
          Register
        </h2>

        <input
          type="text"
          placeholder="Name"
          name="name"
          required
          className="w-full mb-4 px-4 py-2 border border-black/20 rounded-xl"
        />

        <input
          type="email"
          placeholder="Email"
          name="email"
          required
          className="w-full mb-4 px-4 py-2 border border-black/20 rounded-xl"
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
          required
          className="w-full mb-6 px-4 py-2 border border-black/20 rounded-xl"
        />

        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-700 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
}
