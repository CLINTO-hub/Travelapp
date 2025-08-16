'use client';

import { useState, useRef, useEffect } from 'react';
import { FaUser } from 'react-icons/fa';
import { IoMdArrowDropdown } from 'react-icons/io';
import { BsCalendar } from 'react-icons/bs';
import { FaSearch } from 'react-icons/fa';

export default function SearchForm() {
  const [location, setLocation] = useState('Select Location');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isGuestOpen, setIsGuestOpen] = useState(false);

  const locationOptions = ['Munnar', 'Varkala', 'Wayanad', 'Idukki', 'Vagamon'];

  const locationRef = useRef<HTMLDivElement>(null);
  const guestRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        locationRef.current &&
        !locationRef.current.contains(e.target as Node)
      ) {
        setIsLocationOpen(false);
      }
      if (
        guestRef.current &&
        !guestRef.current.contains(e.target as Node)
      ) {
        setIsGuestOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle guest count
  const incrementGuests = () => setGuests((prev) => prev + 1);
  const decrementGuests = () =>
    setGuests((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="w-full flex justify-center">
      <div className="w-full md:mt-0 lg:mt-0 max-w-8xl bg-white/70 rounded-2xl py-3 md:py-6 px-3 md:px-5 shadow-md">

        {/* Desktop & Tablet View */}
        <div className="hidden md:flex justify-between items-center gap-3">
          <div className="backdrop-blur-lg bg-white/80 shadow-lg rounded-lg flex flex-col md:flex-row w-full">

            {/* Accommodation */}
            <div
              ref={locationRef}
              className="relative flex items-center border-b md:border-b-0 md:border-r px-4 py-2 w-full md:w-1/4 cursor-pointer"
              onClick={() => setIsLocationOpen(!isLocationOpen)}
            >
              <div className="mr-3 text-gray-500">🏠</div>
              <div className="flex flex-col text-sm">
                <span className="text-gray-500">Accommodation</span>
                <span className="font-semibold text-black">{location}</span>
              </div>
              <IoMdArrowDropdown
                className={`ml-auto text-gray-400 transform transition-transform duration-200 ${isLocationOpen ? 'rotate-180' : ''
                  }`}
              />
              {isLocationOpen && (
                <ul
                  className="absolute top-full left-0 mt-1 w-full bg-white border rounded-md shadow-md z-[1000]"
                  onClick={(e) => e.stopPropagation()}
                >
                  {locationOptions.map((place) => (
                    <li
                      key={place}
                      className="px-4 py-2 text-sm hover:bg-gray-300 cursor-pointer"
                      onClick={() => {
                        setLocation(place);
                        setIsLocationOpen(false);
                      }}
                    >
                      {place}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Check-in */}
            <div className="flex items-center border-b md:border-b-0 md:border-r  px-4 py-3 w-full md:w-1/4">
              <BsCalendar className="mr-3 text-gray-500 " />
              <div className="flex flex-col text-sm w-full">
                <span className="text-gray-500">Check-in</span>
                <input
                  type="date"
                  className="text-black border border-gray-300 rounded px-2 py-1"
                  value={checkIn}
                  onChange={(e) => {
                    setCheckIn(e.target.value);
                    if (checkOut && e.target.value > checkOut) {
                      setCheckOut('');
                    }
                  }}
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
            </div>

            {/* Check-out */}
            <div className="flex items-center border-b md:border-b-0 md:border-r px-4 py-3 w-full md:w-1/4">
              <BsCalendar className="mr-3 text-gray-500 cursor-pointer" />
              <div className="flex flex-col text-sm w-full">
                <span className="text-gray-500">Check-Out</span>
                <input
                  type="date"
                  className="text-black border border-gray-300 rounded px-2 py-1"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  min={checkIn || new Date().toISOString().split('T')[0]}
                  disabled={!checkIn}
                />
              </div>
            </div>

            {/* Guests */}
            <div
              ref={guestRef}
              className="relative flex items-center px-4 py-3 w-full md:w-1/4"
            >
              <div
                className="flex items-center w-full cursor-pointer"
                onClick={() => setIsGuestOpen(!isGuestOpen)}
              >
                <FaUser className="mr-3 text-gray-500" />
                <div className="flex flex-col text-sm">
                  <span className="text-gray-500">Guests</span>
                  <span className="text-black">{guests} adult{guests > 1 ? 's' : ''}</span>
                </div>
                <IoMdArrowDropdown className="ml-auto text-gray-400" />
              </div>
              {isGuestOpen && (
                <div
                  className="absolute top-full left-0 mt-1 w-full bg-white border rounded-md shadow-md z-[1000] flex items-center justify-between px-4 py-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    onClick={() => decrementGuests()}
                  >
                    -
                  </button>
                  <span>{guests}</span>
                  <button
                    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    onClick={() => incrementGuests()}
                  >
                    +
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Search Button */}
          <button className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-5 px-7 rounded-md shadow-md transition-all duration-200">
            Search
          </button>
        </div>

        {/* Mobile View */}
        <div className="md:hidden w-full flex gap-3 ">
          <input
            type="text"
            placeholder="Search destination"
            className="px-4 py-1 w-full rounded-md border border-black text-black focus:outline-none focus:ring-2 focus:ring-orange-300"
          />
          <button className="flex justify-center items-center bg-blue-500 hover:bg-blue-800 text-white font-bold py-3 px-3 rounded-md shadow-md transition-all duration-200">
            <FaSearch />
          </button>
        </div>
      </div>
    </div>
  );
}
