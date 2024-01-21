"use client";
import { MdLightMode } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const DarkMode = () => {

    const { systemTheme, theme, setTheme } = useTheme();
    const [toggleTheme, setToggleTheme] = useState(false);
    const currentTheme = theme === "system" ? systemTheme : theme;

    useEffect(() => setToggleTheme(true), []);


  return (
    <div className='mr-10'>
    {toggleTheme &&
      (currentTheme === "light" ? (
        <BsFillMoonFill
          className="text-xl cursor-pointer hover:text-amber-500"
          onClick={() => setTheme("dark")}
        />
      ) : (
        <MdLightMode
          className="text-xl cursor-pointer hover:text-amber-500"
          onClick={() => setTheme("light")}
        />
      ))}
  </div>
  )
}

export default DarkMode