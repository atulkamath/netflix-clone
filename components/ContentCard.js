import Image from "next/image";

const ContentCard = (props) => {
  return (
    <div className=" text-white text-center bg-black p-4 border-t-8 border-actual-gray lg:p-24 lg:px-36 lg:flex lg:text-left lg:items-center lg:justify-center lg:odd:flex-row-reverse">
      <div>
        <h1 className="font-semibold text-2xl mt-8 sm:text-4xl lg:text-5xl">
          {props.title}
        </h1>
        <h2 className="text-lg mt-4 mx-0.5 lg:text-3xl lg:w-4/5">
          {props.subtitle}
        </h2>
      </div>
      <div className="flex">
        <Image className="m-5" src={props.img}></Image>
      </div>
    </div>
  );
};

export default ContentCard;
