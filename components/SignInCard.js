import React, { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/client";
import { Link } from "next/link";

import Footer from "./Footer";

const SignInCard = () => {
  const [checked, setChecked] = useState();
  const handleChange = () => {
    setChecked(!checked);
  };
  const [session, loading] = useSession();
  return (
    <div className="md:flex md:justify-center md:flex-col md:items-center ">
      <div className="flex text-white flex-col items-start rounded p-6 mb-20 md:items-start md:justify-center md:bg-black md:bg-opacity-50  md:pb-48 md:p-12 md:w-98  ">
        <div className="text-white"></div>

        <h1 className=" font-bold text-4xl mb-6 items-start">Sign In</h1>
        <input
          className="w-11/12 h-12 p-4 bg-actual-gray rounded mb-4"
          type="text"
          name="text-input"
          placeholder="Email address"
        ></input>
        <input
          className="w-11/12 h-12 p-4 bg-actual-gray rounded"
          type="password"
          name="text-input"
          placeholder="Password"
        ></input>

        {!session && (
          <>
            Not signed in <br />
            {/*<button onClick={() => signIn()}>Sign in</button>*/}
            <button
              className=" w-11/12 h-12 mt-8 mb-4 rounded text-white bg-red-600"
              onClick={() =>
                signIn("github", {
                  callbackUrl: "http://localhost:3000/browse",
                })
              }
            >
              Sign in
            </button>
          </>
        )}
        {session && (
          <>
            Signed in as {session.user.email} <br />
            <button onClick={() => signOut()}>Sign out</button>
          </>
        )}

        <div className="flex justify-between w-11/12 text-sm mb-2">
          <label>
            <input type="checkbox" checked={checked} onChange={handleChange} />
            Remember Me?
          </label>
          <button className="text-white">Need Help?</button>
        </div>
        <div className="flex py-2 items-center justify-center">
          <h4 className="text-gray-400">New to Netflix?</h4>
          &nbsp;
          <button>Sign Up Now</button>
        </div>
        <span className="text-gray-400 text-xs">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          <button className="text-blue-600 "> Learn more.</button>
        </span>
      </div>
      <div className="w-full border-t-2 border-actual-gray md:bg-black md:bg-opacity-60">
        <Footer />
      </div>
    </div>
  );
};

export default SignInCard;
