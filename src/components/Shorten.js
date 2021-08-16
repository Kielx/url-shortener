import React from "react";
import { Link } from "react-router-dom";
import backgroundMobile from "../images/bg-shorten-mobile.svg";
import backgroundDesktop from "../images/bg-shorten-desktop.svg";

const checkScreenWidth = () => {
  if (typeof window !== `undefined`) {
    return window.innerWidth > 1024;
  }
};

const Shorten = () => {
  return (
    <>
      <section
        className="relative -top-20 md:px-10 md:py-10 md:space-x-4 md:space-y-0 md:items-center flex flex-col md:flex-row w-10/12 m-auto p-5 rounded-lg bg-darkViolet bg-cover bg-no-repeat space-y-4"
        style={{
          backgroundImage: `url(${
            checkScreenWidth() ? backgroundDesktop : backgroundMobile
          })`,
          backgroundPosition: `60px -40px`,
        }}
      >
        <input
          type="text"
          className="md:w-10/12 whitespace-nowrap inline-flex items-center justify-center px-4 py-3 border border-transparent rounded-md shadow-sm text-base font-medium placeholder-gray-400 "
          placeholder="Shorten a link here..."
        ></input>
        <button className="md:w-2/12 whitespace-nowrap inline-flex items-center justify-center px-4 py-3 border border-transparent rounded-md shadow-sm text-base font-bold text-white bg-cyan hover:bg-teal-500">
          Shorten it!
        </button>
      </section>
      <section className="relative md:divide-y-0 divide-y -top-20 mt-4 md:px-10 md:py-3 md:space-x-4 md:space-y-0 md:items-center flex flex-col md:flex-row w-10/12 m-auto p-5 rounded-lg bg-white bg-cover bg-no-repeat space-y-4">
        <div className="md:w-7/12">https://Longlinkdotorg.com/12&321#22</div>
        <Link to="#" className="md:text-right md:w-3/12 text-cyan pt-4 md:pt-0">
          https://Short.cc/12
        </Link>
        <button className="md:w-2/12 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-bold text-white bg-cyan hover:bg-teal-500">
          Copy
        </button>
      </section>
    </>
  );
};

export default Shorten;
