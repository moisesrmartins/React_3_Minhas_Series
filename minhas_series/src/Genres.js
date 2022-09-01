import React, { useState, useEffect } from "react";
import axios from "axios";

const Genres = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("/api/genres").then((ans) => {
      setData(ans.data.data);
    });
  }, []);

  return (
    <div>
      <h1>Genres</h1>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Moisés</td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <pre>{JSON.stringify(data)}</pre>
    </div>
  );
};

export default Genres;
