'use client';

import { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { IoMdArrowDropdown } from 'react-icons/io';
import { BsCalendar } from 'react-icons/bs';
import { FaSearch } from 'react-icons/fa';

export default function SearchForm() {
  const [location] = useState('6730 Luna Land North');
  const [checkIn] = useState('19.06.2019');
  const [checkOut] = useState('24.06.2019');
  const [guests] = useState('4 adults');

  return (
    <div className="w-full flex justify-center md:px-40">
      <div className="w-full  md:mt-0 lg:mt-0 max-w-8xl bg-white/80 rounded-2xl py-3 md:py-8 px-3 md:px-10 shadow-md">

        {/* Desktop & Tablet View */}
        <div className="hidden md:flex justify-between items-center gap-3">
          <div className="backdrop-blur-lg bg-white/80 shadow-lg rounded-lg flex flex-col md:flex-row w-full">
            {/* Accommodation */}
            <div className="flex items-center border-b md:border-b-0 md:border-r px-4 py-3 w-full md:w-1/4">
              <div className="mr-3 text-gray-500">🏠</div>
              <div className="flex flex-col text-sm">
                <span className="text-gray-500">Accommodation</span>
                <span className="font-semibold text-black">{location}</span>
              </div>
              <IoMdArrowDropdown className="ml-auto text-gray-400" />
            </div>

            {/* Check-in */}
            <div className="flex items-center border-b md:border-b-0 md:border-r px-4 py-3 w-full md:w-1/4">
              <BsCalendar className="mr-3 text-gray-500" />
              <div className="flex flex-col text-sm">
                <span className="text-gray-500">Check-in</span>
                <span className="text-black">{checkIn}</span>
              </div>
            </div>

            {/* Check-out */}
            <div className="flex items-center border-b md:border-b-0 md:border-r px-4 py-3 w-full md:w-1/4">
              <BsCalendar className="mr-3 text-gray-500" />
              <div className="flex flex-col text-sm">
                <span className="text-gray-500">Check-Out</span>
                <span className="text-black">{checkOut}</span>
              </div>
            </div>

            {/* Guests */}
            <div className="flex items-center px-4 py-3 w-full md:w-1/4">
              <FaUser className="mr-3 text-gray-500" />
              <div className="flex flex-col text-sm">
                <span className="text-gray-500">Guests</span>
                <span className="text-black">{guests}</span>
              </div>
              <IoMdArrowDropdown className="ml-auto text-gray-400" />
            </div>
          </div>

          {/* Search Button */}
          <button className="bg-orange-300 hover:bg-orange-400 text-white font-bold py-5 px-7 rounded-md shadow-md transition-all duration-200">
            Search
          </button>
        </div>

        {/* Mobile View */}
        <div className="md:hidden w-full  flex  gap-3">
          <input
            type="text"
            placeholder="Search destination"
            className=" px-4 py-1 w-full rounded-md border border-black text-black focus:outline-none focus:ring-2 focus:ring-orange-300"
          />
          <button className="flex justify-center items-center bg-blue-500 hover:bg-blue-800 text-white font-bold py-3 px-3 rounded-md shadow-md transition-all duration-200">
            <FaSearch/>
          </button>
        </div>
      </div>
    </div>
  );
}
