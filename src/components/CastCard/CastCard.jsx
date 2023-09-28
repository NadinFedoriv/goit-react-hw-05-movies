import defaultImage from '../defaultImage/default-image.jpg';
import { CastCardWrapper, ActorCard } from './CastCard.styled';

const CastCard = ({ actors }) => {
  return (
    <CastCardWrapper>
      {actors.map(actor => (
        <ActorCard key={actor.id}>
          <img
            src={
              actor.profile_path
                ? `https://image.tmdb.org/t/p/w400/${actor.profile_path}`
                : defaultImage
            }
            alt={actor.name}
          />
          <ul>
            <li>
              <p>{actor.name}</p>
            </li>
            <li>
              <p>Character: {actor.character}</p>
            </li>
          </ul>
        </ActorCard>
      ))}
    </CastCardWrapper>
  );
};

export default CastCard;
