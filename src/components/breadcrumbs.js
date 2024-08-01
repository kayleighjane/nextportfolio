"use client";

import React, { useState } from 'react';
import MobileNav from './mobileNav';
import DownArrowIcon from '../assets/icons/down-arrow.svg';

const Breadcrumbs = ({isScrolledDown, isDesktop}) => {
// const breadcrumbs = useBreadcrumbs();

// const breadcrumbDivider = false;
// const n = 1;

// const newBreadcrumbs = breadcrumbs.reduce((list, elem, i) => {
//   list.push(elem);
//   if((i+1) % n === 0) list.push(breadcrumbDivider);
//   return list;
// }, []);

// const location = useLocation();
// let breadcrumbArray = newBreadcrumbs.slice(0, -1);
const [isActive, setIsActive] = useState(false);
  const handleClick = () => setIsActive(!isActive);
let breadcrumbArray = ['One','Two','Three']



return (
  <div className={`text-custom-light font-light text-sm md:text-base tracking-wide ${isScrolledDown ? 'fixed bg-custom-dark p-2 pt-6 pb-6 top-0 w-full block' : 'pt-8 p-2'}`}>
    
    {/* <ul className="flex gap-x-2">
      {breadcrumbArray.map((item, key) => (
      <li key={key}>
      {!item?.breadcrumb ? (<span className="rounded-lg bg-custom-light px-2 leading-11"></span>) : (<button className="rounded-xl py-1 px-2.5 border-2 hover:bg-custom-light hover:text-custom-dark border-custom-light h-10 md:h-11">
        {location.pathname === item.match?.pathname ? item?.breadcrumb
      : (
        <Link href={item.match?.pathname}>
      {item?.breadcrumb}
      </Link>)
      }
      </button>)}
      
      </li>
      )
      )
      }
      {!isDesktop && (
      <li>
         <button onClick={handleClick} className="rounded-xl py-2 h-10 md:h-11 px-2.5 bg-custom-light"><span className="icon-dark"><DownArrowIcon /></span></button>
      </li>
      )
    }
    </ul> */}
    {!isDesktop && (
      <MobileNav array={breadcrumbArray} isActive={isActive} />
      )
    }
   
  </div>
)
}

export default Breadcrumbs;
