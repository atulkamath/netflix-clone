import Image from "next/image";
import Link from 'next/link';

import { GlobeAltIcon } from "@heroicons/react/outline";

function Header() {
  return (
    <header className="flex justify-end bg-gradient-to-b from-black">
      <div className="mr-auto px-1 ml-2 mt-1">
        <Image src="/netflix-logo.png" height={80} width={120} />
      </div>
      <select
        className=" flex text-center text-white bg-gray-900 bg-opacity-80 border border-white w-20 h-8 mt-5 items-center justify-center text-sm"
        name="language"
        id="language"
      >
        <GlobeAltIcon className="h-5 w-5 text-blue-500" />
        <option value="english">English</option>
        <option value="arabic">Arabic</option>
      </select>
      <Link href="/login">
      <button className=" flex rounded text-white items-center  bg-red-600 w-20 h-8 p-2 mt-5 ml-5 mr-2 justify-center text-sm">
        Sign In
      </button>
      </Link>
    </header>
  );
}

export default Header;
