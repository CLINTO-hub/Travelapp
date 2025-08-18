"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

const logos = [
  { src: "/indigo.png", alt: "Indigo" },
  { src: "/travel.png", alt: "Travel Aware" },
  { src: "/Airbnb.png", alt: "Airbnb" },
  { src: "/Ait.png", alt: "AITO" },
  { src: "/Vistara.png", alt: "Vistara" },
];

export default function Partners() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollStep = 1; // speed of scroll (px per tick)

    const scrollInterval = setInterval(() => {
      if (
        scrollContainer.scrollLeft >=
        scrollContainer.scrollWidth - scrollContainer.clientWidth
      ) {
        // instantly jump back to start (no flicker because of duplicated logos)
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += scrollStep;
      }
    }, 10); // adjust timing for smoothness

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="w-full bg-white py-6 overflow-hidden">
      <div
        ref={scrollRef}
        className="flex gap-12 whitespace-nowrap overflow-x-hidden"
      >
        {[...logos, ...logos].map((logo, i) => (
          <div
            key={i}
            className="flex-shrink-0 flex items-center justify-center"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={60}
              className="h-12 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
