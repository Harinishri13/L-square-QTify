import React from "react";

const AlbumCard = ({ title, followers, img }) => {
  return (
    <div className="bg-gray-900 text-white rounded-lg shadow-lg p-2 w-40">
      <img src={img} alt={title} className="rounded-md" />
      <div className="mt-2">
        <p className="text-sm font-semibold">{title}</p>
        <p className="text-xs text-gray-400">{followers} Follows</p>
      </div>
    </div>
  );
};

export default AlbumCard;
