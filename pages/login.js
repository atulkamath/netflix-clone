import Image from "next/image";
import Link from "next/link";

import SignInCard from "../components/SignInCard";

const login = () => {


  return (
    <div className="bg-black md:bg-cover flex flex-col md:bg-banner">
      <div className="bg-black bg-opacity-80">
        <Link href="/">
          <div className="mr-auto px-1 ml-4 mt-1">
            <Image src="/netflix-3.svg" height={60} width={90} />
          </div>
        </Link>
        <SignInCard />
      </div>
    </div>
  );
};

export default login;
