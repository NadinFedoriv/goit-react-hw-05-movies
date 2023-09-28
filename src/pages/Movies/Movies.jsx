import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import MoviesList from 'components/MoviesList/MoviesList';
import { searchMovies } from 'services/moviesAPI';
import SearchForm from 'components/SearchForm/SearchForm';
import { toast } from 'react-toastify';
import { Loader } from 'components/Loader/Loader';

const Movies = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query');

  useEffect(() => {
    const fetchSearchMovies = async () => {
      try {
        setLoading(true);
        if (query) {
          const movies = await searchMovies(query);
          setSearchResults(movies);
          if (movies.length === 0) {
            return toast.error(`No results found for ${query}`);
          }
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchSearchMovies();
  }, [query]);

  return (
    <div>
      {loading && <Loader />}
      {error && toast.error(`Something go wrong. Please try again`)}
      <SearchForm onSubmit={setSearchParams} />
      <MoviesList movies={searchResults} />
    </div>
  );
};

export default Movies;
