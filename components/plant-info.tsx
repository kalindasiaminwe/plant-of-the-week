'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import React from 'react';
import { merriweather } from './ui/fonts';

export default function PlantInfo() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div
      className={`${merriweather.className} relative h-[800px] bg-white`}
      style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
    >
      <div className="relative h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[800px] sticky top-[calc(100vh-800px)] flex items-center justify-center">
          <Content />
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <section className="relative z-10 bg-white">
      <div className="@container">
        <div className="@[480px]:px-4 @[480px]:py-3">
          <div
            className="bg-cover  bg-center flex flex-col justify-end overflow-hidden bg-white @[480px]:rounded-xl min-h-80"
            style={{
              backgroundImage:
                'linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 25%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCohGNr-3uhOcXkOv9qltVMiTFf4yi4emYDKMLhBqVGiXe-tyr0JfdHygwsQMb48TRfUgc9zvsu7bF8tuAX-wDnJ6CJbxDRA6bJ7bdadflAsG8kzePc5fMF748ltMStkRg1heUyP0tC3EqZt9fQK6v51YYcmZHn2xbklgfaJvDDyv5G_bpjaHgU3i9Hpr6vicy1P3fIOOcYg03XEZZFTwfMd305dfkSnq6ZsTPsryiTZ5eLDX4fBlpBFvVY0W5kek3dACJ0uC7RsWwa")',
            }}
          >
            <div className="flex p-4">
              <p className="text-white tracking-light text-[28px] font-bold leading-tight">
                Plant of the Week
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-[#131614] tracking-light text-[28px] font-bold leading-tight px-4 text-left pb-3 pt-5">
        Monstera Deliciosa
      </h2>
      <p className="text-[#131614] text-base font-normal leading-normal pb-3 pt-1 px-4">
        Also known as the Swiss Cheese Plant, the Monstera Deliciosa is a popular choice for its unique, perforated
        leaves. It's relatively easy to care for, making it perfect for both beginners and experienced plant lovers.
      </p>

      <h3 className="text-[#131614] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
        Care Instructions
      </h3>
      <p className="text-[#131614] text-base font-normal leading-normal pb-3 pt-1 px-4">
        Light: Prefers bright, indirect light but can tolerate some shade. Avoid direct sunlight to prevent leaf burn.
        Water: Water thoroughly when the top inch of soil feels dry. Reduce watering in winter. Humidity: Enjoys high
        humidity. Mist regularly or place a humidifier nearby. Temperature: Thrives in temperatures between 65-80°F
        (18-27°C). Soil: Use a well-draining potting mix. Fertilizer: Feed with a balanced liquid fertilizer every 2-4
        weeks during the growing season (spring and summer).
      </p>

      <h3 className="text-[#131614] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
        Interesting Facts
      </h3>
      <p className="text-[#131614] text-base font-normal leading-normal pb-12 pt-1 px-4">
        The name 'Monstera Deliciosa' comes from the Latin word 'monstrum,' meaning 'monster,' likely referring to its
        large leaves. The 'deliciosa' part refers to the delicious edible fruit it can produce under the right
        conditions. In the wild, it can grow up to 70 feet tall!
      </p>
    </section>
  );
}
