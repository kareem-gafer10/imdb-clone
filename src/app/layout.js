import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Search from "@/components/Search";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDb Clobe",
  description: "This is the IMDb clone website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} container mx-auto`}>
        <Header />
        <Navbar />
        <Search />
        {children}
      </body>
    </html>
  );
}
