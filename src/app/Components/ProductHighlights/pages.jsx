import { Truck, Star, Headset } from "lucide-react"; // icons from lucide-react

const highlights = [
  { id: 1, title: "Fast Delivery", desc: "Get your products in 2-3 days.", icon: <Truck size={36} /> },
  { id: 2, title: "Best Quality", desc: "We ensure premium quality.", icon: <Star size={36} /> },
  { id: 3, title: "24/7 Support", desc: "Always here to help you.", icon: <Headset size={36} /> },
];

export default function ProductHighlights() {
  return (
   <section className="bg-gradient-to-r from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
     <div className="relative py-16 px-6 container mx-auto ">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center text-gray-900 dark:text-white">
        Why Choose Us?
      </h2>

      {/* Highlights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {highlights.map((item) => (
          <div
            key={item.id}
            className="relative p-8 rounded-2xl bg-white/10 dark:bg-gray-800/40 backdrop-blur-lg border border-gray-200/20 dark:border-gray-700/30 shadow-lg hover:scale-105 hover:shadow-xl transition transform duration-300"
          >
            {/* Icon */}
            <div className="flex justify-center items-center w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 text-white shadow-md">
              {item.icon}
            </div>
            {/* Title */}
            <h3 className="text-xl font-semibold text-center text-gray-900 dark:text-white mb-3">
              {item.title}
            </h3>
            {/* Description */}
            <p className="text-gray-600 dark:text-gray-300 text-center">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
   </section>
  );
}
