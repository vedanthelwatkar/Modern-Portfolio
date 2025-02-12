import { Sparkle } from "lucide-react";
import React from "react";

const Home = () => {
  return (
    <div className="w-full pt-32 gap-4 flex flex-col items-center justify-center">
      <div className="relative w-fit flex">
        <div className="flex items-end">
          <Sparkle
            className="w-10 h-10 sm:w-12 sm:h-12 text-light dark:text-dark"
            stroke="currentColor"
            fill="currentColor"
          />
        </div>
        <h1 className="mx-4 sm:mx-6 font-title text-light text-4xl sm:text-8xl font-semibold dark:text-dark">
          Hi, I'm Vedant.
        </h1>

        <div>
          <Sparkle
            className="w-10 h-10 sm:w-12 sm:h-12 text-light dark:text-dark"
            stroke="currentColor"
            fill="currentColor"
          />
        </div>
      </div>
      <span className="text-light font-medium w-11/12 sm:w-1/2 text-center mt-6 text-sm sm:text-base  dark:text-dark">
        Full-stack developer with 1+ years of experience in JavaScript and
        Python, building and maintaining high-performance websites.
      </span>
    </div>
  );
};

export default Home;
