import React from "react";
import Header from "./Header";
import Genres from "./Genres";
import NewGenre from "./NewGenre";
import EditGenre from "./EditGenre";
import Series from "./Series";
import NewSeries from "./NewSeries";
import InfoSeries from "./InfoSeries";
import { Routes, Route } from "react-router-dom";

const Home = () => {
  return <h1>Home</h1>;
};

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Genres/NewGenre" element={<NewGenre />} />
        <Route path="/Genres/:id" element={<EditGenre />} />
        <Route path="/NewGenre" element={<NewGenre />} />
        <Route path="/Genres" element={<Genres />} />
        <Route path="/Series" element={<Series />} />
        <Route path="/Series/NewSeries" element={<NewSeries />} />
        <Route path="/Series/:id" element={<InfoSeries />} />
        <Route path="/NewSeries" element={<NewSeries />} />
      </Routes>
    </div>
  );
}

export default App;
