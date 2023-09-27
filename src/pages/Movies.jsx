import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import MoviesList from 'components/MoviesList';
import { searchMovies } from 'moviesAPI';

const Movies = () => {
  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();
  const [searchResults, setSearchResults] = useState([]);

  const query = searchParams.get('query');
  const handleSubmit = (value) => {
    setSearchParams({ query: value });
  };

  useEffect(() => {
    if (query) {
      searchMovies(query).then((movies) => {
        setSearchResults(movies);
      });
    }
  }, [query]);

    return (
      <div>
        <MoviesList movies={searchResults} />;
      </div>
    );
};

export default Movies;
