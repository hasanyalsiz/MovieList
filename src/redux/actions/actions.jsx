import axios from "axios";
import { ActionTypes } from "../../constants/actionTypes";
import { options } from "../../constants/constants";

// bütün atılan isteklerin basına eklenır
axios.defaults.baseURL = "https://api.themoviedb.org/3";

// !senkron (normal) aksiyon
// aksiyon objesi olusturan bir fonksiyon
export const setLoading = (payload) => ({
  type: ActionTypes.SET_LOADING,
  payload,
});

// ! asenkron (thunk) aksiyon
// hem verileri ceksin hem reducer a aktarsın
export const getMovies = () => {
  return async function (dispatch) {
    // veri çekme işlemleri
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?language=en",
      options
    );
    // gelen veriyi reducer a aktarma
    dispatch({
      type: ActionTypes.SET_MOVIES,
      payload: res.data,
    });
  };
};

// thunk aksiyonunun kısa yazımı
// export const kisaYazim = () => async (dispatch) => {
// veri çekme işlemleri
// gelen veriyi reducer a aktarma
// };

export const getGenres = () => (dispatch) => {
  // kategori verrilerini cek
  axios
    .get("https://api.themoviedb.org/3/genre/movie/list?language=en", options)
    .then((res) =>
      // reducer a aktar
      dispatch({
        type: ActionTypes.SET_GENRES,
        payload: res.data.genres,
      })
    )
    .catch((err) => console.log(err));
};
