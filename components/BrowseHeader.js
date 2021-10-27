import { BellIcon, SearchIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useState } from "react";
const BrowseHeader = () => {
  const [navbar, setNavbar] = useState("");
  const changeNavBackground = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else setNavbar(false);
  };
  window.addEventListener("scroll", changeNavBackground);
  return (
    <div
      className={
        navbar
          ? "fixed z-50 flex items-center justify-start w-screen px-4 bg-gradient-to-b from-black via-black to-black transition-none duration-1000 ease-linear"
          : "fixed z-50 flex items-center justify-start w-screen px-4 bg-gradient-to-b from-black via-light-black to-transparent"
      }
    >
      <div className="flex items-center justify-center mr-auto">
        <Image src="/netflix-3.svg" width={50} height={50} />
        <select
          className="flex items-center justify-center ml-2 text-xs text-center text-white bg-transparent cursor-pointer "
          name="language"
          id="language"
        >
          <option value="english">Browse</option>
          <option value="arabic">Tv Shows</option>
        </select>
      </div>
      <BellIcon className="mr-5 text-white" width={20} />

      <Image src="/Netflix-avatar.png" height={40} width={40} />
    </div>
  );
};

export default BrowseHeader;
