import Image from "next/image";
import Link from "next/link";

import SignInCard from "../components/SignInCard";

const login = () => {
  return (
    <div className="flex flex-col bg-black md:bg-cover md:bg-banner">
      <div className="bg-black bg-opacity-80">
        <Link href="/">
          <div className="px-1 mt-1 ml-4 mr-auto">
            <Image src="/netflix-3.svg" height={60} width={90} />
          </div>
        </Link>
        <SignInCard />
      </div>
    </div>
  );
};

export default login;
