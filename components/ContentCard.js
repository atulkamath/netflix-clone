import Image from "next/image";

const ContentCard = (props) => {
  return (
    <div className="text-white text-center bg-black p-6 border-t-8 border-actual-gray sm:px-24 lg:p-14 lg:px-32 lg:flex lg:justify-center  lg:items-center lg:text-left  lg:even:flex-row-reverse  ">
      <div>
        <h1 className="font-semibold text-2xl mt-8 sm:text-4xl lg:text-5xl">
          {props.title}
        </h1>
        <h2 className="text-lg mt-4 mx-0.5 lg:text-3xl lg:w-4/5">
          {props.subtitle}
        </h2>
      </div>
      <div className="lg:even:mr-24 ">
        <Image src={props.img}></Image>
      </div>
    </div>
  );
};

export default ContentCard;
