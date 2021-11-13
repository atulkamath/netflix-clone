import { useSession } from "next-auth/client";
import Link from "next/link";
import BrowseCarousel from "../components/BrowseCarousel";
import BrowseHeader from "../components/BrowseHeader";
import BrowseHero from "../components/BrowseHero";
import getMovieApi from "../src/api/getMovieApi";

const browse = ({ data }) => {
  const [session, loading] = useSession();

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
