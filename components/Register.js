const Register = () => {
  return (
    <div className="flex flex-col text-white text-center justify-center items-center mb-8 ">
      <h2 className="text-lg mb-1 sm:text-2xl lg:font-light lg:text-lg ">
        Ready to watch? Enter your email to create or restart your membership.
      </h2>
      <div className="lg:flex lg:flex-row ">
        <input
          className="w-11/12 h-12 mt-2 p-5 lg:h-14"
          type="text"
          name="text-input"
          placeholder="Email address"
        ></input>
        <button className=" w-40 h-10 m-5 rounded text-white bg-netflix-red lg:w-96 lg:h-14 lg:rounded-none lg:m-0 lg:mt-2 lg:text-2xl">
          Get Started &gt;
        </button>
      </div>
    </div>
  );
};

export default Register;
