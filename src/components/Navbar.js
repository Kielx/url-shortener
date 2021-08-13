import { Fragment, useEffect } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  //{ name: "Dashboard", href: "#", current: false },
  //{ name: "Home", link: "/", current: false },
  { name: "Features", link: "/features", current: false },
  { name: "Pricing", link: "/pricing", current: false },
  { name: "Resources", link: "/resources", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar({ isLoggedIn, saveData, saved }) {
  const { pathname } = useLocation();
  useEffect(() => {
    //check useLocation to see on which page we are
    //then set navigation.current to true or false
    navigation.forEach((item) => {
      if (item.hasOwnProperty("link")) {
        if (item.link === pathname) {
          item.current = true;
        } else {
          item.current = false;
        }
      }
    });
  }, [pathname]);

  return (
    <>
      <Disclosure as="nav" className="bg-gray-50">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {/* Menu icon */}
                    {open ? (
                      <div
                        className="flex items-center h-6 w-6"
                        aria-hidden="true"
                      >
                        <svg
                          version="1.1"
                          id="Layer_1"
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="121.31px"
                          height="122.876px"
                          viewBox="0 0 121.31 122.876"
                          enable-background="new 0 0 121.31 122.876"
                        >
                          <g>
                            <path
                              fill-rule="evenodd"
                              fill="#fff"
                              clip-rule="evenodd"
                              d="M90.914,5.296c6.927-7.034,18.188-7.065,25.154-0.068 c6.961,6.995,6.991,18.369,0.068,25.397L85.743,61.452l30.425,30.855c6.866,6.978,6.773,18.28-0.208,25.247 c-6.983,6.964-18.21,6.946-25.074-0.031L60.669,86.881L30.395,117.58c-6.927,7.034-18.188,7.065-25.154,0.068 c-6.961-6.995-6.992-18.369-0.068-25.397l30.393-30.827L5.142,30.568c-6.867-6.978-6.773-18.28,0.208-25.247 c6.983-6.963,18.21-6.946,25.074,0.031l30.217,30.643L90.914,5.296L90.914,5.296z"
                            />
                          </g>
                        </svg>
                      </div>
                    ) : (
                      <div
                        className="flex items-center h-8 w-8"
                        aria-hidden="true"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="icon icon-tabler icon-tabler-menu-2"
                          width="44"
                          height="44"
                          viewBox="0 0 24 24"
                          stroke-width="2.5"
                          stroke="#9e9e9e"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <line x1="4" y1="6" x2="20" y2="6" />
                          <line x1="4" y1="12" x2="20" y2="12" />
                          <line x1="4" y1="18" x2="20" y2="18" />
                        </svg>
                      </div>
                    )}
                  </Disclosure.Button>
                </div>
                {/* Logo*/}
                <div className="flex-1 flex justify-start sm:items-center sm:justify-start">
                  <h1>
                    <a href="#" className="logo font-bold text-2xl">
                      Shortly
                    </a>
                  </h1>
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4 items-bottom justify-center">
                      {/* Map Navigation items - href or links to pages*/}
                      {navigation.map((item) =>
                        item.hasOwnProperty("href") ? (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? "bg-gray-900 text-white"
                                : "text-gray-300 hover:bg-gray-700 hover:text-white",
                              "px-3 py-2 rounded-md text-sm font-medium"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </a>
                        ) : (
                          <Link
                            key={item.name}
                            to={item.link}
                            className={classNames(
                              item.current
                                ? "bg-gray-900 text-yellow-500"
                                : "text-gray-300 hover:bg-gray-700 hover:text-yellow-600",
                              "px-3 py-2 rounded-md text-sm font-medium"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 hidden sm:flex gap-6 items-center sm:static sm:inset-auto ">
                  <Link to="/login">Login</Link>
                  <Link to="/signup">Sign Up</Link>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) =>
                  item.hasOwnProperty("href") ? (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "block px-3 py-2 rounded-md text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      key={item.name}
                      to={item.link}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "block px-3 py-2 rounded-md text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  )
                )}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <div
        className={`bg-indigo-900 text-center py-4 lg:px-4 ${
          saved ? "absolute inset-x-0 md:top-20 top-32" : "hidden"
        }`}
      >
        <div
          className="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
          role="alert"
        >
          <span className="flex rounded-full bg-indigo-600 uppercase px-2 py-1 text-xs font-bold mr-3">
            SUCCESS
          </span>
          <span className="font-semibold mr-2 text-left flex-auto">
            Your workout was saved!
          </span>
        </div>
      </div>
    </>
  );
}
