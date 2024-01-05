'use client'
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import { Carousel } from './carousel'

export function MoviesRow() {
  let movies = [
    {
      title: 'Salaar: Cease Fire - Part 1',
      poster:
        'https://image.tmdb.org/t/p/original/5a4JdoFwll5DRtKMe7JLuGQ9yJm.jpg',
      genre: ['Action', 'Drama', 'Thriller'],
    },
    {
      title: 'Family Man',
      poster: "https://image.tmdb.org/t/p/original/r9oTasGQofvkQY5vlUXglneF64Z.jpg",
      genre: ['Action', 'Drama', 'Thriller'],
    },
  ]
  movies = [...movies, ...movies, ...movies, ...movies, ...movies, ...movies]
  movies = [...movies, ...movies, ...movies, ...movies, ...movies, ...movies]
  return (
    <div className="movies-row mt-8">
      <div className="wrapper flex flex-col px-40">
        <div className="title-see-all-btn-wrapper flex flex-row place-content-between mb-2">
          <h2 className="leading-8 font-semibold text-xl">Recommended Movies</h2>
          <button className="text-red-500 text-sm">See All &gt;</button>
        </div>
        <Carousel
          items={movies.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
          settings={{
            className: 'center',
            infinite: false,
            centerPadding: '60px',
            slidesToShow: 5,
            slidesToScroll: 5,
            swipeToSlide: true,
            arrows: true,
          }}
        />
      </div>
    </div>
  )
}

function MovieCard({ movie }: { movie: any }) {
  return (
    <a className="movie-card flex flex-col pr-6" href="#">
      <div className="poster flex flex-col relative justify-center">
        <img className="rounded-xl object-cover w-60 h-96" src={movie.poster} />
        <span className='flex flex-row bg-black text-gray-300 px-1 rounded-b-xl absolute bottom-0 w-full py-1'>
          <StarRateRoundedIcon className='text-red-500 mr-1' fontSize='medium'/>
          <span className=''>7.3/10 &nbsp; 560.3K Votes</span>
        </span>
      </div>
      <div className="movie-details">
        <h3 className="font-medium text-base pt-1">{movie.title}</h3>
        <p className="text-slate-500 text-sm  pt-1">{movie.genre.join('/')}</p>
      </div>
    </a>
  )
}
