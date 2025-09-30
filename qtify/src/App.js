import "./App.css";
import AlbumSongsPage from "./Components/AlbumSongsPage/AlbumSongsPage";
import HomePage from "./Components/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        {" "}
        <Route path="/" Component={HomePage} />{" "}
        <Route path="/album/:title" Component={AlbumSongsPage} />{" "}
      </Routes>{" "}
    </>
  );
};

export default App;
