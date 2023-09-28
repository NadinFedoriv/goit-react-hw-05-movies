import defaultImage from '../defaultImage/default-image.jpg';
import { MovieInfoWrapper } from './MovieCard.styled';

const MovieCard = ({ movieDetails }) => {
  const { title, vote_average, overview, poster_path, genres } = movieDetails;
  const userScore = Math.round(vote_average * 10);

  return (
    <MovieInfoWrapper>
      <div>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : defaultImage
          }
          alt={title}
        />
      </div>
      <div>
        <h2>{title}</h2>
        <p>User Score: {userScore}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genres.map(genre => genre.name).join(', ')}</p>
      </div>
    </MovieInfoWrapper>
  );
};

export default MovieCard;
