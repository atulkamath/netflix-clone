import { useSession, signIn, signOut, getSession } from "next-auth/client";
import { useEffect, useState } from "react";

import Link from "next/link";
import BrowseHeader from "../components/BrowseHeader";
import BrowseHero from "../components/BrowseHero";

const browse = () => {
  const [session, loading] = useSession();
  const [content, setContent] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/protected");
      const json = await res.json();
      if (json.content) {
        setContent(json.content);
      }
    };
    fetchData();
  }, [session]);

  // When rendering client side don't display anything until loading is complete
  if (typeof window !== "undefined" && loading) return null;

  // If no session exists, display access denied message
  if (!session) {
    return (
      <>
        <div className="flex flex-col items-center justify-center h-screen px-4 text-center text-white bg-black">
          You are not logged in. Please click below to Login.
          <Link href="/login">
            <button className="p-2 mt-4 text-white rounded-md bg-netflix-red">
              Netflix Login
            </button>
          </Link>
        </div>
      </>
    );
  }

  // If session exists, display content
  return (
    <div>
      <BrowseHeader />
      <BrowseHero />
    </div>
  );
};

export default browse;
