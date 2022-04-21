import React from "react";
import HeroBg from "../img/heroBg.png";
import { partsData } from "../utils/data";
import Package from "../img/package.png";
import {Link as ScrollLink }from 'react-scroll'

const HomeContainer = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full" id="home">
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-4">
        <div className="flex items-center gap-2 justify-center bg-Nismo px-4 rounded-full">
          <p className="text-base text-white font-semibold">
            Same Day Shipping
          </p>
          <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
            <img
              src={Package}
              className="w-full h-full object-contain"
              alt="delivery"
            />
          </div>
        </div>

        <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor leading-tight">
          Get Your Parts{" "}
          <span className="text-Nismo text-[3rem] lg:text-[5rem]">
            Fast & Reliable
          </span>
        </p>

        <p className="text-base text-white text-center md:text-left md:w-[80%]">
          Nissan Parts & Accessories Online is your official online source for
          Nissan OEM parts designed to perfectly complement your Nissan.
          Maintain the exceptional level of innovation and excitement you’ve
          enjoyed since the day you purchased your Nissan.
        </p>
        <p className="text-base text-white text-center md:text-left md:w-[80%]">
          Find all the original parts and accessories your Nissan requires in
          the Nissan Parts & Accessories Online official online catalog.
        </p>

        <button
          type="button"
          className="text-white bg-gradient-to-br from-cartNumBg to-Nismo w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg"
        >
          <ScrollLink to="shop" spy={true} smooth={true} offset={-100} duration={400}>Order Now</ScrollLink>
        </button>
      </div>
      <div className="py-2 flex-1 flex items-center justify-center relative">
        <img
          src={HeroBg}
          className="ml-auto h-420 w-full lg:w-auto lg:h-650"
          alt="hero image"
        />

        <div className="max-w-[600px] h-full absolute top-0 left-0 flex items-center justify-center py-4 gap-4 flex-wrap">
          {partsData &&
            partsData.map((item) => (
              <div
                key={item.id}
                className="lg:w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg"
              >
                <img
                  src={item.imageSrc}
                  className="w-20 lg:w-40 -mt-10 lg:-mt-20"
                  alt="i1"
                />
                <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
                  {item.name}
                </p>
                <p className="text-[12px] lg:text-sm text-gray-500 font-semibold my-1 lg:my-3">
                  {item.desc}
                </p>
                <p className="text-sm font-semibold text-headingColor">
                  <span className="text-xs text-red-600">$</span> {item.price}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
