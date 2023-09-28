import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Loader } from 'components/Loader/Loader';
import { getMovieCredits } from 'services/moviesAPI';
import { toast } from 'react-toastify';
import CastCard from 'components/CastCard/CastCard';

const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setLoading(true);
        const details = await getMovieCredits(movieId);
        setMovieCast(details.cast);
        console.log(details.cast);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCast();
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {error && toast.error(`Something go wrong. Please try again`)}
      <CastCard actors={movieCast} />
    </>
  );
};

export default Cast;
