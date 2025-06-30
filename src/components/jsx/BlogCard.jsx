import { useState } from "react";
const BlogCard = ({ category, data, slug, selected }) => {
  if (category !== selected && selected !== "all") {
    return;
  }

  return (
    <div className="blog group prose prose-zinc block flex flex-col from-omega-900 via-omega-900 to-omega-800 dark:prose-invert dark:sm:bg-gradient-to-b dark:sm:shadow-md">
      <a
        aria-label={data?.title}
        className="not-prose block h-48 w-full overflow-hidden md:h-64"
        href={`/blogs/${slug}`}
      >
        <div className="relative overflow-hidden h-full w-full transition-transform group-hover:scale-105 duration-300 ease-out before:bg-omega-700">
          <div className="absolute left-0 top-0 z-10 hidden h-full w-[120%] bg-omega-900 origin-bottom skew-x-6 transform-gpu transition-transform duration-700"></div>
          <img
            alt="image alt attribute"
            sizes="(min-width: 768px) 428px, 100vw"
            src={data?.image}
            decoding="async"
            data-nimg="fill"
            className="md:transform-gpu md:transition-all md:duration-700 object-cover"
            loading="lazy"
          />
        </div>
      </a>
      <div className="flex grow flex-col py-4 sm:p-6">
        <div className="space-x-1">
          <span className="inline-block select-none px-3 py-1 uppercase no-underline bg-beta/10 text-beta hover:bg-beta/20 m-0.5 font-mono text-sm lg:mr-2 no-underline">
            {category}
          </span>
        </div>
        <a
          aria-label="Marketing Automation - Tips and Tricks for Streamlining Your Campaigns "
          className="no-underline"
          href={`blogs/${slug}`}
        >
          <div className="text-[1.5rem] font-bold my-4 transition-colors group-hover:text-accent dark:group-hover:text-alpha">
            {data?.title}
          </div>
        </a>
        <small className="mb-4 text-omega-400">{data?.description}</small>
        <div className="mt-auto ">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            className="mr-2 inline h-6 w-6"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="416"
              height="384"
              x="48"
              y="80"
              fill="none"
              strokeLinejoin="round"
              strokeWidth="32"
              rx="48"
            ></rect>
            <circle cx="296" cy="232" r="24"></circle>
            <circle cx="376" cy="232" r="24"></circle>
            <circle cx="296" cy="312" r="24"></circle>
            <circle cx="376" cy="312" r="24"></circle>
            <circle cx="136" cy="312" r="24"></circle>
            <circle cx="216" cy="312" r="24"></circle>
            <circle cx="136" cy="392" r="24"></circle>
            <circle cx="216" cy="392" r="24"></circle>
            <circle cx="296" cy="392" r="24"></circle>
            <path
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
              d="M128 48v32m256-32v32"
            ></path>
            <path
              fill="none"
              strokeLinejoin="round"
              strokeWidth="32"
              d="M464 160H48"
            ></path>
          </svg>
          <dl className="inline align-middle font-mono font-bold uppercase">
            <dt className="sr-only">Published on</dt>
            <dd className="inline">
              <time>
                {data?.createdAt
                  ? new Date(data.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })
                  : ""}
              </time>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
