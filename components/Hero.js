import Register from "./Register";

const Hero = () => {
  return (
    <div className="flex flex-col text-white text-center justify-center items-center pt-12 px-6  ">
      <h1 className=" text-3xl font-semibold  lg:text-5xl lg:w-2/5">
        Unlimited movies, TV shows, and more.
      </h1>
      <h2 className=" text-lg m-5 lg:text-3xl">
        Watch Anywhere. Cancel anytime.
      </h2>
      <Register />
    </div>
  );
};

export default Hero;
