import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchMovieDetails } from '../services/movieService';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadMovie = async () => {
      const data = await fetchMovieDetails(id);
      setMovie(data);
    };
    loadMovie();
  }, [id]);

  if (!movie) return <p className="text-white">Loading...</p>;

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 min-h-screen p-8 text-white">
      <button
        onClick={() => navigate(-1)}
        className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-3 mb-6 inline-block transition duration-300"
      >
        Back
      </button>

      {/* Movie Detail Container */}
      <div className="max-w-5xl mx-auto bg-black rounded-lg shadow-lg p-6 space-y-6">
        {/* Movie Poster */}
        <div className="relative mb-8">
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="w-full h-auto max-h-[500px] object-contain rounded-lg shadow-xl"
          />
        </div>
        
        {/* Movie Title */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-pink-500">
            {movie.Title}
          </h1>
          <p className="text-lg mt-4">{movie.Plot}</p>
        </div>

        {/* Movie Details */}
        <div className="space-y-4 text-lg">
          <p><strong className="text-yellow-400">Director:</strong> {movie.Director}</p>
          <p><strong className="text-yellow-400">Cast:</strong> {movie.Actors}</p>
          <p><strong className="text-yellow-400">Runtime:</strong> {movie.Runtime}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
