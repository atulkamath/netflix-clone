import { useSession, signIn, signOut, getSession } from "next-auth/client";
import { useRouter } from "next/router";
import { Link } from "next/link";
import BrowseHeader from "../components/BrowseHeader";
import BrowseHero from "../components/BrowseHero";

const browse = () => {
  return (
    <div>
      <BrowseHeader />
      <BrowseHero />
    </div>
  );
};
export default browse;
