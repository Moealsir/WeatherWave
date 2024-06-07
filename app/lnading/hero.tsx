import Link from 'next/link';
import React from 'react';

export default function Hero() {
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen md:px-24 lg:px-8 lg:py-0">
  <div className="max-w-2xl mx-auto sm:max-w-xl md:max-w-2xl">
    <div className="text-center">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-5">
        <div>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <span className="relative">The</span>
          </span>
          Stay Updated with the Latest Weather
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
        Accurate Weather Forecasts
        </p>
      </div>
      <form className="flex flex-col items-center w-full mb-4 md:flex-row md:px-16">
        <input
          placeholder="Place"
          // required=""
          type="text"
          className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
        />
        <button
          type="submit"
          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide bg-indigo-600 text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
        >
          Search
        </button>
      </form>
      <p className="max-w-md mx-auto mb-10 text-xs text-gray-600 sm:text-sm md:mb-16">
      Get the most precise and up-to-date weather information for your location. Stay prepared for any weather conditions with WeatherWave.
      </p>
    </div>
  </div>
</div>
    </div>
  )
}