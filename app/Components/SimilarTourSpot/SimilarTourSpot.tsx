"use client";
import Image from "next/image";

interface TourSpot {
  title: string;
  description: string;
  image: string;
}

const tourSpots: TourSpot[] = [
  {
    title: "Athirapally",
    description: "Kerala’s Niagara, Where Cascades Meet Lush Rainforest.",
    image: "/athirapally.png", // replace with your image path
  },
  {
    title: "Wayanad",
    description: "Misty Hills, Spice Plantations, And Rich Wildlife.",
    image: "/wayanaddd.png", // replace with your image path
  },
  {
    title: "Thekaddy",
    description: "Kerala’s Niagara, Where Cascades Meet Lush Rainforest.",
    image: "/thekkady.png", // replace with your image path
  },
];

export default function SimilarTourSpot() {
  return (
    <section className="py-12 px-4 md:px-8">
      <h2 className="text-center text-2xl font-bold mb-8">
        Similar Tour Spot
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {tourSpots.map((spot, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative w-full h-48 md:h-52">
              <Image
                src={spot.image}
                alt={spot.title}
                fill
                className="object-cover rounded-t-xl"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {spot.title}
              </h3>
              <p className="text-gray-600 text-sm mt-1">{spot.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
