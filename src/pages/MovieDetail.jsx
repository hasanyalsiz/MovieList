import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseImgUrl, options } from "./../constants/constants";
import axios from "axios";

const MovieDetail = () => {
  const { movie_id } = useParams();
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    axios.get(`movie/${movie_id}`, options).then((res) => setDetail(res.data));
  }, []);

  const sum = detail?.revenue - detail?.budget;

  console.log(detail);

  if (!detail) return "Loading...";

  return (
    <div className="movie-detail row p-4">
      <div className="col-md-4 d-flex justify-content-center align-items-center">
        <div className="position-relative" style={{ maxWidth: "400px" }}>
          <img
            className="img-fluid rounded shadow-lg"
            src={baseImgUrl.concat(detail.poster_path)}
          />
          <span className="position-absolute bg-warning rounded p-1 shadow bottom-0 end-0 mb-3 me-4">
            {detail.vote_average.toFixed(1)}
          </span>
        </div>
      </div>
      <div className="col-md-8 d-flex flex-column justify-content-center">
        <h1>{detail.title}</h1>
        <p>{detail.overview}</p>

        <div className="row">
          <div className="col-6 col-md-12">
            <p>Maliyet: {detail.budget}$</p>
            <p>Hasılat: {detail.revenue}$</p>
            <p>
              {sum >= 0 ? "Kar" : "Zarar"}: {sum}$
            </p>
          </div>
          <div className="col-6 col-md-12">
            <div className="d-flex gap-3">
              Kategoriler:
              {detail.genres.map((genre) => (
                <p className="badge bg-primary">{genre.name}</p>
              ))}
            </div>
            <div className="d-flex gap-3">
              Diller:
              {detail.spoken_languages.map((lang) => (
                <p className="badge bg-danger">{lang.name}</p>
              ))}
            </div>
            <div className="d-flex gap-3">
              Yapımcı Şirketler:
              {detail.production_companies.map((comp) => (
                <p className="badge bg-success">{comp.name}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
