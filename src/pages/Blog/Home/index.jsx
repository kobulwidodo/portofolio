import React from "react";
import { Link } from "react-router-dom";
import gamer from "../../../assets/gamer.svg";

const BlogHome = () => {
  return (
    <>
      <div className="flex justify-between">
        <img src={gamer} alt="" />
        <Link to="/" className="underline">
          /home
        </Link>
      </div>
      <div className="mt-20">
        <h1 className="font-black text-4xl">Welcome to my Blog!</h1>
        <p className="mt-5 font-medium text-lg">
          Actually this isnt a blog blog, just my random thought at 1 am
        </p>
      </div>
      <div className="z-40 h-2 mt-10 mb-32 bg-gradient-to-r from-blue-300 via-pink-500 to-yellow-300 rounded"></div>
      <div className="mt-10">
        <ul className="space-y-7">
          <li>
            <Link to="/blog/life-ended-when-i-graduated" className="underline">
              Life ended when i graduated
            </Link>
            <p className="font-bold text-sm opacity-50 mt-2">11 June 2024</p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default BlogHome;
