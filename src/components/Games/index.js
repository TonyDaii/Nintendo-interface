// == import npm
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

// == Composant
export default function Games({list, changeGame}) {
    return(
        <ul className="games">
            {list.map((game) => (
                <li key={game} className="game">
                    <a className="game-link" onClick={() => changeGame(game)}>{game}</a>
                </li>
            ))}
        </ul>
    )
} 

Games.propTypes = {
    list: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    changeGame: PropTypes.func.isRequired,
};
  