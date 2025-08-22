import { Facebook, Twitter, Instagram, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 mt-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">MyShop</h2>
          <p className="text-gray-400">
            Your one-stop destination for premium products at unbeatable prices.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-blue-400 transition">Home</a></li>
            <li><a href="/products" className="hover:text-blue-400 transition">Products</a></li>
            <li><a href="/about" className="hover:text-blue-400 transition">About Us</a></li>
            <li><a href="/contact" className="hover:text-blue-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Get in Touch</h3>
          <p className="flex items-center gap-2 mb-2">
            <Mail size={18} /> support@myshop.com
          </p>
          <p className="flex items-center gap-2 mb-4">
            <Phone size={18} /> +880 1234 567 890
          </p>

          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-400 transition"><Facebook size={22} /></a>
            <a href="#" className="hover:text-blue-400 transition"><Twitter size={22} /></a>
            <a href="#" className="hover:text-blue-400 transition"><Instagram size={22} /></a>
          </div>
        </div>
      </div>

      {/* Bottom row */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} MyShop. All rights reserved.
      </div>
    </footer>
  );
}
