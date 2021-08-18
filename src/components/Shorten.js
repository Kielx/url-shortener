import React, { useState } from "react";
import backgroundMobile from "../images/bg-shorten-mobile.svg";
import backgroundDesktop from "../images/bg-shorten-desktop.svg";
import ShortenLink from "./ShortenLink";
import LoadingSpinner from "./LoadingSpinner";

const checkScreenWidth = () => {
  if (typeof window !== `undefined`) {
    return window.innerWidth > 1024;
  }
};

const Shorten = () => {
  const [longLink, setLongLink] = useState("");
  const [linkList, setLinkList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    invalidURL: { message: `Please enter a valid URL`, status: false },
    noURL: { message: `No URL specified`, status: false },
    fetching: { message: `There was an error while shortening`, status: false },
  });

  async function shortenLink(link) {
    setLoading(true);
    Object.keys(errors).map((key) => {
      return (errors[key].status = false);
    });
    try {
      const response = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${link}`
      );
      let data = await response.json();
      console.log(data);
      if (data.ok) {
        setLoading(false);
        return setLinkList((oldList) => [...oldList, data.result]);
      }
      if (data.error_code === 2) {
        let errs = errors;
        errs.invalidURL.status = true;
        console.log(errors);
        setErrors(errs);
        setLoading(false);
        setTimeout(() => {
          setErrors({
            ...errs,
            invalidURL: { ...errors.invalidURL, status: false },
          });
        }, 5000);
        return;
      }
      if (data.error_code === 1) {
        let errs = errors;
        errs.noURL.status = true;
        setLoading(false);
        setTimeout(() => {
          setErrors({
            ...errs,
            noURL: { ...errors.noURL, status: false },
          });
        }, 5000);
        return;
      }
    } catch (e) {
      let errs = errors;
      errs.fetching.status = true;
      setLoading(false);
      setTimeout(() => {
        setErrors({
          ...errs,
          fetching: { ...errors.fetching, status: false },
        });
      }, 5000);
      return;
    }
  }

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
          onChange={(e) => setLongLink(e.target.value)}
        ></input>
        <button
          onClick={(e) => {
            e.preventDefault();
            shortenLink(longLink);
          }}
          className="md:w-2/12 whitespace-nowrap inline-flex items-center justify-center px-4 py-3 border border-transparent rounded-md shadow-sm text-base font-bold text-white bg-cyan hover:bg-teal-500"
        >
          Shorten it!
        </button>
        {Object.keys(errors).map((key) => {
          if (errors[key].status) {
            return (
              <div
                className="transition-all bg-red-500 px-4 py-2 border-t border-transparent rounded-md shadow-sm"
                key={key}
              >
                {errors[key].message}
              </div>
            );
          }
          return null;
        })}
      </section>
      {linkList.map((link, index) => (
        <ShortenLink
          key={index}
          longLink={link.original_link}
          shortLink={link.short_link}
          fullShortLink={link.full_short_link}
        />
      ))}
      {loading ? (
        <section className="relative md:divide-y-0 divide-y -top-20 mt-4 md:px-10 md:py-3 md:space-x-4 md:space-y-0 md:items-center flex flex-col md:flex-row w-10/12 m-auto p-5 rounded-lg bg-white bg-cover bg-no-repeat space-y-4">
          <span className="text-gray-400">
            {`Shortening your URL. Please wait, it might take a (long) while...`}
          </span>
          <LoadingSpinner />
        </section>
      ) : null}
    </>
  );
};

export default Shorten;
