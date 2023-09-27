import { useParams, useLocation, Link } from 'react-router-dom';
import { getMovieDetails } from 'services/moviesAPI';
import { useEffect, useRef, useState } from 'react';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    if (movieId) {
      getMovieDetails(movieId).then(data => {
        setMovie(data.movie);
      });
    }
  });
  const goBack = useRef(location?.state?.from ?? '/');
  return (
    <div>
      <Link to={goBack.current}>Go back</Link>
      MovieDetails
      <h1>{movie.title}</h1>
    </div>
  );
};

export default MovieDetails;
