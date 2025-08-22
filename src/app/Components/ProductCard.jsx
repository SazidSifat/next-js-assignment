import Link from "next/link";
import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <Link href={`/product/${product.id}`} className="block">
      <div className="relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transform transition-all duration-300 cursor-pointer overflow-hidden">
        {/* Product Image */}
        {product.image && (
          <div className="relative w-full h-48 md:h-56">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* Product Info */}
        <div className="p-4 md:p-6">
          <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2">
            {product.name}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm md:text-base">
            {product.description}
          </p>
          <p className="font-semibold text-blue-600 text-lg">
            ${product.price}
          </p>
        </div>

        {/* CTA Button Overlay on Hover */}
        <div className="absolute inset-0 flex items-end justify-center p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div className="bg-blue-500 text-white px-4 py-2 rounded-xl font-semibold shadow-lg">
            View Details
          </div>
        </div>
      </div>
    </Link>
  );
}
