"use client";
import React from "react";

const PackageDetails: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-stretch gap-6 p-6 bg-white">
      {/* Left Section */}
      <div className="flex-1 space-y-4">
        <h2 className="text-xl md:text-2xl font-bold text-black">
          7 Days from ₹XX,XXX per person
        </h2>
        <p className="text-gray-700 leading-relaxed">
          A journey through Kerala’s cool hill stations and tranquil waters,
          this Munnar itinerary offers the perfect mix of scenic landscapes,
          cultural immersion, and relaxed luxury. Begin in Kochi with its
          colonial charm before heading into the tea-scented hills of Munnar,
          exploring plantations, lakes, and wildlife sanctuaries. Conclude your
          journey with a serene houseboat cruise through Kerala’s backwaters.
        </p>
        <button className="bg-[#FFA726] text-white font-semibold px-6 py-2 rounded-md shadow hover:bg-orange-600 transition">
          View Brochure
        </button>
      </div>

      {/* Right Section */}
      <div className="flex-1 bg-[#FFA726] text-white rounded-lg p-6 space-y-4">
        <h3 className="text-lg md:text-xl font-bold">What’s Included</h3>
        <ul className="space-y-2 text-sm md:text-base">
          <li className="list-disc list-inside">
            Private car with professional English-speaking driver
          </li>
          <li className="list-disc list-inside">
            Hand-picked hotel accommodation with breakfast
          </li>
          <li className="list-disc list-inside">
            All transfers and sightseeing as per itinerary
          </li>
          <li className="list-disc list-inside">
            Entrance fees to monuments and attractions
          </li>
          <li className="list-disc list-inside">
            Guided nature walk through tea plantations
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PackageDetails;
