"use client";
import { SiNetflix } from "react-icons/si";
import { useState, useEffect } from "react";

export const Header = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;

      if (currentPosition >= 200) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed inset-x-0 top-0 flex z-50 items-center justify-around  h-[8rem] pr-6 header-text text-menu-main ${
        scroll ? "bg-footerBackground-main" : "bg-transparent"
      }`}
    >
      <SiNetflix style={{ fontSize: "3.2rem", color: "#B1060F" }} />
      <a className="hover:text-button-main cursor-pointer transition duration-300 ease-in-out">
        TV Shows
      </a>
      <a className="hover:text-button-main cursor-pointer transition duration-300 ease-in-out">
        Movies
      </a>
      <a className="hover:text-button-main cursor-pointer transition duration-300 ease-in-out">
        My List
      </a>
    </div>
  );
};

export default Header;
