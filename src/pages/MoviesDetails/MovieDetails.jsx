import { useParams, useLocation, Link } from 'react-router-dom';
import { getMovieDetails } from 'services/moviesAPI';
import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import MovieCard from 'components/MovieCard/MovieCard';
import { Loader } from 'components/Loader/Loader';
import { GoArrowLeft } from 'react-icons/go';

const MovieDetails = () => {
  const { movieId } = useParams();

  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setLoading(true);
        const details = await getMovieDetails(movieId);
        setMovieDetails(details);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovieDetails();
  }, [movieId]);

    const goBack = useRef(location?.state?.from ?? '/');

  return (
    <>
      {loading && <Loader />}
      {error && toast.error(`Something go wrong. Please try again`)}
      <Link to={goBack.current}><GoArrowLeft/>Go back</Link>
      {movieDetails ? <MovieCard movieDetails={movieDetails} /> : <Loader />}
      <p>Additional information</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
