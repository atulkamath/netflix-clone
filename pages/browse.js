import { useSession, signIn, signOut, getSession } from "next-auth/client";
import { useRouter } from "next/router";
import { Link } from "next/link";
import BrowseHeader from "../components/BrowseHeader";

const browse = () => {
  return <BrowseHeader />;
};
export default browse;
