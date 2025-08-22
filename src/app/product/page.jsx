"use client";
import { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
 
  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Failed to fetch products");
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen container mx-auto px-6 py-12 dark:bg-gray-900">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
        Our Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}
