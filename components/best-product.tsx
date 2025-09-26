"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  {
    name: "Swiss Cheese Plant",
    price: "ZMW 55.00",
    img: "/images/plant1.png",
    rating: 5,
  },
  {
    name: "Alocasia polly plant",
    price: "ZMW 49.00",
    img: "/images/plant2.png",
    rating: 5,
  },
  {
    name: "Lush Green Plant",
    price: "ZMW 64.00",
    img: "/images/plant3.png",
    rating: 5,
  },
];

export default function BestProduct() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-white px-8 py-20 max-w-7xl mx-auto">
      {/* Section Heading with buttons on the right */}
      <div className="flex items-center justify-between mb-12">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Best Product</h2>
          <p className="mt-2 text-gray-600 max-w-2xl">
            Discover our best product — thoughtfully designed for quality,
            sustainability, and style. Perfect for plant lovers who want beauty
            and function in one.
          </p>
        </div>
        <div className="flex space-x-3">
          <button
            onClick={prevSlide}
            className="bg-green-900 text-white p-3 rounded-sm hover:bg-green-800"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className="bg-green-900 text-white p-3 rounded-sm hover:bg-green-800"
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product, i) => (
          <div
            key={i}
            className="border-amber-50 border-2 rounded-lg overflow-hidden text-center"
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-64 object-contain bg-white"
            />
            <div className="p-1">
              <h3 className="text-lg font-medium text-gray-800">
                {product.name}
              </h3>
              <p className="text-green-900 font-semibold mt-1">
                {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
