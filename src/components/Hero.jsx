import React from "react";
import { useSelector } from "react-redux";
import { baseImgUrl } from "../constants/constants";
import { Link } from "react-router-dom";

const Hero = () => {
  // abone olma işlemi(store da tutulan verilere erisme)
  const state = useSelector((store) => store.movieReducer);

  // dizinin uzunluguna göre rastgele sayı bulma
  const i = Math.floor(Math.random() * state.popularMovies.length);

  // diziden rastgele bir film alma
  const film = state.popularMovies[i];

  return (
    <div className="row p-4">
      {/* yüklenme sürüyorsa ekrana basılır */}
      {state.isLoading && <p>Loading...</p>}
      {/* yüklenme bittiyse */}
      {!state.isLoading && (
        <>
          <div className="col-md-6 gap-3 mb-3 d-flex flex-column justify-content-center">
            <h1>{film.title}</h1>
            <p className="lead">{film.overview}</p>
            <p className="text-warning fw-bold">IMDB: {film.vote_average}</p>
            <div className="d-flex gap-3 justify-content-center">
              <Link to={`/movie/${film.id}`} className="btn btn-danger">
                Filmi İzle
              </Link>
              <button className="btn btn-info">Listeye Ekle</button>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <img
              className="img-fluid rounded shadow"
              src={`${baseImgUrl}${film.backdrop_path}`}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Hero;
