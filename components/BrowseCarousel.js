import Image from "next/image";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const BrowseCarousel = (props) => {
  const axios = require("axios");
  const [myList, setMyList] = useState(null);

  useEffect(() => {
    axios(
      `https://api.themoviedb.org/3/${props.slug}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&append_to_response=images&include_image_language=en,null`
    )
      .then((response) => {
        setMyList(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  if (!myList) {
    return null;
  }
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 8,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 7,
      partialVisibilityGutter: 50,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      partialVisibilityGutter: 60,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      partialVisibilityGutter: 25,
    },
  };
  return (
    <div className="sm:pt-8 ">
      <h2 className="pb-2 text-xl font-semibold text-gray-400 drop-shadow-4xl lg:text-white px-7">
        {props.title}
      </h2>
      <Carousel
        partialVisible={true}
        className="px-5 pb-4 "
        removeArrowOnDeviceType={["tablet", "mobile"]}
        responsive={responsive}
        containerClass="carousel-container"
      >
        {myList.map(function (data, id) {
          return (
            <div
              key={id}
              className="px-2 transition duration-300 ease-in-out cursor-pointer hover:scale-110"
            >
              <Image
                className="rounded-md"
                src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                width={120}
                height={170}
                layout="responsive"
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default BrowseCarousel;
