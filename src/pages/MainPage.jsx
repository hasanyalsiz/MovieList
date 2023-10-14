import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Hero from "../components/Hero";
import { getGenres, getMovies, setLoading } from "../redux/actions/actions";
import ListMovies from "../components/ListMovies";

const MainPage = () => {
  const dispatch = useDispatch();
  const state = useSelector((store) => store.movieReducer);

  useEffect(() => {
    // loading true yapar
    dispatch(setLoading(true));

    // populer film verisini cek ve store a aktar
    dispatch(getMovies());

    // kategori verilerini cek ve store a aktar
    dispatch(getGenres());
  }, []);

  return (
    <div>
      <Hero />
      {/* herbir kategori için o kategoriye ait
       * filmleri listeleyecek bileseni ekrana basma
       */}
      {state.genres.map((genre) => (
        <ListMovies key={genre.id} genre={genre} />
      ))}
    </div>
  );
};

export default MainPage;
