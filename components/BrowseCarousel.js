import Image from "next/image";
import Link from "next/link";
import "react-multi-carousel/lib/styles.css";
import { useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

const BrowseCarousel = ({ movies = [], title, slug }) => {
  const startRef = useRef();
  const endRef = useRef();

  function handleBackClick() {
    startRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  function handleRightClick() {
    endRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "end",
    });
  }

  return (
    <div className="lg:overscroll-none lg:overflow-hidden ">
      <h2 className="flex-none text-xl font-semibold text-gray-400 drop-shadow-4xl lg:text-white px-7 ">
        {title}
      </h2>
      <div className="flex p-5 overflow-x-scroll overscroll-y-auto hide-scroll-bar ">
        <div className="absolute z-50 mt-24 text-white left-2">
          <button onClick={handleBackClick}>
            <ChevronLeftIcon className="w-10 h-10 transition duration-200 ease-in-out transform rounded-full hover:-translate-y-1 hover:scale-125 bg-light-black" />
          </button>
        </div>
        <div className="absolute z-50 mt-24 text-white right-8">
          <button onClick={handleRightClick}>
            <ChevronRightIcon className="w-10 h-10 transition duration-200 ease-in-out transform rounded-full hover:-translate-y-1 hover:scale-125 bg-light-black" />
          </button>
        </div>
        <div ref={startRef} className="invisible"></div>
        {movies.map(function (data, id) {
          return (
            <Link href={"/details/" + data.id + "/" + slug}>
              <div
                key={id}
                className={`w-full px-2 transition duration-300 ease-in-out cursor-pointer lg:hover:scale-110   `}
              >
                <div className="w-32 lg:w-44 ">
                  <Image
                    className="rounded-md "
                    src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                    width={120}
                    height={170}
                    layout="responsive"
                  />
                </div>
              </div>
            </Link>
          );
        })}
        <div ref={endRef} className="invisible"></div>
      </div>
    </div>
  );
};

export default BrowseCarousel;
