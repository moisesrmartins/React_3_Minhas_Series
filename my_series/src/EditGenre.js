import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navigate, useParams } from "react-router-dom";

const EditGenre = ({ match }) => {
  const [name, setName] = useState("");

  const [success, setSuccess] = useState(false);

  const onChange = (event) => {
    setName(event.target.value);
    console.log(event.target.value);
  };

  let { id } = useParams(match);

  useEffect(() => {
    axios.get("/api/Genres/" + { id }).then((ans) => {
      setName(ans.data.name);
    });
  }, [id]);

  console.log(match);

  const save = () => {
    axios
      .put("/api/Genres/" + id, {
        name,
      })
      .then((res) => {
        setSuccess(true);
        console.log(res);
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

          <button type="button" onClick={save} className="btn btn-primary">
            Edit Gender
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditGenre;
