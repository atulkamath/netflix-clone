import {
  InformationCircleIcon,
  PlayIcon,
  VolumeOffIcon,
  VolumeUpIcon,
} from "@heroicons/react/solid";
import Image from "next/image";
import React, { useState } from "react";
import BrowseCarousel from "./BrowseCarousel";
import ReactVideo from "./ReactVideo";

const BrowseHero = () => {
  const [mute, setMute] = useState(null);
  const toggle = () => setMute(!mute);
  return (
    <div className="fixed w-full h-screen overflow-x-hidden overscroll-contain lg:block ">
      <div className="absolute z-0 w-screen h-screen bg-black opacity-10 " />
      <ReactVideo
        className="hidden lg:block"
        url="/video.mp4"
        width="100%"
        height="100%"
        volume={1}
      />

      <div className="hidden w-1/2 p-12 lg:top-32 lg:block lg:absolute drop-shadow-2xl">
        <Image
          className=""
          src="https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABfp5_exPnNUZnDZIPJsnSttBiba9tCC2-056d6YlKtS0ntsLFE4Wi2hd_fZXsbO_jXoztbMNX63wldZmThL1W6HDTyrB2PmtEO41ftM-A7sTZOzqPEqIXKKcNZ12_z6rNQTXuIMn-SY5aP80ByhYYeq-nXMSFcGyJntaHJDtm2iTCg.png?r=7c3"
          height={150}
          width={600}
        />
        <h3 className="flex items-center mt-4 mb-4 text-2xl text-white ">
          <div className="flex flex-col items-center justify-center w-8 mr-4 text-sm font-bold rounded-sm drop-shadow-5xl bg-netflix-red ">
            Top <span>10</span>
          </div>
          #4 in the United Arab Emirates Today
        </h3>
        <h3 className="text-2xl text-white ">People Rob a bank. In Hd.</h3>
        <div className="flex w-screen mt-4 ">
          <button className="flex items-center justify-center w-24 px-3 py-1 mr-2 bg-white rounded-sm">
            <PlayIcon className="w-8 h-8 mr-1" />
            Play
          </button>
          <button className="flex items-center rounded-sm bg-[#6d6d6d] w-36 text-white justify-center">
            <InformationCircleIcon className="w-8 h-8 mr-2" />
            More Info
          </button>
          <button
            onClick={toggle}
            className="flex items-center justify-center ml-auto text-white rounded-sm "
          >
            {mute ? (
              <VolumeUpIcon className="mr-4 w-7 h-7 " />
            ) : (
              <VolumeOffIcon className="mr-4 w-7 h-7 " />
            )}
          </button>
          <div className="flex items-center border-l-4 text-lg justify-start bg-[#6d6d6d49] w-40 text-white pl-4">
            18+
          </div>
        </div>
      </div>
      <div className="py-16 bg-black lg:-mt-48 lg:py-0 opacity-55">
        <BrowseCarousel title={"Popular on Netflix"} slug="movie/popular" />
        <BrowseCarousel title={"Top Rated"} slug="movie/top_rated" />
        <BrowseCarousel title={"Upcoming Movies"} slug="movie/upcoming" />
        <BrowseCarousel title={"Latest"} slug="tv/popular" />
      </div>
    </div>
  );
};

export default BrowseHero;
