import React from "react";
import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full py-6 px-4 bg-gradient-to-r from-gray-100 to-gray-200 dark:bg-gradient-to-br dark:from-[#1a1a1a] dark:via-[#222222] dark:to-[#282828]">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 sm:mb-0">
          © {new Date().getFullYear()} Vedant Helwatkar. All rights reserved.
        </p>
        <a
          href="mailto:vedanthelwatkar@gmail.com"
          className="flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-300"
        >
          <Mail size={16} className="mr-2" />
          vedanthelwatkar@gmail.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
