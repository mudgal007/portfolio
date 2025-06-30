import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";

const Blog = ({ blogPageData, data }) => {
  const [skill, setSkill] = useState("all");

  const categoryCount = {};
  blogPageData?.forEach((item) => {
    const category = item.category;
    categoryCount[category] = (categoryCount[category] || 0) + 1;
  });

  const finalCategory = Object.keys(categoryCount).map((skillName) => ({
    skillName: skillName,
    count: categoryCount[skillName],
  }));

  return (
    <div className="mx-auto w-full">
      <div className="prose-headings:mb-4 dark:prose-invert">
        <div className="grid-cols-2 bg-omega-800 md:grid">
          <div className="prose prose-invert p-3 md:p-6 lg:p-12">
            <h3>{data?.text1}</h3>
            <small>{data?.text2}</small>
            <div className="mt-4 grid gap-2 lg:grid-cols-2">
              <span
                onClick={() => setSkill("all")}
                className="cursor-pointer bg-gradient-omega-900 group prose prose-zinc dark:prose-invert border-l border-transparent transition-colors hover:border-omega-500 no-underline"
              >
                <div className="flex h-full items-stretch justify-between">
                  <div className="flex items-center p-2 md:p-4" id="skill">
                    <small className="text-sm">{"All"}</small>
                  </div>
                  <div
                    className={`border-l border-pink-500 flex w-14 items-center justify-center text-center  dark:bg-omega-700 transition-all duration-300  ${
                      skill === "all"
                        ? "bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"
                        : ""
                    }`}
                  >
                    <small className="text-sm font-bold">
                      {blogPageData?.length}
                    </small>
                  </div>
                </div>
              </span>
              {finalCategory?.map((ele, index) => {
                return (
                  <span
                    key={index}
                    onClick={() => setSkill(ele?.skillName)}
                    className="cursor-pointer bg-gradient-omega-900 group prose prose-zinc dark:prose-invert border-l border-transparent transition-colors hover:border-omega-500 no-underline"
                  >
                    <div className="flex h-full items-stretch justify-between">
                      <div className="flex items-center p-2 md:p-4" id="skill">
                        <small className="text-sm">{ele?.skillName}</small>
                      </div>
                      <div
                        className={`border-l border-pink-500 flex w-14 items-center justify-center text-center  dark:bg-omega-700 transition-all duration-300  group-hover:bg-gradient-to-r  ${
                          skill === ele?.skillName
                            ? "bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"
                            : ""
                        }`}
                      >
                        <small className="text-sm font-bold">
                          {ele?.count}
                        </small>
                      </div>
                    </div>
                  </span>
                );
              })}
            </div>
          </div>
          <div className="md:transition-all md:duration-1000 bg-gradient-omega-900 p-3 md:p-6 lg:p-12">
            <div>
              <div className="prose dark:prose-invert">
                <h3>
                  <em className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
                    {data?.text3}
                  </em>
                </h3>
                <div class="text-[1.125rem] md:text-[1.25rem] font-bold">
                  {data?.text4}
                </div>
                <small>{data?.text5}</small>
              </div>
              <form
                className="relative mx-auto my-6 flex items-start justify-between"
                method="POST"
                id="contact"
              >
                <div className="mr-3 inline-block grow">
                  <input
                    type="hidden"
                    name="access_key"
                    value="1ea9e9ba-0fc0-48fd-8a85-5f4f2137bf7c"
                  />
                  <input
                    type="text"
                    name="email"
                    className="block w-full border-0 py-3 px-4 text-white border-b bg-omega-700/20 placeholder-omega-400 border-accent focus:ring-accent-500"
                    placeholder="Johndoe@example.com"
                    aria-label="email address"
                  />
                  <div className="absolute bottom-full left-0 z-10"></div>
                </div>
                <button
                  className="relative inline-flex items-center justify-center leading-normal no-underline group cursor-pointer select-none focus:outline-none peer md:peer-even:ml-6"
                  type="submit"
                >
                  <div className="z-10 h-full w-full border-4 border-transparent group-active:border-alpha flex transform-gpu transition-transform not-prose font-mono py-2 px-4 text-sm hover:translate-x-1 hover:translate-y-1 bg-white text-black">
                    <span className="mx-auto">Subscribe</span>
                  </div>
                  <div className="absolute h-full w-full bg-gradient-to-r from-alpha via-alpha-300 to-beta top-1 left-1"></div>
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="h-px w-full bg-gradient-to-r from-accent via-beta to-alpha"></div>
        <div className="p-4 md:p-6 lg:p-12">
          <div className="flex items-start justify-between">
            <div className="prose prose-invert">
              <h3>{data?.text6}</h3>
              <p>{data?.text7}</p>
            </div>
            <div className="hidden border-b border-omega-700 md:block">
              {/* <h6 className="font-mono font-normal text-white"></h6> */}
            </div>
          </div>
          <div className="mt-4 grid grid-cols-1 gap-6 md:mt-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPageData?.map((ele, index) => {
              return (
                <BlogCard
                  data={ele?.data?.data}
                  slug={ele?.data?.slug}
                  selected={skill}
                  key={index}
                  category={ele?.category}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
