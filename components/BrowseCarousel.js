import Image from "next/image";
import Link from "next/link";
import "react-multi-carousel/lib/styles.css";
const BrowseCarousel = ({ movies = [], title, slug }) => {
  return (
    <div className="lg:overscroll-none lg:overflow-hidden ">
      <h2 className="flex-none text-xl font-semibold text-gray-400 drop-shadow-4xl lg:text-white px-7 ">
        {title}
      </h2>
      <div className="flex p-5 overflow-x-scroll overscroll-y-auto hide-scroll-bar ">
        {/* <div className="absolute z-50 flex items-center justify-center border-4 right-20 ">
          <button onClick={moveRight}> right </button>
        </div> */}
        {movies.map(function (data, id) {
          {
            /* console.log(data); */
          }
          return (
            <Link href={"/details/" + data.id + "/" + slug}>
              <div
                key={id}
                className={`w-full px-2 transition duration-300 ease-in-out cursor-pointer lg:hover:scale-110  `}
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
      </div>
    </div>
  );
};

export default BrowseCarousel;
