import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";

export const headerList = [
  { title: "HOME", icon: <AiFillHome className=" text-2xl" />, link: "/" },
  {
    title: "ABOUT",
    icon: <BsFillInfoCircleFill className=" text-2xl" />,
    link: "/about",
  },
];

export const navbarList = [
  { title: "Trending", param: "Trending" },
  { title: "Top Rated", param: "TopRated" },
];
