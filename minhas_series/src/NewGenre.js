import React, { useState } from "react";

const NewGenre = () => {
  return (
    <div className="container">
      <h1>New Genre</h1>
      <form>
        <div class="form-group">
          <label for="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Genre Name"
          />
          <button type="button" class="btn btn-primary">
            Save Gender
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewGenre;
