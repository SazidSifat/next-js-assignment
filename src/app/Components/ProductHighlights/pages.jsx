"use client";

export default function ProductHighlight() {
  const products = [
    {
      id: 1,
      name: "Smartphone",
      price: "$499",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfCddtA1b0LgnZ37Nvto8dIhu5vxhIxvxIJw&s",
    },
    {
      id: 2,
      name: "Laptop",
      price: "$999",
      image:
        "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFwdG9wfGVufDB8fDB8fHww",
    },
    {
      id: 3,
      name: "Headphones",
      price: "$149",
      image:
        "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhlYWRwaG9uZXN8ZW58MHx8MHx8fDA%3D",
    },
    { id: 4, name: "Smartwatch", price: "$199", image: "https://images.unsplash.com/photo-1617043983671-adaadcaa2460?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNtYXJ0JTIwd2F0Y2h8ZW58MHx8MHx8fDA%3D" },
    { id: 5, name: "Camera", price: "$799", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRSHT1Z-ZTFz2qG-ItJ2W092_3G7_ZVAwu-Q&s" },
    {
      id: 6,
      name: "Gaming Console",
      price: "$399",
      image: "https://images.unsplash.com/photo-1593118247619-e2d6f056869e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2FtaW5nJTIwY29uc29sZXxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {product.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {product.price}
                </p>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
