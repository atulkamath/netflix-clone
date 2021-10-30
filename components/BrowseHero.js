import Image from "next/image";
import React from "react";
import ReactVideo from "./ReactVideo";
import {
  PlusIcon,
  PlayIcon,
  InformationCircleIcon,
} from "@heroicons/react/solid";

{
  /* https://vod-progressive.akamaized.net/exp=1634663955~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2775%2F21%2F538877060%2F2554448079.mp4~hmac=c441e9fe9fdc8aa231c233d54ea7e620c39c533fa442e4ad596033aeca9a1062/vimeo-prod-skyfire-std-us/01/2775/21/538877060/2554448079.mp4?filename=Waves+-+70796.mp4 */
}

const BrowseHero = () => {
  return (
    <div className="relative w-full ">
      <ReactVideo
        controls
        url="/video.mp4"
        width="100%"
        height="100%"
        volume={1}
      />
      {/* <div className="p-6 text-6xl text-white bg-gradient-to-b from-light-black via-light-black to-black lg:absolute lg:top-1/4 lg:drop-shadow-3xl"></div> */}
      <div className="h-screen p-5 flex flex-col  bg-gradient-to-t from-[#000000d3] to-black text-white ">
        <Image
          src="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABfp5_exPnNUZnDZIPJsnSttBiba9tCC2-056d6YlKtS0ntsLFE4Wi2hd_fZXsbO_jXoztbMNX63wldZmThL1W6HDTyrB2PmtEO41ftM-A7sTZOzqPEqIXKKcNZ12_z6rNQTXuIMn-SY5aP80ByhYYeq-nXMSFcGyJntaHJDtm2iTCg.png?r=7c3"
          layout="responsive"
          width={70}
          height={15}
          className=""
        />
        <br />
        <h2 className="text-2xl font-bold">Money Heist</h2>
        <ul className="mt-2 space-x-3 text-gray-400 divide-x ">
          <li className="inline ">2017</li>
          <li className="inline pl-2">18+</li>
          <li className="inline pl-2">5 Seasons</li>
          <li className="inline pl-2">Tv Thrillers</li>
        </ul>
        <h3 className="mt-4 mb-4 text-base ">
          Eight thieves take hostages and lock themselves in the Royal Mint of
          Spain as a criminal mastermind manipulates the police to carry out his
          plan.
        </h3>
        <div className="flex items-center mt-8 mr-4 justify-evenly">
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
        </div>
        {/* <h4 className="text-xs">
          <span className="text-gray-400">Starring:</span> Úrsula Corberó,
          Álvaro Morte, Itziar Ituño
        </h4>
        <h4 className="text-xs">
          <span className="text-gray-400">Creators:</span>
          Álex Pina
        </h4>
      <h3 className="py-2 mt-6 text-base text-gray-400 border-t border-b border-actual-gray ">
      This riveting crime series won Best Drama at the International Emmy
      Awards, Premios Fénix and Premios Iris (plus six more Iris wins).
      </h3> */}
      </div>
    </div>
  );
};

export default BrowseHero;
