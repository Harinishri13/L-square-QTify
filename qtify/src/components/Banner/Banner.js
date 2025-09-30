import React from "react";

const Banner = () => {
  return (
    <div className="bg-black text-white flex items-center justify-between px-10 py-8">
      <div>
        <h2 className="text-3xl font-bold">
          100 Thousand Songs, ad-free
        </h2>
        <p className="text-lg mt-2">
          Over thousands podcast episodes
        </p>
      </div>
      <div>
        🎧 {/* Replace with an image or SVG */}
      </div>
    </div>
  );
};

export default Banner;
