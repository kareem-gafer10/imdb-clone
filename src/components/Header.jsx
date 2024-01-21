import { headerList } from "@/data/data";
import Link from "next/link";
import DarkMode from "./DarkMode";

const Header = () => {
  return (
    <div className="flex justify-between items-center py-5 px-3">
      <div className="flex gap-x-5 sm:gap-x-10 ">
        {headerList.map(({ title, icon, link }) => (
          <Link key={link} href={link} className="hover:text-amber-600">
            <p className="sm:hidden">{icon}</p>
            <p className="hidden sm:block">{title}</p>
          </Link>
        ))}
      </div>

      <h2 className=" text-2xl flex items-center">
        <DarkMode />
        <Link href="/" className="flex items-center gap-x-2">
          <p className="bg-amber-500 font-bold py-1 px-2 rounded-lg">IMDB</p>
          <p className=" text-xl hidden sm:block">Clone</p>
        </Link>
      </h2>
    </div>
  );
};

export default Header;
