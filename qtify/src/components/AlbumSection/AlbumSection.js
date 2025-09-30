import React from "react";
import AlbumCard from "../AlbumCard/AlbumCard";

const AlbumSection = ({ title, albums }) => {
  return (
    <div className="px-6 py-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <button className="text-green-400">Show all</button>
      </div>
      <div className="flex gap-4 overflow-x-auto">
        {albums.map((album, index) => (
          <AlbumCard key={index} {...album} />
        ))}
      </div>
    </div>
  );
};

export default AlbumSection;
