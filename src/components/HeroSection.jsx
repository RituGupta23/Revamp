import React from "react";
import WaterWave from "react-water-wave";
// import image from '../assets/car.jpg';
import image from "../assets/demo2.jpg";

const HeroSection = () => {
  return (
    <WaterWave imageUrl={image} dropRadius={20} resolution={512}>
      {() => (
        <div className="flex items-center lg:justify-end h-[88vh] text-white bg-cover bg-center px-2">
          <div className="h-1/2 w-full flex flex-col justify-start items-end">
            <div className="h-1/2 md:w-1/2 text-center flex flex-col items-center justify-center">
              <h1 className="w-full text-4xl lg:text-6xl font-bold mb-4">
                Beyond the Road
              </h1>
              <p className="w-full text-sm md:text-lg md:text-left px-6">
                Step into a world of unparalleled innovation and sustainable  elegance   with our cutting-edge DATSUN.
              </p>
            </div>
            <div className="h-1/2 w-full text-center flex flex-col items-end justify-center">
              <p className="w-full lg:w-1/3 text-lg text-center">
                Empower the future with DATSUN
              </p>
              <h1 className="w-full lg:w-2/3 text-4xl lg:text-6xl font-bold mb-4">
                Redefining Future Travel
              </h1>
            </div>
          </div>
        </div>
      )}
    </WaterWave>
  );
};

export default HeroSection;
