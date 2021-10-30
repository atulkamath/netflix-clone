import Image from "next/image";

const ContentCard = (props) => {
  return (
    <div className="px-4 py-6 tracking-wide text-center text-white bg-black border-t-8 border-actual-gray sm:px-24 lg:flex lg:flex-row lg:text-left lg:odd:flex-row-reverse lg:w-full lg:justify-center lg:items-center md:flex md:items-center md:justify-center md:flex-col">
      <div className="max-w-xl lg:mx-12">
        <h1 className="mt-2 mb-4 text-2xl font-semibold lg:text-5xl lg:font-bold ">
          {props.title}
        </h1>
        <h2 className="text-lg font-light lg:text-3xl lg:font-light">
          {props.subtitle}
        </h2>
      </div>
      <div className="max-w-md ">
        <Image src={props.img}></Image>
      </div>
    </div>
  );
};

export default ContentCard;
