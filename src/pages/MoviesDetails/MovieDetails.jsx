import { useParams, useLocation, Link } from 'react-router-dom';
import { getMovieDetails } from 'services/moviesAPI';
import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import MovieCard from 'components/MovieCard/MovieCard';
import { Loader } from 'components/Loader/Loader';
import { GoArrowLeft } from 'react-icons/go';
import * as S from './MovieDetails.styled';

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
    <S.Wrapper>
      {loading && <Loader />}
      {error && toast.error(`Something go wrong. Please try again`)}
      <S.BackLink to={goBack.current}>
        <GoArrowLeft />
        Go back
      </S.BackLink>
      {movieDetails ? <MovieCard movieDetails={movieDetails} /> : <Loader />}

      <S.AdditionalInfo>Additional information</S.AdditionalInfo>
      <S.InfoList>
        <S.InfoItem>
          <Link to="cast">Cast</Link>
        </S.InfoItem>
        <S.InfoItem>
          <Link to="reviews">Reviews</Link>
        </S.InfoItem>
      </S.InfoList>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </S.Wrapper>
  );
};

export default MovieDetails;
