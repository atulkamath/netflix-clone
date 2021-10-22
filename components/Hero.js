import Register from "./Register";

const Hero = () => {
  return (
    <div className="flex flex-col text-white text-center justify-center items-center pt-12 px-6 sm:p-36     ">
      <h1 className=" text-3xl font-semibold sm:text-5xl  lg:text-5xl lg:w-2/5">
        Unlimited movies, TV shows, and more.
      </h1>
      <h2 className=" text-lg m-5 lg:text-3xl sm:text-2xl ">
        Watch Anywhere. Cancel anytime.
      </h2>
      <Register />
    </div>
  );
};

export default Hero;
