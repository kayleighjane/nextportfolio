"use client"

import React from 'react';

const Card = ({title, description, docsLink, previewLink}) => {

return (
  <div className="flex gap-x-4 rounded-xl border-2 border-custom-light p-4">
    <div className="rounded-lg bg-custom-light"></div>
    <div className="">
      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">{title}</h3>
      <p className="pt-2 pb-4">{description} </p>
      <ul className="flex gap-x-2 justify-end">
        <a href={docsLink}><li className="rounded-xl border-2 hover:bg-custom-light hover:text-custom-dark border-custom-light p-2 py-1">Docs</li></a>
        <a href={previewLink}><li className="rounded-xl border-2 hover:bg-custom-light hover:text-custom-dark border-custom-light p-2 py-1">Preview</li></a>
      </ul>
    </div>
  </div>
)
}

export default Card;