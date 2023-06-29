import React, { useState } from "react";
import Nav from "./navbar";
import "./hom.scss";
import Carousel from "./carousel";
import But from "./button";

const Home = () => {
  return (
    <>
      <Nav />
      <div className="homepg bg-black pb-28">
        <div className="flex flex-row justify-between">
          <div className="flex">
            <p className="pl-36 py-4 text-white text-6xl leading-relaxed font-semibold">
              ALL RECIPES.
              <br />
              HERE.
              <br />
            </p>
          </div>
          <div className="flex">
            <p className="pr-6 py-4 text-white text-xl leading-relaxed">
              Find any recipe you like with our free online tool <br /> managing
              100,000+ recipes around the world.
              <div className="h-2">
                <But className="h-2" />
              </div>
            </p>
          </div>
        </div>
        <div className="bord bg-white">
          <Carousel />
          <But />
        </div>
      </div>
      <footer className="bg-green-900 text-lg pl-5 text-white">
        © Nutrio, Copyright 2023
      </footer>
    </>
  );
};
export default Home;
