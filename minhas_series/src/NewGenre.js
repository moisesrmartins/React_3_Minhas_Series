import React, { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

const NewGenre = () => {
  const [name, setName] = useState("");
  const [success, setSuccess] = useState(false);
  const onChange = (event) => {
    setName(event.target.value);
    console.log(event.target.value);
  };
  const Save = () => {
    axios
      .post("/api/genres", {
        name,
      })
      .then((ans) => {
        setSuccess(true);
        console.log(ans);
      });
  };

  if (success) {
    return <Navigate to="/Genre" />;
  }

  return (
    <div className="container">
      <h1>New Genre</h1>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            value={name}
            onChange={onChange}
            className="form-control"
            id="name"
            placeholder="Genre Name"
          />
          <button type="button" onClick={Save} className="btn btn-primary">
            Save Gender
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewGenre;
