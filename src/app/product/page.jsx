
import { getProducts } from "@/lib/products";
import ProductCard from "../Components/ProductCard/page";

export default async function Product() {
  const products = await getProducts();

  return (
    <div className="min-h-screen container mx-auto px-6 py-12 dark:bg-gray-900">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
        Our Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
         <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
