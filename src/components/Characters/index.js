// == import npm
import PropTypes from "prop-types";

// == Import
import "./styles.scss";
import Character from "./Character";

// == Composant
export default function Characters({ list }) {
  return (
    <div className="characters">
      {list.map((character) => (
        <Character key={character.id} {...character} />
      ))}
    </div>
  );
}

Characters.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
