"use client";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
export default function Header() {
  const pathname = usePathname();
  const [isScrolledDown, setIsScrolledDown] = useState(false);
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
    <header className={`flex flex-wrap ${isScrolledDown ? "h-header" : ""}`}>
      <h1
        className={`text-xs md:text-sm basis-1/2 text-custom-sub uppercase ${
          isScrolledDown ? "opacity-30" : ""
        }`}
      >
        <sup>Kayleigh Regan's Portfolio v.1.0</sup>
      </h1>
      {/* <Socials /> */}
      {pathname !== "/" && <div>Pathname</div>}
    </header>
  );
}
