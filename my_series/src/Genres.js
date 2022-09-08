import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Genres = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/api/genres").then((ans) => {
      setData(ans.data.data);
    });
  }, []);

  const deleteGenre = (id) => {
    axios.delete("/api/genres/" + id).then((ans) => {
      const filter = data.filter((item) => item.id !== id);
      setData(filter);
      console.log(ans);
    });
  };

  const renderLine = (record) => {
    return (
      <tr key={record.id}>
        <th scope="row">{record.id}</th>
        <td>{record.name}</td>
        <td>
          <button
            className="btn btn-dark"
            onClick={() => deleteGenre(record.id)}
          >
            Remove
          </button>
          <Link className="btn btn-dark" to={"/Genres/" + record.id}>
            Edit
          </Link>
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
      <div>
        <Link className="btn btn-light" to="/Genres/NewGenre">
          New Genre
        </Link>
      </div>
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
