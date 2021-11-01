import { useState, useEffect } from "react";

import Image from "next/image";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const BrowseCarousel = (props) => {
  console.log(props);
  const axios = require("axios");
  const [myList, setMyList] = useState(null);

  useEffect(() => {
    axios(
      `https://api.themoviedb.org/3/${props.slug}?api_key=4fde364e3c1e773fe97ab43acc0a1e1f`
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
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <div className="text-white ">
      <h2 className="px-4 text-xl font-semibold text-gray-400">
        {props.title}
      </h2>

      <Carousel
        className="p-3"
        swipeable
        draggable
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        responsive={responsive}
      >
        {myList.map(function (d, idx) {
          return (
            <div key={idx} className="px-1">
              <Image
                src={`https://image.tmdb.org/t/p/w500${d.poster_path}`}
                width={200}
                height={130}
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default BrowseCarousel;
