import { signOut, useSession } from "next-auth/client";

const Menu = () => {
  const [session] = useSession();

  return (
    <div className="absolute z-30 w-9/12 md:w-5/12 h-screen text-[#999797] py-20 bg-black">
      <div className="px-6 border-b ">
        {session && (
          <div className="overflow-auto ">
            <img
              className="float-left w-10 h-10 mr-2 bg-cover "
              style={{ backgroundImage: `url(${session.user.image})` }}
            />
            <div className="float-left">
              <p>{session.user.name}</p>
              <h3 className="text-xs">Switch Profiles</h3>
            </div>
          </div>
        )}
        <div className="mt-2 mb-2 overflow-auto text-lg font-semibold sm:text-base">
          <ul>
            <li>Account</li>
            <li>Help Center</li>
            <li>
              {" "}
              <a
                href={`/api/auth/signout`}
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}
              >
                Sign out of Netflix
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="px-6 mt-2 text-lg font-semibold sm:text-base ">
        <ul className="space-y-2 ">
          <li className="">
            <a href="#">Home</a>
          </li>
          <li tabIndex="1">
            <a href="#">My List</a>
          </li>
          <li>
            <a href="#">Thrillers</a>
          </li>
          <li>
            <a href="#">Middle Eastern Movies & TV</a>
          </li>
          <li>
            <a href="#">Children & Family</a>
          </li>
          <li>
            <a href="#">Reality TV</a>
          </li>
          <li>
            <a href="#">Action</a>
          </li>
          <li>
            <a href="#">Anime</a>
          </li>
          <li>
            <a href="#">Comedies</a>
          </li>
          <li>
            <a href="#">Fantasy</a>
          </li>
          <li>
            <a href="#">Sci-Fi</a>
          </li>
          <a href="#">Horror</a>
          <li>
            <a href="#">Stand-Up Comedy</a>
          </li>
          <li>
            <a href="#">Documentaries</a>
          </li>
          <li>
            <a href="#">Music & Musicals</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
