import { useNavigate } from 'react-router-dom';
import { StarIcon } from '@heroicons/react/24/solid'; // Import the solid star icon

const MovieCard = ({ movie, isFavorite, toggleFavorite }) => {
  const navigate = useNavigate();

  return (
    <div
      className="border my-3 rounded-lg shadow-lg p-4 w-full sm:w-64 md:w-72 lg:w-80 cursor-pointer bg-gradient-to-br from-gray-800 via-gray-900 to-black hover:shadow-xl hover:scale-105 transform transition-all duration-300"
      onClick={() => navigate(`/movie/${movie.imdbID}`)}
    >
      <div className="overflow-hidden rounded-lg mb-4">
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="w-full h-64 object-fit rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
        />
      </div>
      <h3 className="text-xl font-semibold text-white">{movie.Title}</h3>
      <p className="text-gray-400 text-sm">{movie.Year}</p>
      <div
        onClick={(e) => {
          e.stopPropagation();
          toggleFavorite(movie);
        }}
        className="flex items-center justify-end mt-4 cursor-pointer"
      >
        <StarIcon
          className={`w-7 h-7 ${isFavorite ? 'text-yellow-500' : 'text-gray-400'} transition-colors duration-300`}
        />
      </div>
    </div>
  );
};

export default MovieCard;
