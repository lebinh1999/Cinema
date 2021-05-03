import React from "react";
import MovieItemNS from "./../MovieItem";
import MovieItemCS from "./../MovieItemCS";

function MovieList() {
  return (
    <section className="movie" name="homeMovie" id="homeMovie">
      <div className="movie__card__container">
        <ul className="nav nav-tabs navCenter" id="myTab" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link active"
              id="home-tab"
              data-toggle="tab"
              href="#nowShowingFilm"
              role="tab"
              aria-controls="nowShowingFilm"
              aria-selected="true"
            >
              Phim Đang Chiếu
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="profile-tab"
              data-toggle="tab"
              href="#upComingFilm"
              role="tab"
              aria-controls="upComingFilm"
              aria-selected="false"
            >
              Phim Sắp Chiếu
            </a>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="nowShowingFilm"
            role="tabpanel"
            aria-labelledby="nowShowingFilm"
          >
              <MovieItemNS/>
          </div>
          <div
            className="tab-pane fade"
            id="upComingFilm"
            role="tabpanel"
            aria-labelledby="upComingFilm"
          >
            <MovieItemCS/>
          </div>
        </div>
      </div>
    </section>
  );
}


export default MovieList;
