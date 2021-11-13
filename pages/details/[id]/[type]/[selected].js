import { ChevronLeftIcon } from "@heroicons/react/solid";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Details = () => {
  const router = useRouter();
  const [myList, setMyList] = useState(null);
  const [cast, setCast] = useState(null);
  const [similar, setSimilar] = useState();
  const { id } = router.query;
  const slug = router.query.type;

  useEffect(() => {
    if (!id) {
      return;
    }

    const fetchSomethingById = async () => {
      axios(
        `https://api.themoviedb.org/3/${slug}/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&append_to_response=release_dates`
      )
        .then((response) => {
          setMyList(response.data);
        })

        .then(() => {
          axios(
            `https://api.themoviedb.org/3/${slug}/${id}/credits?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
          ).then((response) => {
            setCast(response.data);
          });
        })
        .then(() => {
          axios(
            `https://api.themoviedb.org/3/${slug}/${id}/similar?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
          ).then((response) => {
            setSimilar(response.data.results);
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    fetchSomethingById();
  }, [id]);

  if (!myList || !cast || !similar) {
    return null;
  }
  return (
    <div className="w-full h-screen text-white bg-black ">
      <div className="relative z-50 h-1/4 sm:h-1/3 lg:h-3/4">
        <button
          className="absolute z-50 sm:p-4"
          type="button"
          onClick={() => router.back()}
        >
          <ChevronLeftIcon className="w-8 h-8" />
        </button>
        {myList.backdrop_path === null ? (
          <div className="py-52">
            <Image
              className=""
              src={"https://cdn.worldvectorlogo.com/logos/netflix-3.svg"}
              layout="responsive"
              width="70"
              height="5"
            />
          </div>
        ) : (
          <Image
            className="relative z-30 mt-8 "
            src={`https://image.tmdb.org/t/p/original${myList.backdrop_path}`}
            layout="fill"
          />
        )}
      </div>
      <div className="p-6 font-light text-white lg:px-24 ">
        <h1 className="my-4 font-bold sm:text-lg lg:text-xl">
          {myList.title === undefined ? myList.name : myList.title}
        </h1>
        <div className="w-52 ">
          <ul className="flex items-start justify-start text-sm list-none">
            <li className="pr-2 border-r ">
              {myList.release_date === undefined
                ? myList.first_air_date.substring(0, 4)
                : myList.release_date.substring(0, 4)}
            </li>
            <li className="px-2 border-r ">
              {myList.runtime === undefined
                ? myList.episode_run_time[0]
                : myList.runtime}
              m
            </li>
            <li className="pl-2">
              {myList.genres.length === 0 ? "" : myList.genres[0].name}
            </li>
          </ul>
        </div>
      </div>
      <div className="pl-6 bg-black lg:px-24">
        <h2 className="mt-2 mb-4 lg:w-3/4">{myList.overview}</h2>
        <ul className="inline text-sm whitespace-nowrap sm:text-lg">
          <span className="text-gray-400">Starring:&nbsp;</span>
          {cast.cast.slice(0, 2).map((item) => (
            <li className="inline whitespace-normal " key={item.id}>
              {item.name},&nbsp;
            </li>
          ))}
          <h3 className="w-11/12 py-4 mt-4 text-gray-300 border-t border-b lg:w-full border-actual-gray md:flex md:items-center md:justify-center">
            {myList.tagline}
          </h3>
        </ul>
        <h4 className="mt-4 mb-4 text-white">More Like This</h4>
        <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
          {similar.map((item) => (
            <Link
              href={
                "/details/" + item.id + "/" + slug + "/" + router.query.selected
              }
            >
              <div
                key={id}
                className="pr-4 transition duration-300 ease-in-out cursor-pointer md:p-6 lg:-ml-6 lg:hover:scale-110"
              >
                <div key={item.id}>
                  <Image
                    className="rounded-md "
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    width={29}
                    height={40}
                    layout="responsive"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Details;
