import { getProductById } from "@/lib/products";
import Image from "next/image";

export default async function ProductDetailsPage({ params }) {
  const product = await getProductById(params.id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
        <p className="text-xl text-red-500">Product not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 px-6 py-12">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden md:flex">
        
        {/* Product Image */}
        {product.image && (
          <div className="relative w-full h-80 md:h-auto md:w-1/2">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* Product Details */}
        <div className="p-8 md:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
              {product.name}
            </h1>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              {product.description}
            </p>
            <p className="text-2xl font-bold text-blue-600 mb-6">
              ${product.price}
            </p>

            {/* Product Highlights / Badges */}
            <div className="flex gap-3 mb-6">
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium dark:bg-green-800 dark:text-green-200">
                Best Seller
              </span>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium dark:bg-yellow-800 dark:text-yellow-200">
                Limited Stock
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold shadow-lg hover:bg-blue-700 transition">
                Add to Cart
              </button>
              <button className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl font-semibold shadow-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
