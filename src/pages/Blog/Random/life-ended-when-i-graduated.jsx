import React from "react";
import { Link } from "react-router-dom";
import gamer from "../../../assets/gamer.svg";
import AnonymMessage from "../../../component/AnonymMessage/anonym-message";

const LifeEndedWhenIGradauted = () => {
  return (
    <>
      <div className="flex justify-between">
        <img src={gamer} alt="" />
        <Link to="/blog" className="underline">
          /blog
        </Link>
      </div>
      <div className="my-20">
        <h1 className="font-black text-4xl">Life ended when i graduated</h1>
        <p className="mt-5 font-medium opacity-50 text-lg italic">
          &quot;aight, what the fuck is goin on&quot;
        </p>
      </div>
      <p className="text-base leading-loose font-normal text-gray-400">
        I thought my life ended after I graduated from college. I am still
        looking for a new direction (ofc not one direction lol, bcs they not
        gonna comeback fs), trying to figure out what I must achieve since
        graduating.
      </p>
      <p className="text-base leading-loose font-normal text-gray-400 mt-10">
        Somehow, I stumbled upon a purpose, but even now, I wonder if it will be
        what I truly desire in the end. It’s hard to keep going, feeling like
        I'm merely going through the motions. Sometimes, I can’t shake the
        thought that one day I’ll look back and tell myself it was all for
        nothing because I didn’t and couldn’t grasp what I truly wanted.
      </p>
      <p className="text-base leading-loose font-normal text-gray-400 mt-10">
        Life goes on. I still have many friends who (hopefully) care about me. I
        definitely care about them, I love them more than sushi. Some people
        tell me to do it for myself, but is it really about me alone? Or is it
        about to share with someone I truly love? Still not having the answer
        for that mate.
      </p>
      <div className="flex justify-center">
        <AnonymMessage />
      </div>
    </>
  );
};

export default LifeEndedWhenIGradauted;
