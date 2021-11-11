import { useSession, signIn, signOut, getSession } from "next-auth/client";
import { useEffect, useState } from "react";

import Link from "next/link";
import BrowseHeader from "../components/BrowseHeader";
import BrowseHero from "../components/BrowseHero";
import axios from "axios";
import getMovieApi from "../src/api/getMovieApi";
import BrowseCarousel from "../components/BrowseCarousel";
const browse = ({ data }) => {
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
      <BrowseHero>
        <BrowseCarousel
          title={"Popular on Netflix"}
          movies={data.popular}
          slug="movie/popular"
        />
        <BrowseCarousel
          title={"Top Rated"}
          movies={data.top_rated}
          slug="movie/top_rated"
        />
        <BrowseCarousel
          title={"Upcoming Movies"}
          movies={data.upcoming}
          slug="movie/upcoming"
        />
        <BrowseCarousel title={"Latest"} movies={data.tv} slug="tv/popular" />
      </BrowseHero>
    </div>
  );
};
export const getStaticProps = async () => {
  const popular = await getMovieApi("movie/popular");
  const top_rated = await getMovieApi("movie/top_rated");
  const upcoming = await getMovieApi("movie/upcoming");
  const tv = await getMovieApi("tv/popular");

  return {
    props: {
      data: {
        popular,
        top_rated,
        upcoming,
        tv,
      },
    },
  };
};
export default browse;
