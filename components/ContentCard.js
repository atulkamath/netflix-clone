import Image from "next/image";

const ContentCard = (props) => {
  return (
    <div className="text-white text-center bg-black p-6 border-t-8 border-actual-gray sm:px-24 lg:flex lg:text-left lg:odd:flex-row-reverse lg:w-full lg:justify-center lg:items-center">
      <div className="max-w-xl lg:mx-12">
        <h1 className="lg:text-5xl lg:mb-4 lg:font-bold ">{props.title}</h1>
        <h2 className="lg:text-3xl lg:font-light">{props.subtitle}</h2>
      </div>
      <div className=" max-w-md">
        <Image src={props.img}></Image>
      </div>
    </div>
  );
};

export default ContentCard;
