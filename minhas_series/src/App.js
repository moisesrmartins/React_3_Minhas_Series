import React from 'react';
import Header from "./Header";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const Home = () => {
  return <h1>Home</h1>
}
const Genres = () => {
  return <h1>Genres</h1>
}

function App () {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/Genres" element = {<Genres/>}/>
      </Routes>
    </div>
  );
}

export default App;