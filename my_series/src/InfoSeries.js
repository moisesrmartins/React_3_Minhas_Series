import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navigate, useParams } from "react-router-dom";
import { Badge } from "reactstrap";

const InfoSeries = ({ match }) => {
  const [form, setForm] = useState({
    name: "",
  });
  const [success, setSuccess] = useState(false);

  const [mode, setMode] = useState("Edit/Coment");

  const [genres, setGenres] = useState([]);

  const [genreId, setGenreId] = useState("");

  const [genreName, setGenreName] = useState("");

  let { id } = useParams(match);

  const [data, setData] = useState({});
  useEffect(() => {
    console.log(id);
    axios.get("/api/Series/" + id).then((ans) => {
      setData(ans.data);
      setForm(ans.data);
    });
  }, [id]);

  useEffect(() => {
    axios.get("/api/Genres").then((res) => {
      setGenres(res.data.data);
      const genres = res.data.data;

      console.log("genreId", id);
      const finder = genres.find((value) => data.genres !== value.name);

      if (finder) {
        setGenreId(finder.id);
        setGenreName(finder.name);
      }

      console.log("find", finder);
    });
  }, [data.genres, data.name, id]);

  const masterHeader = {
    height: "50vh",
    minHeight: "500px",
    backgroundImage: `url(${data.background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const onChangeGenre = (genreId) => {
    setGenreId(genreId.target.value);
    console.log(genreId.target.value);
  };

  const onChange = (field) => (event) => {
    setForm({ ...form, [field]: event.target.value });
    console.log(event.target.value);
  };

  const select = (value) => () => {
    setForm({ ...form, status: value });
  };

  const save = () => {
    console.log(form, genreId);
    axios
      .put("/api/Series/" + id, { ...form, genre_id: genreId })
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
                  {data.status === "To Watch" && (
                    <Badge color="warning">To Watch</Badge>
                  )}
                </div>

                <div className="lead">
                  {data.status === "Watched" && (
                    <Badge color="success">Watched</Badge>
                  )}
                </div>

                <div className="lead text-white" onChange={onChangeGenre}>
                  Genre: {genreName}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setMode("Edit/Coment")}
        >
          Edit/Coment
        </button>
      </div>

      {mode === "Edit/Coment" && (
        <div className="container">
          <h1>Edit/Coment</h1>

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

              <label htmlFor="name">Coment</label>

              <input
                type="text"
                value={form.coment}
                onChange={onChange("coment")}
                className="form-control"
                id="name"
                placeholder="Coment Series"
              />

              <div className="form-group">
                <label htmlFor="name">Genres</label>

                <select
                  className="form-control"
                  onChange={onChangeGenre}
                  value={genreId}
                >
                  {genres.map((genre) => (
                    <option key={genre.id} value={genres.id}>
                      {genre.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="status"
                  id="To Watch"
                  value="To Watch"
                  onChange={select("To Watch")}
                  checked={form.status === "To Watch"}
                />

                <label className="form-check-label" htmlFor="To Watch">
                  To Watch
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="status"
                  id="Watched"
                  value="Watched"
                  onChange={select("Watched")}
                  checked={form.status === "Watched"}
                />

                <label className="form-check-label" htmlFor="Watched">
                  Watched
                </label>
              </div>

              <button type="button" onClick={save} className="btn btn-success">
                Save Edit/Coment
              </button>

              <button
                type="button"
                className="btn btn-danger"
                onClick={() => setMode("Cancel Coment")}
              >
                Cancel Edit/Coment
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default InfoSeries;
