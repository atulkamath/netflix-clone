import { useSession, signIn, signOut } from "next-auth/client";
import { Link } from 'next/link';

const browse = () => {
  const [session, loading] = useSession();
  return (
    <>
      <h1>Home browse page</h1>
      {session && (
        <>
          Signed in as {session.user.email} <br />
          <Link href="/">
          <button onClick={() => signOut()}>Sign out</button>
          </Link>
        </>
      )}
    </>
  );
};

export default browse;
