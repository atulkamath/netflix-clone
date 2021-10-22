const ReactVideo = ({ ...restProps }) => {
  return (
    // <video autoPlay muted loop className="">
    //   <source src="/video.mp4" type="video/mp4" />
    //   Your browser does not support the video tag.
    // </video>
    <div
      {...restProps}
      dangerouslySetInnerHTML={{
        __html: `<video  autoplay loop muted playsinline class="w-screen">
<source src=/video.mp4 type="video/mp4" />
Your browser does not support the video tag.
</video>`,
      }}
    />
  );
};

export default ReactVideo;
