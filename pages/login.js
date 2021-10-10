import Image from "next/image";
import Link from "next/link";

import SignInCard from "../components/SignInCard";

const login = () => {
  return (
    <div className="bg-black md:bg-cover flex flex-col md:bg-banner">
      <div className="bg-black bg-opacity-80">
        <Link href="/">
          <div className="h-24 w-56 relative ">
            <Image
              src="/netflix-logo.png"
              layout="fill" // required
              objectFit="cover" // change to suit your needs
              className=""
            />
          </div>
        </Link>
        <SignInCard />
      </div>
    </div>
  );
};

export default login;
