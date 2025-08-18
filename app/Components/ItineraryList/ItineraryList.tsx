"use client";
import React, { useState } from "react";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";

interface DayPlan {
  title: string;
  description: string;
}

const days: DayPlan[] = [
  {
    title: "Day 1 – Arrive Kochi",
    description:
      "Your journey begins in the vibrant port city of Kochi. On arrival, you’ll be greeted by our representative and transferred to your hotel. The evening is free to stroll along Fort Kochi’s cobblestone streets, admire the Chinese fishing nets at sunset, and enjoy a leisurely dinner at a seaside café.",
  },
  {
    title: "Day 2 – Kochi to Munnar (130 km / ~4.5 hrs)",
    description:
      "Drive through scenic countryside and lush plantations to reach Munnar. Check-in and relax.",
  },
  {
    title: "Day 3 – Munnar Sightseeing",
    description:
      "Visit Eravikulam National Park, Mattupetty Dam, and enjoy tea garden walks.",
  },
  {
    title: "Day 4 – Munnar to Alleppey (165 km / ~5 hrs)",
    description:
      "Travel to Alleppey to board your houseboat and cruise through Kerala’s serene backwaters.",
  },
  {
    title: "Day 5 – Alleppey to Kochi (53 km / ~1.5 hrs)",
    description:
      "After breakfast, disembark from your houseboat and drive back to Kochi.",
  },
  {
    title: "Day 6 – Kochi Sightseeing & Departure",
    description:
      "Explore Kochi’s heritage sites before transferring to the airport for departure.",
  },
];

const ItineraryList: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 p-4 max-w-8xl mx-auto">
      {days.map((day, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`rounded-lg shadow-lg py-5 transition-all duration-300 ${
              isOpen ? "bg-[#FFA726] text-white" : "bg-white text-black"
            }`}
          >
            {/* Header Button */}
            <button
              className="flex w-full justify-between items-center px-4 py-4 focus:outline-none"
              onClick={() => toggleIndex(index)}
            >
              <span
                className={`text-left font-semibold text-sm md:text-base ${
                  isOpen ? "text-white" : "text-black"
                }`}
              >
                {day.title}
              </span>
              {isOpen ? (
                <FaChevronDown className="text-white" />
              ) : (
                <FaChevronRight className="text-black" />
              )}
            </button>

            {/* Expanded Content */}
            {isOpen && (
              <div className="px-4 pb-4 text-sm md:text-base leading-relaxed">
                {day.description}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ItineraryList;
