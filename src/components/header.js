"use client";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Socials from "./socials";
import Breadcrumbs from './breadcrumbs';
import useWindowSize from '../hooks/useWindowSize'

export default function Header() {
  const pathname = usePathname();
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const { width } = useWindowSize();
  const isDesktop = width >= 838;
  console.log(isDesktop);
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 50) {
        setIsScrolledDown(true);
      } else {
        setIsScrolledDown(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolledDown]);
  console.log(isScrolledDown);
  return (
    <header isDesktop={isDesktop} className={`flex flex-wrap ${isScrolledDown ? "h-header" : ""}`}>
      <h1
        className={`text-xs md:text-sm basis-1/2 text-custom-sub uppercase ${
          isScrolledDown ? "opacity-30" : ""
        }`}
      >
        <sup>Kayleigh Regan's Portfolio v.1.0</sup>
      </h1>
      {/* <Socials /> */}
      <Breadcrumbs isDesktop={isDesktop} isScrolledDown={isScrolledDown} />
    </header>
  );
}
