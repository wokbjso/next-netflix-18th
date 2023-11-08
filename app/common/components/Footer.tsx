"use client";
import { BiHomeAlt2 } from "react-icons/bi";
import { LuSearch } from "react-icons/lu";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { HiDownload } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";

export const Footer = () => {
  return (
    <div className="fixed inset-x-0 bottom-0 flex footer-text items-center justify-center w-37.5rem h-4.8rem pt-2 pb-2 bg-footerBackground-main text-footerIcon-main bg-background-main">
      <div className="w-1/5 flex flex-col text-center cursor-pointer items-center h-full">
        <BiHomeAlt2 style={{ fontSize: "24px" }} />
        <div className="mt-px">Home</div>
      </div>
      <div className="w-1/5 flex flex-col text-center cursor-pointer items-center h-full">
        <LuSearch style={{ fontSize: "24px" }} />
        <div className="mt-px">Search</div>
      </div>
      <div className="w-1/5 flex flex-col text-center cursor-pointer items-center h-full">
        <MdOutlineVideoLibrary style={{ fontSize: "24px" }} />
        <div className="mt-px">Coming Soon</div>
      </div>
      <div className="w-1/5 flex flex-col text-center cursor-pointer items-center h-full">
        <HiDownload style={{ fontSize: "24px" }} />
        <div className="mt-px">Downloads</div>
      </div>
      <div className="w-1/5 flex flex-col text-center cursor-pointer items-center h-full">
        <GiHamburgerMenu style={{ fontSize: "24px" }} />
        <div className="mt-px">More</div>
      </div>
    </div>
  );
};
export default Footer;
