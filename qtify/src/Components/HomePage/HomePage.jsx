import React, { useState, useEffect } from "react";
import sectionStyles from "../Section/section.module.css";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import Section from "../Section/Section";
import { fetchTopAlbum, fetchNewAlbum, fetchSongs, fetchGenres } from "../../api/api";
import { FAQs } from "../FAQs/FAQs";
import Footer from "../Footer/Footer";

function HomePage() {
  const [topAlbum, setTopAlbum] = useState([]);
  const [newAlbum, setNewAlbum] = useState([]);
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setError(null);

        const topAlbumData = await fetchTopAlbum();
        const newAlbumData = await fetchNewAlbum();
        const fetchSongsData = await fetchSongs();
        const fetchGenresData = await fetchGenres();

        // Ensure all API results are arrays
        setTopAlbum(Array.isArray(topAlbumData) ? topAlbumData : []);
        setNewAlbum(Array.isArray(newAlbumData) ? newAlbumData : []);
        setSongs(Array.isArray(fetchSongsData) ? fetchSongsData : []);
        setGenres(Array.isArray(fetchGenresData?.data) ? fetchGenresData.data : []);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load content. Please try again later.");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return <div style={{ textAlign: "center", marginTop: "2rem" }}>Loading...</div>;
  }

  if (error) {
    return <div style={{ textAlign: "center", marginTop: "2rem", color: "red" }}>{error}</div>;
  }

  return (
    <>
      <Navbar data={topAlbum.concat(newAlbum)} page="home" />
      <Hero />
      <div className={sectionStyles.sectionWrapper}>
        <Section title="Top Albums" data={topAlbum} type="album" />
        <Section title="New Albums" data={newAlbum} type="album" />
        <hr />
        <Section title="Songs" data={songs} type="songs" genres={genres} />
        <hr />
      </div>
      <FAQs />
      <hr className={sectionStyles.divider} />
      <Footer />
      <hr />
    </>
  );
}

export default HomePage;
