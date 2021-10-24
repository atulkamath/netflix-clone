import Image from "next/image";

const ContentCard = (props) => {
    return (
        <div
            className=" tracking-wide text-white text-center bg-black py-6 px-4 border-t-8 border-actual-gray sm:px-24 lg:flex lg:text-left lg:odd:flex-row-reverse lg:w-full lg:justify-center lg:items-center">
            <div className="max-w-xl lg:mx-12">
                <h1 className="text-2xl font-semibold lg:text-5xl mt-2 mb-4 lg:font-bold ">{props.title}</h1>
                <h2 className=" font-light text-lg lg:text-3xl lg:font-light">{props.subtitle}</h2>
            </div>
            <div className=" max-w-md">
                <Image src={props.img}></Image>
            </div>
        </div>
    );
};

export default ContentCard;
