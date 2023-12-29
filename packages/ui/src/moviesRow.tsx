"use client";
import { Carousel } from "./carousel";

export function MoviesRow() {
  let movies = [
    {
      title: "Salaar: Cease Fire - Part 1",
      poster:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC40LzEwICA1NjAuM0sgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00301886-adtpyusrqu-portrait.jpg",
      genre: ["Action", "Drama", "Thriller"],
    },
  ];
  movies = [...movies, ...movies, ...movies, ...movies, ...movies, ...movies]
  movies = [...movies, ...movies, ...movies, ...movies, ...movies, ...movies]
  return (
    <div className="movies-row mt-14">
      <div className="wrapper flex flex-col px-60">
        <div className="title-see-all-btn-wrapper flex flex-row place-content-between">
            <h2 className="leading-8 font-semibold text-xl">Recommended</h2>
            <button className="text-red-500 text-l">See All &gt;</button>
        </div>
        <Carousel
          items={movies.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
          settings ={
            {
                className: "center",
                infinite: false,
                centerPadding: "60px",
                slidesToShow: 5,
                slidesToScroll: 5,
                swipeToSlide: true,
                arrows: true,
            }
          }
        />
      </div>
    </div>
  );
}

function MovieCard({ movie }: { movie: any }) {
  return (
    <a className="movie-card flex flex-col pr-5" href="#">
      <div className="poster">
        <img className="border rounded-xl object-contain h-80" src={movie.poster} />
      </div>
      <div className="movie-details">
        <h3 className="font-medium text-base pt-1">{movie.title}</h3>
        <p className="text-slate-500 text-sm  pt-1">{movie.genre.join("/")}</p>
      </div>
    </a>
  );
}
