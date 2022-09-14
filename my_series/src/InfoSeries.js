import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navigate, useParams } from "react-router-dom";
import { Badge } from "reactstrap";

const InfoSeries = ({ match }) => {
  const [form, setForm] = useState({});
  const [success, setSuccess] = useState(false);
  const [mode, setMode] = useState("");

  let { id } = useParams(match);

  const [data, setData] = useState({});
  useEffect(() => {
    axios.get("/api/Series/" + id).then((ans) => {
      setData(ans.data);
      setForm(ans.data);
    });
  }, [id]);

  const masterHeader = {
    height: "50vh",
    minHeight: "500px",
    backgroundImage: `url(${data.background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const onChange = (field) => (event) => {
    setForm({ ...form, [field]: event.target.value });
    console.log(event.target.value);
  };

  const save = () => {
    axios
      .post("/api/Series", {
        form,
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
    <div>
      <header style={masterHeader}>
        <div className="h-100" style={{ background: "rgba(0,0,0,0.7)" }}>
          <div className="h-100 container">
            <div className="row h-100 align-items-center">
              <div className="col-3">
                <img
                  alt={data.name}
                  className="img-fluid img-thumbnail"
                  style={{ background: "rgba(0,0,0,0.7)" }}
                  src={data.poster}
                />
              </div>
              <div className="col-8">
                <h1 className="font-weight-light text-white">{data.name}</h1>
                <div className="lead text-white">
                  <Badge color="success">Watched</Badge>
                </div>
                <div className="lead">
                  <Badge color="warning">To Watch</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div>
        <button
          type="button"
          class="btn btn-primary"
          onClick={() => setMode("Edit")}
        >
          Edit
        </button>
      </div>

      {mode === "Edit" && (
        <div className="container">
          <h1>Info Series</h1>
          <pre>{JSON.stringify(form)}</pre>
          <button
            type="button"
            class="btn btn-danger"
            onClick={() => setMode("Cancel Edit")}
          >
            Cancel Edit
          </button>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                value={form.name}
                onChange={onChange("name")}
                className="form-control"
                id="name"
                placeholder="Series Name"
              />
              <button type="button" onClick={save} className="btn btn-success">
                Edit Series
              </button>
            </div>
          </form>
        </div>
      )}

      <div>
        <button
          type="button"
          class="btn btn-primary"
          onClick={() => setMode("Coment")}
        >
          Coment
        </button>
      </div>

      {mode === "Coment" && (
        <div className="container">
          <h1>Info Series</h1>
          <pre>{JSON.stringify(form)}</pre>
          <button
            type="button"
            class="btn btn-danger"
            onClick={() => setMode("Cancel Coment")}
          >
            Cancel Coment
          </button>
          <form>
            <div className="form-group">
              <label htmlFor="name">Coment</label>
              <input
                type="text"
                value={form.coment}
                onChange={onChange("coment")}
                className="form-control"
                id="name"
                placeholder="Coment Series"
              />
              <button type="button" onClick={save} className="btn btn-success">
                Save Coment
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default InfoSeries;
