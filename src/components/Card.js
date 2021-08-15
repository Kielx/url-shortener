import React from "react";

const Card = ({ header, text, icon }) => {
  return (
    <div className="flex flex-col max-w-sm pb-6 bg-white mx-4 rounded-md px-12 ">
      <div className="rounded-full bg-darkViolet m-auto p-5 relative -top-10">
        <img src={icon} alt="icon" />
      </div>
      <h4 className="relative -top-6 text-xl text-center font-bold">
        {header}
      </h4>
      <p className="text-gray-500 text-center">{text}</p>
    </div>
  );
};

export default Card;
