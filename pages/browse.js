import { useSession, signIn, signOut, getSession } from "next-auth/client";
import { useRouter } from "next/router";
import { Link } from "next/link";

const browse = () => {
  <h1>Browse Page</h1>;
  //   const router = useRouter();
  //   const [session, loading] = useSession();
  //   if (!session) {
  //     return router.push("/login");
  //   }
  //   return (
  //     <>
  //       <h1>Home browse page</h1>
  //     </>
  //   );
  // };
  // export async function getServerSideProps(context) {
  //   const session = await getSession(context);
};
export default browse;
