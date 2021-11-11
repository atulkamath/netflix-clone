import Image from "next/image";
import Link from "next/link";

import { ArrowSmDownIcon, GlobeAltIcon } from "@heroicons/react/outline";

function Header() {
  return (
    <header className="flex justify-end p-4 bg-gradient-to-b from-black">
      <div className="px-1 mt-1 ml-4 mr-auto">
        <Image src="/netflix-3.svg" height={60} width={90} />
      </div>
      <select
        className="flex items-center justify-center h-8 px-2 mt-5 text-sm text-center text-white bg-gray-900 border border-white appearance-none bg-opacity-80"
        name="language"
        id="language"
      >
        <option value="english">English</option>
        <option value="arabic">Arabic</option>
      </select>

      <Link href="/login">
        <button className="flex items-center justify-center w-20 h-8 p-2 mt-5 ml-6 mr-2 text-sm text-white rounded bg-netflix-red">
          Sign In
        </button>
      </Link>
    </header>
  );
}

export default Header;
