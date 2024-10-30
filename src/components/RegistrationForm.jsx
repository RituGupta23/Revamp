import React from 'react';
import { FaUser, FaEnvelope, FaPhone, FaCar } from 'react-icons/fa';

const RegistrationForm = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-black">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full space-y-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">Registration for a Meeting</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <div className="flex items-center border border-gray-300 rounded-md shadow-sm">
              <FaUser className="w-5 h-5 text-gray-500 ml-2" />
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="mt-1 block w-full px-4 py-2 border-0 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <div className="flex items-center border border-gray-300 rounded-md shadow-sm">
              <FaEnvelope className="w-5 h-5 text-gray-500 ml-2" />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="mt-1 block w-full px-4 py-2 border-0 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <div className="flex items-center border border-gray-300 rounded-md shadow-sm">
              <FaPhone className="w-5 h-5 text-gray-500 ml-2" />
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                className="mt-1 block w-full px-4 py-2 border-0 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="car" className="block text-sm font-medium text-gray-700">
              Current Car
            </label>
            <div className="flex items-center border border-gray-300 rounded-md shadow-sm">
              <FaCar className="w-5 h-5 text-gray-500 ml-2" />
              <input
                type="text"
                id="car"
                name="car"
                placeholder="Enter your current car model"
                className="mt-1 block w-full px-4 py-2 border-0 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 active:bg-blue-800"
          >
            View Collection
          </button>
        </form>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full mt-6 md:mt-0 md:ml-8 text-gray-800">
        <h3 className="text-lg font-semibold">Contact Directly</h3>
        <p className="mt-2">
          <strong>KARDE AUTO</strong><br />
          Viale Vincitore Cesarato 25/a<br />
          107105 Ancona, Italy
        </p>
        <p className="mt-2">
          <a href="mailto:info@kardeauto.com" className="text-blue-600 underline hover:text-blue-800">info@kardeauto.com</a><br />
          <a href="tel:+391766250341" className="text-blue-600 underline hover:text-blue-800">+39 1766 250 341</a>
        </p>
      </div>
    </div>
  );
};

export default RegistrationForm;
