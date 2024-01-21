import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Search from "@/components/Search";
import Providers from "./Providers";
import "./globals.css";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDb Clobe",
  description: "This is the IMDb clone website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <Providers>
          <div className="container mx-auto">
            <Header />
            <Suspense fallback={<div>Loading Navbar...</div>}>
             <Navbar />
            </Suspense>
            <Search />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
