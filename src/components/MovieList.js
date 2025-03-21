import MovieCard from "./MovieCard";

const MovieList = ({ title, movies = [] }) => {
  return (
    <div className="px-6">
      <h1 className="text-2xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex">
          {Array.isArray(movies) ? (
            movies.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))
          ) : (
            <p className="text-white">No movies available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
