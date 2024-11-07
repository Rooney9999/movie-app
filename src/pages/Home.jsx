import { useState, useEffect } from 'react';
import { fetchMovies } from '../services/movieService';
import Banner from '../components/Banner';
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';
import Pagination from '../components/Pagination';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || []);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const loadMovies = async () => {
      const data = await fetchMovies(page, search);
      setMovies(data.Search || []);
    };
    loadMovies();
  }, [page, search]);

  const toggleFavorite = (movie) => {
    const isFavorite = favorites.some((fav) => fav.imdbID === movie.imdbID);
    const updatedFavorites = isFavorite
      ? favorites.filter((fav) => fav.imdbID !== movie.imdbID)
      : [...favorites, movie];
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className="p-4">
      <Banner title="Explore Popular Movies" />
      <SearchBar setSearch={setSearch} />
      <div className="grid gap-1  my-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4">
  {movies.map((movie) => (
    <MovieCard
      key={movie.imdbID}
      movie={movie}
      isFavorite={favorites.some((fav) => fav.imdbID === movie.imdbID)}
      toggleFavorite={toggleFavorite}
    />
  ))}
</div>

      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export default Home;
