/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"

const Nav = () => {
  return (
    <div
      className="flex flex-col justify-center items-center
   space-y-3 md:space-y-0 md:space-x-8
    md:flex-row md:mb-24 md:justify-end transt duration-200 "
    >
      <div className="group">
        <a href="#">Vector</a>
        <div className=" mx-2 mt-2 duration-500 opacity-0 border-b-4 border-black group-hover:opacity-100"></div>
      </div>
      <div className="group">
        <a href="#">Potrait</a>
        <div className=" mx-2 mt-2 duration-500 opacity-0 border-b-4 border-black group-hover:opacity-100"></div>
      </div>
      <div className="group">
        <a href="#">Landscape</a>
        <div className=" mx-2 mt-2 duration-500 opacity-0 border-b-4 border-black group-hover:opacity-100"></div>
      </div>
      <div className="group">
        <a href="#">Ai images</a>
        <div className=" mx-2 mt-2 duration-500 opacity-0 border-b-4 border-black group-hover:opacity-100"></div>
      </div>
    </div>
  )
}

export default Nav
