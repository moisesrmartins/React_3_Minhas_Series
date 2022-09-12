import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navigate, useParams } from "react-router-dom";

const InfoSeries = ({ match }) => {
  const [name, setName] = useState("");
  const [success, setSuccess] = useState(false);

  let { id } = useParams(match);

  const [data, setData] = useState({});
  useEffect(() => {
    axios.get("/api/Series/" + id).then((ans) => {
      setData(ans.data);
    });
  }, [id]);

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
      <h1>Info Series</h1>
      <pre>{JSON.stringify(data)}</pre>
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

export default InfoSeries;
