import { ChevronRight, Globe, X } from "lucide-react";
import Link from "next/link";
import React from "react";

interface SideNavProps {
  isOpen: boolean;
  toggleMobileMenu: () => void;
}

const SideNav: React.FC<SideNavProps> = ({ isOpen, toggleMobileMenu }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-9/12 lg:w-[300px] h-full bg-white shadow-lg z-50 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300`}
    >
      <div className="flex justify-between p-4">
        <X
          size={20}
          onClick={toggleMobileMenu}
          className="cursor-pointer hover:bg-neutral-300"
        />
      </div>
      <ul className="flex flex-col items-start p-4">
        <li className="p-2 w-full group">
          <Link href="/" onClick={toggleMobileMenu}>
            <p className="leading-snug flex justify-between items-center cursor-pointer font-thin text-[#000] hover:text-blue-600 transition-colors duration-300 text-[14px]">
              Home
              <span className="transform transition-transform duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-2">
                <ChevronRight size={16} strokeWidth={3} />
              </span>
            </p>
          </Link>
        </li>

        <li className="p-2 w-full group">
          <div onClick={toggleMobileMenu}>
            <p className="leading-snug flex justify-between items-center cursor-pointer font-thin text-[#000] hover:text-blue-600 transition-colors duration-300 text-[14px]">
              Categories
              <span className="transform transition-transform duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-2">
                <ChevronRight size={16} strokeWidth={3} />
              </span>
            </p>
          </div>
        </li>
        <li className="p-2 w-full group">
          <Link href="/" onClick={toggleMobileMenu}>
            <p className="leading-snug flex justify-between items-center cursor-pointer font-thin text-[#000] hover:text-blue-600 transition-colors duration-300 text-[14px]">
              Search
              <span className="transform transition-transform duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-2">
                <ChevronRight size={16} strokeWidth={3} />
              </span>
            </p>
          </Link>
        </li>
        <div className="w-full h-px bg-neutral-300 my-5" />
        <li className="p-2 w-full group">
          <Link href="/" onClick={toggleMobileMenu}>
            <p className="leading-snug flex justify-between items-center cursor-pointer font-thin text-[#000] hover:text-blue-600 transition-colors duration-300 text-[14px]">
              Terms and condition
              <span className="transform transition-transform duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-2">
                <ChevronRight size={16} strokeWidth={3} />
              </span>
            </p>
          </Link>
        </li>
        <li className="p-2 w-full group">
          <Link href="/" onClick={toggleMobileMenu}>
            <p className="leading-snug flex justify-between items-center cursor-pointer font-thin text-[#000] hover:text-blue-600 transition-colors duration-300 text-[14px]">
              Refund Policy
              <span className="transform transition-transform duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-2">
                <ChevronRight size={16} strokeWidth={3} />
              </span>
            </p>
          </Link>
        </li>
        <li className="p-2 w-full group">
          <Link href="/" onClick={toggleMobileMenu}>
            <p className="leading-snug flex justify-between items-center cursor-pointer font-thin text-[#000] hover:text-blue-600 transition-colors duration-300 text-[14px]">
              Privacy Policy
              <span className="transform transition-transform duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-2">
                <ChevronRight size={16} strokeWidth={3} />
              </span>
            </p>
          </Link>
        </li>
        <div className="w-full h-px bg-neutral-300 mt-28 lg:mt-52 mb-1" />
        <li className="p-2 w-full flex items-center  justify-center gap-1">
          <Globe size={18} className="text-neutral-500" />
          <p className="cursor-pointer font-semibold hover-underline text-neutral-500">
            English
          </p>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
