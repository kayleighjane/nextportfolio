"use client"

import React from 'react';
import Link from "next/link";
import { linkData } from "@/data/data"
import useWindowSize from '@/hooks/useWindowSize'

const Nav = ({ isScrolledDown }) => {
  const isEven = (n) => (
    n % 2===0 ? true : false
  )
  const { width } = useWindowSize();
  const desktop = width >= 838;
  return (
<>
  <nav className={`flex flex-wrap duration-300 ease-out ${isScrolledDown ? 'fixed mb-32 ease-out duration-300' : ''}`} style={
    desktop ? {maxWidth:"150px"} : {}
  }>
      <ul className={`flex flex-wrap gap-y-2 customsm:max-w-xs md:gap-y-4`}>
        {linkData.map((link, key) => (
          <li className={`basis-1/2 flex capitalize font-extralight text-custom-accent tracking-wide ${isEven(key) ? '' : 'justify-end'} ${isScrolledDown ? 'text-2xl md:text-3xl' : 'text-3xl md:text-4xl'}`} 
          key={key}>
            <Link href={`/${link}`} className={`${isScrolledDown ? 'opacity-50 hover:opacity-100' : 'hover:text-custom-sub'}`}>{link}</Link>
          </li>
          ))
        }
      </ul>
  
  </nav>
</>
)};

export default Nav;