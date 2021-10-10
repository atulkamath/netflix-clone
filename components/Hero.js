import Register from "./Register";

const Hero = () => {
  return (
    // sm:text-4xl font-medium h-screen text-3xl  sm:text-6xl lg:text-6xl
    <div className="flex flex-col text-white text-center justify-center items-center h-60v sm:h-screen lg:h-4/5">
      <h1 className=" text-3xl  lg:text-6xl lg:w-2/5 ">
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
