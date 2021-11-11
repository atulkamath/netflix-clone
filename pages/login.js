import Image from "next/image";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/client";
import SignInCard from "../components/SignInCard";

const login = () => {
  const [session] = useSession();
  if (!session) {
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
  }
  return <SignInCard />;
};

export default login;
