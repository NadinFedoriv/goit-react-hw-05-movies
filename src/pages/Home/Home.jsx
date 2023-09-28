import { useEffect, useState } from 'react';
import MoviesList from 'components/MoviesList/MoviesList';
import { getTrending } from 'services/moviesAPI';
import { Loader } from 'components/Loader/Loader';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        setLoading(true);
        const response = await getTrending();
        setMovies(response);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchTrending();
  }, []);

  return (
    <>
      {loading && <Loader />}
      {error && <p>Something go wrong</p>}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </>
  );
};

export default Home;
