import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Loader } from 'components/Loader/Loader';
import { getMovieReviews } from 'services/moviesAPI';
import { toast } from 'react-toastify';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const noFound = movieReviews.length === 0;
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        const details = await getMovieReviews(movieId);
        setMovieReviews(details.results);
        console.log(details.results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {error && toast.error(`Something go wrong. Please try again`)}
      {noFound ? (
        <p>We don`t have any reviews for this movie.</p>
      ) : (
        <ul>
          {movieReviews.map(review => (
            <li key={review.id}>
              <h4>Author: {review.author}</h4>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Reviews;
