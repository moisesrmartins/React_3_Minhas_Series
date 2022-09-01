import React, { useState } from "react";

const NewGenre = () => {
  const [name, setName] = useState("");
  const onChange = (event) => {
    setName(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div className="container">
      <h1>New Genre</h1>
      <form>
        <div className="form-group">
          <label htmlfor="name">Name</label>
          <input
            type="text"
            value={name}
            onChange={onChange}
            className="form-control"
            id="name"
            placeholder="Genre Name"
          />
          <button type="button" className="btn btn-primary">
            Save Gender
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewGenre;
