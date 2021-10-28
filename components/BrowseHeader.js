import { BellIcon, MenuIcon, SearchIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useState } from "react";
import SearchBar from "./SearchBar";
const BrowseHeader = () => {
  const [navbar, setNavbar] = useState("");
  const [menu, setMenu] = useState(false);
  const changeNavBackground = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else setNavbar(false);
  };
  window.addEventListener("scroll", changeNavBackground);
  return (
    <nav className={menu}>
      <div
        className={
          navbar
            ? " fixed z-40 flex items-center justify-start w-screen px-4 bg-gradient-to-b from-black via-black to-black transition-none duration-1000 ease-linear"
            : "fixed z-40 flex items-center justify-start w-screen px-4 bg-gradient-to-b from-black via-light-black to-transparent"
        }
      >
        <div className="flex items-center justify-center mr-auto">
          <div className="flex items-center justify-center ">
            <MenuIcon
              width={40}
              height={30}
              color="white"
              className="mr-2"
              onClick={() =>
                !menu
                  ? setMenu("absolute z-50 flex w-3/5 h-screen bg-black")
                  : setMenu("")
              }
            />

            <Image src="/netflix-3.svg" width={80} height={60} />

            {/* <select
          className="flex items-center justify-center ml-2 text-xs text-center text-white bg-transparent cursor-pointer "
          name="language"
          id="language"
        >
          <option value="english">Browse</option>
          <option value="arabic">Tv Shows</option>
        </select> */}
          </div>
          <SearchBar />
          {/* <BellIcon className="mr-5 text-white" width={20} />
      <Image src="/Netflix-avatar.png" height={40} width={40} /> */}
        </div>
      </div>
    </nav>
  );
};

export default BrowseHeader;
