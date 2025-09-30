import React, { useState } from "react";
import Banner from "../components/Banner/Banner";
import AlbumSection from "../components/AlbumSection/AlbumSection";
import Tabs from "../components/Tabs/Tabs";

const albumsData = [
  { title: "New Bollywood", followers: 90, img: "/bollywood.png" },
  { title: "English Songs", followers: 100, img: "/english.png" },
];

const Home = () => {
  const [selectedTab, setSelectedTab] = useState("All");

  return (
    <div className="bg-black min-h-screen text-white">
      <Banner />
      <AlbumSection title="Top Albums" albums={albumsData} />
      <AlbumSection title="New Albums" albums={albumsData} />
      <Tabs
        tabs={["All", "Rock", "Pop", "Jazz", "Blues"]}
        onTabClick={setSelectedTab}
      />
      <AlbumSection title={`${selectedTab} Songs`} albums={albumsData} />
    </div>
  );
};

export default Home;
