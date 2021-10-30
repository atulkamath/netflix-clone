const SearchBar = () => {
  return (
    <div className="flex items-end justify-end lg:hidden ">
      <input
        className="w-3/5 px-2 py-1 text-gray-400 border border-white bg-actual-gray"
        type="text"
        placeholder="Search"
        name="search"
      />
    </div>
  );
};

export default SearchBar;
