"use client";
import { useSearchParams } from "next/navigation";

import { navbarList } from "@/data/data";
import Link from "next/link";

const Navbar = () => {

  const searchParams = useSearchParams();
  const generate = searchParams.get("generate");
  return (
    <div className="flex justify-center dark:bg-gray-600 bg-amber-100 lg:text-lg p-4 gap-x-10">
      {navbarList.map(({title,param }) => (
        <Link href={`/?generate=${param}`} key={title}
        className={` hover:text-amber-600 font-semibold
        ${generate &&generate === param &&"underline underline-offset-8 decoration-4  decoration-amber-500 rounded-lg"}`}>
          {title}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
