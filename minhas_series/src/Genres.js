import React, { useState, useEffect } from "react";
import axios from "axios";

const Genres = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("/genres").then((ans) => {
      setData(ans.data);
    });
  }, []);

  return (
    <div>
      <h1>Genres</h1>
      <pre>{JSON.stringify(data)}</pre>
    </div>
  );
};

export default Genres;
