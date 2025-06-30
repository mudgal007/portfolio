import React from "react";
import classNames from "clsx";
import { BiChevronDown, BiDotsHorizontalRounded } from "react-icons/bi";
import { TfiHome, TfiPencilAlt } from "react-icons/tfi";
import { SlBriefcase, SlEnvolope, SlTrophy, SlUser } from "react-icons/sl";
import {
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
} from "react-icons/io5";

const menu = [
  {
    name: "Home",
    slug: "/",
    Icon: TfiHome,
  },

  {
    name: "About",
    slug: "/about",
    Icon: SlUser,
  },
  {
    name: "Services",
    slug: "/services",
    Icon: SlBriefcase,
  },
  // {
  //   name: "Articles",
  //   slug: "/blogs",
  //   Icon: TfiPencilAlt,
  // },
  {
    name: "Projects",
    slug: "/projects",
    Icon: SlTrophy,
  },
  {
    name: "Contact",
    slug: "/contact",
    Icon: SlEnvolope,
  },
];

// const social = [
//   {
//     name: "Twitter",
//     url: "https://www.twitter.com/",
//     Icon: IoLogoTwitter,
//   },
//   {
//     name: "Instagram",
//     url: "https://www.instagram.com/",
//     Icon: IoLogoInstagram,
//   },
//   {
//     name: "LinkedIn",
//     url: "https://www.linkedin.com/",
//     Icon: IoLogoLinkedin,
//   },
// ];

const MenuItem = ({
  name,
  Icon,
  text,
  slug,
  number,
  isOpen,
  url,
  toggleMenu,
  ...rest
}) => (
  <a
    href={slug}
    className={classNames(
      "h-16 md:h-auto",
      "relative z-20 flex flex-col items-center justify-center md:py-4",
      "bg-gradient-to-tr  transition-all duration-300",
      `${
        url === slug
          ? "from-purple-500 via-pink-500 to-red-500 text-black"
          : "group md:hover:from-accent-700 md:hover:to-accent"
      }`
    )}
    aria-label={name}
    {...rest}
  >
    <div
      className={classNames(
        "absolute right-full top-0 h-full min-w-max px-4",
        "hidden items-center bg-accent text-sm font-medium text-white md:flex",
        "invisible translate-x-10 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-x-0 group-hover:opacity-100"
      )}
    >
      {name}
    </div>
    {number && (
      <div className="absolute bottom-2 right-2 hidden h-4 w-4 text-center font-mono text-xs font-bold md:block">
        {number}
      </div>
    )}
    <span className="absolute top-0 right-0 hidden h-full w-1 bg-white/25 opacity-0 transition-opacity group-hover:opacity-100 md:block" />
    {Icon && <Icon className="relative z-20 h-6 w-6 text-white" />}
    {text && (
      <div className="relative z-20 h-6 text-lg font-extrabold text-white">
        {text}
      </div>
    )}
    <span className="mt-1 text-center text-xs md:hidden text-white">
      {name}
    </span>
  </a>
);

const SocialLink = ({ url, name, Icon }) => (
  <a
    href={url}
    className="group block flex-1 text-center"
    rel="noopener noreferrer"
    target="_blank"
    title={name}
  >
    {Icon && (
      <img
        src={Icon}
        alt="social-icon"
        className="mx-auto h-12 w-6 text-white md:text-omega-500 md:group-hover:text-[#EF4663]"
      />
    )}
  </a>
);

const Menu = ({ url, socialData }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => setIsOpen((open) => !open);
  const closeMenu = () => setIsOpen(false);

  let urlLink;

  if (url === "/") {
    urlLink = url;
  } else if (url.endsWith("/")) {
    urlLink = url.slice(0, -1);
  } else {
    urlLink = url;
  }

  return (
    <>
      <div
        className={classNames(
          "fixed top-0 left-0 z-10 block w-full animate-fade-in bg-black/90 md:hidden",
          isOpen ? "h-screen" : "h-0"
        )}
        onClick={closeMenu}
      />

      <div
        className={classNames(
          "bg-[#1E1E21] shrink-0 flex-col items-center justify-between md:flex",
          "fixed left-0 top-full z-40 w-full md:w-16",
          "md:sticky md:top-20 md:h-[calc(100vh-theme(space.40))]",
          "transition-transform md:translate-y-0",
          isOpen ? "-translate-y-full" : "-translate-y-16"
        )}
      >
        {menu && (
          <div className="grid w-full grid-cols-4 md:bg-omega-900 md:block">
            {menu &&
              menu.map((item) => (
                <MenuItem
                  {...item}
                  key={`${item.slug}`}
                  onClick={closeMenu}
                  url={urlLink}
                />
              ))}
            <div
              className={classNames(
                "row-start-1 flex h-16 items-center md:hidden",
                isOpen
                  ? "col-span-4 col-start-1"
                  : "bg-gradient-omega-900 col-start-4"
              )}
              onClick={toggleMenu}
            >
              <span className="md:none mx-auto block text-7xl text-omega-100">
                {isOpen ? (
                  <BiChevronDown className="animate-grow-in" />
                ) : (
                  <BiDotsHorizontalRounded className="animate-grow-in" />
                )}
              </span>
            </div>
          </div>
        )}

        {socialData?.socialList && (
          <div className="flex w-full flex-wrap bg-accent md:block md:bg-omega-800">
            {socialData?.socialList?.map((item, i) => (
              <SocialLink key={`${i}-social`} {...item} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Menu;
