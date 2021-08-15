import React from "react";
import Shorten from "./Shorten";
import Card from "./Card";
import detailedRecordsIcon from "../images/icon-detailed-records.svg";
import brandRecognitionIcon from "../images/icon-brand-recognition.svg";
import iconFullyCustomizable from "../images/icon-fully-customizable.svg";

const cards = [
  {
    header: "Detailed Records",
    text: "Gain insights into who is clicking your links. See who is using your site and how often.",
    icon: detailedRecordsIcon,
  },
  {
    header: "Brand Recognition",
    text: "Brand Recognition Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
    icon: brandRecognitionIcon,
  },
  {
    header: "Fully Customizable",
    text: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    icon: iconFullyCustomizable,
  },
];

const Statistics = () => {
  return (
    <div className="bg-gray-100 pb-20">
      <Shorten />
      <div className="flex flex-col items-center">
        <h3 className="font-bold text-2xl text-center">Advanced Statistics </h3>
        <p className="pb-20 pt-6 text-md text-center text-gray-500">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
        <div className="">
          {cards.map((card, index) => (
            <>
              <Card key={card.header} {...card} />

              {index < cards.length - 1 ? (
                <div className="md:hidden bg-cyan w-2 h-24 m-auto"></div>
              ) : null}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistics;
