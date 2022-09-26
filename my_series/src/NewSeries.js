import React, { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

const NewSeries = () => {
  const [name, setName] = useState("");

  const [success, setSuccess] = useState(false);

  const onChange = (event) => {
    setName(event.target.value);
    console.log(event.target.value);
  };

  const save = () => {
    axios
      .post("/api/Series", {
        name,
      })
      .then((res) => {
        setSuccess(true);
        console.log(res);
      });
  };

  if (success) {
    return <Navigate to="/Series" />;
  }

  return (
    <div className="container">
      <h1>New Series</h1>

      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>

          <input
            type="text"
            value={name}
            onChange={onChange}
            className="form-control"
            id="name"
            placeholder="Series Name"
          />

          <button type="button" onClick={save} className="btn btn-primary">
            Save Series
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewSeries;
