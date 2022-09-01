import React, { useState, useEffect } from "react";
import axios from "axios";

const Genres = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("/api/genres").then((ans) => {
      setData(ans.data.data);
    });
  }, []);

  const renderLine = (record) => {
    return (
      <tr>
        <th scope="row">{record.id}</th>
        <td>{record.name}</td>
        <td>
          <button>+</button>
        </td>
      </tr>
    );
  };

  if (data.length === 0) {
    return (
      <div className="container">
        <h1>Genres</h1>
        <div className="alert alert-warning" role="alert">
          THERE ARE NO GENRES CREATED
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Genres</h1>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>{data.map(renderLine)}</tbody>
      </table>
    </div>
  );
};

export default Genres;
