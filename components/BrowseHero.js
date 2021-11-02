import Image from "next/image";
import React from "react";
import ReactVideo from "./ReactVideo";

import {
  PlusIcon,
  PlayIcon,
  InformationCircleIcon,
} from "@heroicons/react/solid";
import BrowseCarousel from "./BrowseCarousel";

{
  /* https://vod-progressive.akamaized.net/exp=1634663955~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2775%2F21%2F538877060%2F2554448079.mp4~hmac=c441e9fe9fdc8aa231c233d54ea7e620c39c533fa442e4ad596033aeca9a1062/vimeo-prod-skyfire-std-us/01/2775/21/538877060/2554448079.mp4?filename=Waves+-+70796.mp4 */
}

const BrowseHero = () => {
  return (
    <div className="relative w-full h-screen bg-black lg:block">
      <ReactVideo
        className="hidden lg:block"
        controls
        url="/video.mp4"
        width="100%"
        height="100%"
        volume={1}
      />
      <div className="hidden w-1/2 p-12 lg:top-1/4 lg:block lg:absolute">
        <Image
          src="https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABfp5_exPnNUZnDZIPJsnSttBiba9tCC2-056d6YlKtS0ntsLFE4Wi2hd_fZXsbO_jXoztbMNX63wldZmThL1W6HDTyrB2PmtEO41ftM-A7sTZOzqPEqIXKKcNZ12_z6rNQTXuIMn-SY5aP80ByhYYeq-nXMSFcGyJntaHJDtm2iTCg.png?r=7c3"
          height={150}
          width={600}
        />
        <h3 className="mt-4 mb-4 text-2xl text-white drop-shadow-3xl">
          #4 in the United Arab Emirates Today
        </h3>
        <h3 className="text-xl text-white drop-shadow-3xl">
          People Rob a bank. In Hd.
        </h3>
      </div>
      <div className="py-16 bg-black ">
        <BrowseCarousel title={"My List"} slug="movie/popular" />
        <BrowseCarousel title={"Popular on Netflix"} slug="tv/popular" />
        <BrowseCarousel title={"Trending Now"} slug="trending/all/day" />
        <BrowseCarousel title={"Top Rated Tv"} slug="tv/top_rated" />

        {/* <div className="relative z-50 flex items-center hidden -mt-20 text-white drop-shadow-4xl justify-evenly">
          <div className="flex flex-col items-center">
            <PlusIcon width="30" />
            My List
          </div>
          <div className="flex flex-col items-center">
            <PlayIcon width="30" />
            Play
          </div>
          <div className="flex flex-col items-center">
            <InformationCircleIcon width="30" />
            info
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default BrowseHero;
