export default function Hero() {
  return (
    <section className="relative bg-gray-900 text-white h-[80vh] flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1742902401220-d66e85692581?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
          Welcome to <span className="text-blue-400">MyShop</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-6">
          Discover premium products at unbeatable prices.  
          Shop smarter, live better.
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-4">
          <a
            href="/products"
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-2xl font-semibold shadow-lg transition"
          >
            Shop Now
          </a>
          <a
            href="/about"
            className="px-6 py-3 bg-white text-gray-900 hover:bg-gray-200 rounded-2xl font-semibold shadow-lg transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
