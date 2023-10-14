export const options = {
  params: { language: "tr", page: "1" },
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMDdmYWMzYjk4MDFlOWU5N2NhYTljYjdhNWEwMjlkZiIsInN1YiI6IjY1MGM3ZWRkMmM2YjdiMDBmZTQ2MWU5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QRoHbIoGjSoooqLjkxUBnMjXWrc015R7KPrxa2cCnDc",
  },
};

export const genresOptions = {
  method: "GET",
  url: "https://api.themoviedb.org/3/genre/movie/list",
  params: { language: "tr" },
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMDdmYWMzYjk4MDFlOWU5N2NhYTljYjdhNWEwMjlkZiIsInN1YiI6IjY1MGM3ZWRkMmM2YjdiMDBmZTQ2MWU5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QRoHbIoGjSoooqLjkxUBnMjXWrc015R7KPrxa2cCnDc",
  },
};

export const baseImgUrl = "http://image.tmdb.org/t/p/original";