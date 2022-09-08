import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

const EditGenre = ({ match }) => {
  const [name, setName] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    axios.get("/api/Genres/" + match.params.id).then((ans) => {
      setName(ans.data.name);
      console.log(ans);
    });
  }, []);

  console.log(match);

  const onChange = (event) => {
    setName(event.target.value);
    console.log(event.target.value);
  };

  const Save = () => {
    axios
      .put("/api/Genres/", {
        name,
      })
      .then((ans) => {
        setSuccess(true);
        console.log(ans);
      });
  };

  if (success) {
    return <Navigate to="/Genres" />;
  }

  return (
    <div className="container">
      <h1>Edit Genre</h1>
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
            Edit Gender
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditGenre;
