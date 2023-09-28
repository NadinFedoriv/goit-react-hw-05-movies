import defaultImage from '../defaultImage/default-image.jpg';

const CastCard = ({ actors }) => {
  return (
    <div>
      {actors.map(actor => (
        <div key={actor.id}>
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
        </div>
      ))}
    </div>
  );
};

export default CastCard;
