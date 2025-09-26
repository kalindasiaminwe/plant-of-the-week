import React from "react";

const Hero = () => {
  return (
    <div
      className="w-full h-[600px] bg-contain bg-no-repeat bg-center"
      style={{ backgroundImage: "url('/images/tls.png')" }}
    >
      {/* Optional overlay content */}
      <div className="flex items-center justify-center h-full">
        <h1 className="text-[#081607] text-6xl font-bold text-center">Where Every Plant <br/> Finds a Home</h1>
      </div>
    </div>
  );
};

export default Hero;
