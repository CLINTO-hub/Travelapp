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
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollStep = 0.5; // speed (px per frame)

    const scroll = () => {
      if (
        scrollContainer.scrollLeft >=
        scrollContainer.scrollWidth - scrollContainer.clientWidth
      ) {
        scrollContainer.scrollLeft = 0; // reset to start
      } else {
        scrollContainer.scrollLeft += scrollStep;
      }

      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
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
