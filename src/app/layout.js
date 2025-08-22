import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar/page";
import Footer from "./Components/Footer/page";
import NextSessionProvider from "@/provider/sessionProvider";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "My Shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <NextSessionProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <div className="sticky top-0 z-50 bg-white">  <Navbar /></div>
          <ToastContainer position="top-center" autoClose={3000} theme="dark" />
          <main className="">{children}</main>
          <Footer />
        </body>
      </NextSessionProvider>
    </html>
  );
}
