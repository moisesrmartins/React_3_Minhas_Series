import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Series = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/api/Series").then((ans) => {
      setData(ans.data.data);
    });
  }, []);

  const deleteSerie = (id) => {
    axios.delete("/api/Series/" + id).then((ans) => {
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
            onClick={() => deleteSerie(record.id)}
          >
            Remove
          </button>
          <Link className="btn btn-dark" to={"/Series/" + record.id}>
            Edit
          </Link>
        </td>
      </tr>
    );
  };

  if (data.length === 0) {
    return (
      <div className="container">
        <h1>Series</h1>
        <div className="alert alert-warning" role="alert">
          THERE ARE NO SERIES CREATED
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Series</h1>
      <div>
        <Link className="btn btn-light" to="/Series/NewSeries">
          New Series
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

export default Series;
