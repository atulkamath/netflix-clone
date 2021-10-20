import Image from "next/image";
import React from "react";
import ReactPlayer from "react-player";

{
  /* https://vod-progressive.akamaized.net/exp=1634663955~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2775%2F21%2F538877060%2F2554448079.mp4~hmac=c441e9fe9fdc8aa231c233d54ea7e620c39c533fa442e4ad596033aeca9a1062/vimeo-prod-skyfire-std-us/01/2775/21/538877060/2554448079.mp4?filename=Waves+-+70796.mp4 */
}

const BrowseHero = () => {
  return (
    <div className="flex relative pt-56">
      <ReactPlayer
        className="absolute top-0 left-0"
        controls
        url="/video.mp4"
        width="100%"
        height="100%"
        volume={1}
      />
    </div>
  );
};

export default BrowseHero;
