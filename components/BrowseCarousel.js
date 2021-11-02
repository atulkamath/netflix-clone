import Image from "next/image";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const BrowseCarousel = (props) => {
  const axios = require("axios");
  const [myList, setMyList] = useState(null);
  useEffect(() => {
    axios(
      `https://api.themoviedb.org/3/${props.slug}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
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
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
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
    <div className="text-white ">
      <h2 className="pb-2 text-xl font-semibold text-gray-400 px-7">
        {props.title}
      </h2>

      <Carousel
        partialVisible={true}
        className="px-6 pb-4"
        draggable
        swipeable
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        responsive={responsive}
        containerClass="carousel-container"
      >
        {myList.map(function (data, id) {
          return (
            <div key={id} className="px-1">
              <Image
                src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                width={190}
                height={110}
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default BrowseCarousel;
