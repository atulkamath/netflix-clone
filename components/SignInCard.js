import React, { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/client";
import Link from "next/link";

import Footer from "./Footer";

const SignInCard = () => {
  const [checked, setChecked] = useState();
  const handleChange = () => {
    setChecked(!checked);
  };
  const [session] = useSession();

  if (!session) {
    return (
      <div className="md:flex md:justify-center md:flex-col md:items-center ">
        <div className="flex flex-col items-start p-6 mb-20 text-white rounded md:items-start md:justify-center md:bg-black md:bg-opacity-50 md:pb-48 md:p-12 md:w-98 ">
          <div className="text-white"></div>

          <h1 className="items-start mb-6 text-4xl font-bold ">Sign In</h1>
          <input
            className="w-11/12 h-12 p-4 mb-4 rounded bg-actual-gray"
            type="text"
            name="text-input"
            placeholder="Email address"
          ></input>
          <input
            className="w-11/12 h-12 p-4 rounded bg-actual-gray"
            type="password"
            name="text-input"
            placeholder="Password"
          ></input>
          <>
            <button
              className="w-11/12 h-12 mt-8 mb-4 text-white rounded bg-netflix-red"
              onClick={() =>
                signIn("github", {
                  callbackUrl:
                    "https://netflix-clone-murex-seven.vercel.app/browse",
                })
              }
            >
              Sign in
            </button>
          </>
          <div className="flex justify-between w-11/12 mb-2 text-sm">
            <label>
              <input
                type="checkbox"
                checked={checked}
                onChange={handleChange}
              />
              Remember Me?
            </label>
            <button className="text-white">Need Help?</button>
          </div>
          <div className="flex items-center justify-center py-2">
            <h4 className="text-gray-400">New to Netflix?</h4>
            &nbsp;
            <button>Sign Up Now</button>
          </div>
          <span className="text-xs text-gray-400">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
            <button className="text-blue-600 "> Learn more.</button>
          </span>
        </div>
        <div className="w-full border-t-2 border-actual-gray md:bg-black md:bg-opacity-60">
          <Footer />
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen px-4 text-center text-white bg-black">
        You are already logged in. Please click below to Browse Content!
        <Link href="/browse">
          <button className="p-2 mt-4 text-white rounded-md bg-netflix-red">
            Netflix Browse
          </button>
        </Link>
      </div>
    </>
  );
};

export default SignInCard;
