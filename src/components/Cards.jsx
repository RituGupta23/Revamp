import React from 'react';
import image1 from "../assets/image.png";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/car.jpg";
const Cards = () => {
  return (
    <section className="font-poppins bg-white text-white py-12">
      <h2 className="text-black text-center text-5xl font-bold mb-12">Your DATSUN is Waiting</h2>

      <div className="flex flex-col lg:flex-row justify-center space-y-8 lg:space-y-0 lg:space-x-8 px-4 lg:px-0">
        <div className="bg-white text-black rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-transform transform hover:scale-105 duration-300 max-w-sm">
          <img
            src={image1}
            alt="DATSUN Test Drive"
            className="w-full h-56 object-cover hover:scale-110 transition-transform duration-300"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-2">Book a Test Drive</h3>
            <p className="text-gray-600 mb-4">Experience the thrill of driving an DATSUN. Click here to schedule your test drive.</p>
            <button className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-300">Book Now</button>
          </div>
        </div>

        <div className="bg-white text-black rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-transform transform hover:scale-105 duration-300 max-w-sm">
          <img
            src={image2}
            alt="DATSUN Approved Plus"
            className="w-full h-56 object-cover hover:scale-110 transition-transform duration-300"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-2">DATSUN Approved Plus</h3>
            <p className="text-gray-600 mb-4">Discover the benefits of DATSUN Approved Plus for pre-owned cars.</p>
            <button className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-300">Learn More</button>
          </div>
        </div>

        <div className="bg-white text-black rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-transform transform hover:scale-105 duration-300 max-w-sm">
          <img
            src={image3}
            alt="DATSUN Online Service"
            className="w-full h-56 object-cover hover:scale-110 transition-transform duration-300"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-2">Book Online Service</h3>
            <p className="text-gray-600 mb-4">Conveniently schedule your DATSUN service online. Click here to book now.</p>
            <button className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-300">Book Now</button>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Cards;
