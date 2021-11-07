import { Menu, Transition } from "@headlessui/react";
import {
  BellIcon,
  ChevronDownIcon,
  MenuIcon,
  SearchIcon,
} from "@heroicons/react/solid";
import { signOut, useSession } from "next-auth/client";
import Image from "next/image";
import { Fragment, useState } from "react";
import NetflixMenu from "./Menu";
import SearchBar from "./SearchBar";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const BrowseHeader = () => {
  const [session] = useSession();
  const [navbar, setNavbar] = useState("");
  const [menu, setMenu] = useState(false);

  const changeNavBackground = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else setNavbar(false);
  };

  window.addEventListener("scroll", changeNavBackground);

  return (
    <nav>
      <div
        className={
          navbar
            ? "  fixed z-40 flex items-center justify-start w-screen px-4 bg-gradient-to-b from-black via-black to-black transition-none duration-1000 ease-linear lg:block"
            : "  fixed z-40 flex items-center justify-start w-screen px-4 bg-gradient-to-b from-black via-light-black to-transparent lg:block"
        }
      >
        <div className="flex items-center justify-center mr-auto text-white">
          <MenuIcon
            width={30}
            height={30}
            color="white"
            className="mr-2 lg:hidden"
            onClick={() => {
              !menu ? setMenu(true) : setMenu(false);
            }}
          />
          <Image src="/netflix-3.svg" width={80} height={60} />
          <ul className="hidden ml-12 space-x-6 lg:block">
            <li className="inline">
              <a href="/browse">Home</a>
            </li>
            <li className="inline">
              <a href="#">Watch Again</a>
            </li>
            <li className="inline">
              <a href="#"> TV Shows</a>
            </li>
            <li className="inline">
              <a href="#">Movies</a>
            </li>
            <li className="inline">
              <a href="#">New & Popular</a>
            </li>
            <li className="inline">
              <a href="#">My List</a>
            </li>
          </ul>
          <div className="ml-auto space-x-6 lg:items-center lg:justify-center lg:flex">
            <SearchIcon className="hidden text-white lg:inline " width={20} />
            <li className="hidden lg:inline">
              <a href="#">Kids</a>
            </li>

            <BellIcon className="hidden text-white lg:inline " width={20} />
            <Menu
              as="div"
              className="relative hidden text-left lg:inline-block"
            >
              <div>
                <Menu.Button className="flex items-center justify-center">
                  <img
                    className="hidden w-10 h-10 bg-cover lg:block "
                    style={{ backgroundImage: `url(${session.user.image})` }}
                  />
                  <ChevronDownIcon
                    className="w-5 h-5 ml-2 "
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right rounded-md shadow-lg bg-[#000000d0] ring-1 ring-black focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? "bg-black text-white" : "text-white",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Account
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? "bg-black text-white" : "text-white",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Help Center
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href={`/api/auth/signout`}
                          className={classNames(
                            active ? "bg-black text-white" : "text-white",
                            "block px-4 py-2 text-sm"
                          )}
                          onClick={(e) => {
                            e.preventDefault();
                            signOut({
                              callbackUrl:
                                "https://netflix-clone-murex-seven.vercel.app/",
                            });
                          }}
                        >
                          Sign out
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
        <SearchBar />
      </div>
      {menu ? <NetflixMenu /> : <></>}
    </nav>
  );
};

export default BrowseHeader;
