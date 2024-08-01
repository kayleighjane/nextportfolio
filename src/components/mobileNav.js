"use client";

import React from 'react';
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { linkData } from "../data/data";

const MobileNav = ({ isActive }) => {
  const pathname = usePathname();
  
  return ( 
 <ul className={`pt-4 ${isActive ? '' : 'hidden'}`}>
    {linkData.map((link, key) => (
      pathname !== link 
      ? (<li key={key}>
      <Link href={`/${link}`}>{link}</Link>
      </li>
      )
      :
      ('')
    ))}
      
  </ul>
    
)};

export default MobileNav;