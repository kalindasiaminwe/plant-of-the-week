import { ArrowDownLeft } from "lucide-react";
import { GoArrowUpRight } from "react-icons/go";
import React from "react";

const Mission = () => {
  return (
    <div className="grid md:grid-cols-2  gap-4 p-10  py-20 bg-[#D6EFD8] max-w-7xl mx-auto rounded-sm">
      <div>
        <h2 className="text-gray-900 md:text-5xl max-sm:text-2xl sm:text-2xl">
          Our mission is to preserve the beauty of nature for future
          generations.
        </h2>
        <button className="bg-[#081607] text-white px-6 py-3 mt-8 rounded hover:bg-green-700 transition duration-300 flex items-center gap-2">
          About us <GoArrowUpRight />
        </button>{" "}
      </div>
      <div className=" flex items-center">
        <p className="text-gray-900 mb-20 ">
          Fill your space with fresh, livel greenery that soothes the soul and
          cleanses the air. From cute little succulents to eye-catching
          statement plants, theres something for every space and style. Our
          plants are grown with love and care for their quality and beauty,
          ensuring you receive only the best. Find your perfect plant today and
          watch your space come to life!
        </p>
      </div>
    </div>
  );
};

export default Mission;
