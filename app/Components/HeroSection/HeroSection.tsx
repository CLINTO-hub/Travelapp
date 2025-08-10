'use client';

import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
import SearchForm from '../SearchForm';

// Lottie Loader
import { DotLottiePlayer } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const [loading, setLoading] = useState(true);
  const trips = [
    { name: 'Trip To Varkala', people: 27, img: '/Varkala.png' },
    { name: 'Trip To Munnar', people: 31, img: '/Munnar.png' },
    { name: 'Trip To Wayanad', people: 20, img: '/Wayanad.png' },
    { name: 'Trip To Varkala', people: 27, img: '/Varkala.png' },
    { name: 'Trip To Munnar', people: 31, img: '/Munnar.png' },
    { name: 'Trip To Wayanad', people: 20, img: '/Wayanad.png' },
    { name: 'Trip To Varkala', people: 27, img: '/Varkala.png' },
    { name: 'Trip To Munnar', people: 31, img: '/Munnar.png' },
    { name: 'Trip To Wayanad', people: 20, img: '/Wayanad.png' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Loader timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // change delay if needed
    return () => clearTimeout(timer);
  }, []);

  // Auto-switch on mobile
  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % trips.length);
      }, 9000);
      return () => clearInterval(interval);
    }
  }, [isMobile, trips.length]);

  // Auto-switch on desktop
  useEffect(() => {
    if (!isMobile) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 3) % trips.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isMobile, trips.length]);

  const getDesktopBg = () => {
    const group = Math.floor(currentIndex / 3) % 3;
    if (group === 0) return '/varkalawebb.jpg';
    if (group === 1) return '/munnarww.jpg';
    return '/wayanadwebb.jpg';
  };

  // Show loader first
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-white">
        <DotLottiePlayer
          src="/loading.lottie" // Put file in public/
          autoplay
          loop
          style={{ width: '200px', height: '200px' }}
        />
      </div>
    );
  }

  return (
    <>
      {/* Top Contact Bar */}
      <div className="flex items-center justify-end bg-white px-4 md:px-10 py-4 gap-5">
        <div className="flex gap-2 whitespace-nowrap">
          <img src="/uk.png" alt="log" className="h-6" />
          <h3 className="text-black font-bold">UK</h3>
        </div>
        <h3 className="hidden md:flex text-black text-md">Call us today until 17:30</h3>
        <div className="flex gap-2 whitespace-nowrap">
          <img src="/Symbol.png" alt="logo" className="h-6" />
          <h3 className="text-black font-extrabold">1089 1235 6789</h3>
        </div>
        <p className="hidden md:flex text-black">or</p>
        <button className="hidden md:flex bg-orange-300 text-white px-4 text-sm md:text-md py-2 rounded-full">
          Request a quote
        </button>
      </div>

      {/* Hero Section */}
      <div
        className="w-full h-100vh lg:h-100vh bg-cover bg-center relative transition-all duration-500"
        style={{
          backgroundImage: `url(${
            isMobile
              ? currentIndex % 3 === 0
                ? '/varkalawebb.jpg'
                : currentIndex % 3 === 1
                ? '/munnarww.jpg'
                : '/wayanadwebb.jpg'
              : getDesktopBg()
          })`,
        }}
      >
        {/* Desktop Nav */}
        <nav className="hidden md:flex justify-end items-center w-full text-lg p-15 space-x-20 text-white font-semibold">
          <Link href="#">Home</Link>
          <Link href="#">About Us</Link>
          <Link href="#">Premium</Link>
          <Link href="#">Blogs</Link>
          <button className="border px-6 py-2 rounded-lg">Explore</button>
        </nav>

        {/* Hero Content */}
        <div className="top-0 left-0 w-full h-full bg-gradient-to-r to-transparent flex flex-col md:flex-row">
          {/* Left Text Content */}
          <div className="relative p-6 md:p-16 w-full h-full flex flex-col justify-center space-y-10">
            <div className="relative p-6 md:p-16 md:w-1/2 flex flex-col justify-center space-y-7">
              <p className="text-md md:text-lg uppercase text-white">Mountains | Plains | Beaches</p>
              <h1 className="text-3xl md:text-6xl font-bold text-white">
                Spend your<br /> vacation <br />
                with our activities
              </h1>

              {/* Trip Cards */}
              <div>
                <h2 className="font-semibold text-lg text-white mb-2">Most Popular</h2>
                <div className="flex space-x-9 overflow-x-auto md:overflow-visible">
                  {isMobile ? (
                    <div className="min-w-[160px] h-[200px] bg-white mt-5 rounded-lg shadow-md p-2 transition-all duration-500">
                      <img
                        src={trips[currentIndex].img}
                        alt={trips[currentIndex].name}
                        className="rounded-md h-30 w-full object-cover"
                      />
                      <h3 className="text-sm text-black font-medium mt-2">{trips[currentIndex].name}</h3>
                      <p className="text-xs text-black mt-2">{trips[currentIndex].people} people going</p>
                    </div>
                  ) : (
                    <>
                      <div className="overflow-hidden w-full max-w-[540px]">
                        <div
                          className="flex transition-transform duration-700 ease-in-out"
                          style={{
                            transform: `translateX(-${(currentIndex / 3) * 100}%)`,
                            width: `${Math.ceil(trips.length / 3) * 100}%`,
                          }}
                        >
                          {Array.from({ length: Math.ceil(trips.length / 3) }).map((_, groupIndex) => (
                            <div className="flex space-x-6 min-w-full px-2" key={groupIndex}>
                              {trips.slice(groupIndex * 3, groupIndex * 3 + 3).map((trip, index) => (
                                <div
                                  key={index}
                                  className="min-w-[160px] h-[200px] bg-white rounded-lg shadow-md p-2"
                                >
                                  <img
                                    src={trip.img}
                                    alt={trip.name}
                                    className="rounded-md h-30 w-full object-cover"
                                  />
                                  <h3 className="text-sm text-black font-medium mt-2">{trip.name}</h3>
                                  <p className="text-xs text-black mt-2">{trip.people} people going</p>
                                </div>
                              ))}
                            </div>
                          ))}
                        </div>
                      </div>

                      <button className="text-orange-600 flex items-center">
                        <IoIosArrowForward size={20} />
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
            <SearchForm />
          </div>

          {/* Mobile Nav Toggle */}
          <div className="absolute top-4 right-4 md:hidden z-50">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white text-2xl">
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Mobile Sidebar */}
          {isMenuOpen && (
            <div className="fixed top-0 right-0 w-3/4 h-full bg-white z-40 shadow-lg p-6 flex flex-col space-y-6 text-gray-800">
              <Link href="#" className="text-lg font-semibold">
                Home
              </Link>
              <Link href="#" className="text-lg font-semibold">
                About Us
              </Link>
              <Link href="#" className="text-lg font-semibold">
                Premium
              </Link>
              <Link href="#" className="text-lg font-semibold">
                Blogs
              </Link>
              <button className="border px-4 py-2 rounded-md">Explore</button>
              <button className="bg-orange-300 text-black px-4 py-2 rounded-md">Request a quote</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
