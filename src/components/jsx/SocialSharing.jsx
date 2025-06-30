import React from "react";

const SocialSharing = ({ ele }) => {
  const url = window.location.href;
  return (
    <a
      href={`${ele?.data?.url}${url}`}
      target="_blank"
      aria-label={ele?.data?.name}
      //   style="background-color: transparent; border: none; padding: 0px; font: inherit; color: inherit; cursor: pointer; outline: none;"
      className="bg-transparent border-none p-0 text-inherit cursor-pointer outline-none"
    >
      <img src={ele?.data?.image} alt="icons" className="m-1" />
    </a>
  );
};

export default SocialSharing;
