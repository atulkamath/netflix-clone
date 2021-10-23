import Image from "next/image";
import Link from "next/link";

import { ArrowSmDownIcon, GlobeAltIcon } from "@heroicons/react/outline";

function Header() {
  return (
    <header className="flex justify-end bg-gradient-to-b from-black p-4">
      <div className="mr-auto px-1 ml-4 mt-1">
        <Image src="/netflix-3.svg" height={60} width={90} />
      </div>
      <select
        className="flex text-center text-white bg-gray-900 bg-opacity-80 border border-white px-2 h-8 mt-5 items-center justify-center text-sm"
        name="language"
        id="language"
      >
        <option value="english">English</option>

        <option value="arabic">Arabic</option>
      </select>

      <Link href="/login">
        <button className=" flex rounded text-white items-center  bg-red-600 w-20 h-8 p-2 mt-5 ml-6 mr-2 justify-center text-sm">
          Sign In
        </button>
      </Link>
    </header>
  );
}

export default Header;
