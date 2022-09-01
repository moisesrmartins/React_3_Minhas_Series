import React, { useState, useEffect } from "react";
import Header from "./Header";
import Genres from "./Genres";
import NewGenre from "./NewGenre";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = () => {
  return <h1>Home</h1>;
};

function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    axios.get("/api").then((ans) => {
      setData(ans.data);
    });
  }, []);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Genres" element={<Genres />} />
        <Route path="/Genres/NewGenre" element={<NewGenre />} />
      </Routes>
      <pre>{JSON.stringify(data)}</pre>
    </div>
  );
}

export default App;
