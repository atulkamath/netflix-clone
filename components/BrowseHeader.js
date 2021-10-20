import { BellIcon, SearchIcon } from "@heroicons/react/solid";
import Image from "next/image";

const BrowseHeader = () => {
  return (
    <div className="flex px-6 bg-gradient-to-b from-light-black to-transparent items-center justify-start absolute z-50 w-full">
      <div className="flex items-center justify-center mr-auto">
        <Image src="/netflix-3.svg" width={50} height={50} />
        <select
          className=" cursor-pointer flex text-center text-white bg-transparent items-center justify-center text-xs ml-2"
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
