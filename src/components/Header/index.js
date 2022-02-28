// == import npm
import PropTypes from 'prop-types';

// == Import
import "./styles.scss";

// == composant
export default function Header({ count, changeSearch, search }) {
  return (
    <header className="header">
      <h1 className="header-title">oFig - nintendo</h1>
      <p className="header-baseline">{count === 0 ? 'Aucun jeux trouvé' : `${count} Jeux`}</p>
      <input
        type="text"
        className="header-search"
        value={search}
        placeholder="Rechercher..."
        onChange={(event) => changeSearch(event.target.value)}
      />
    </header>
  );
}

Header.propTypes = {
    count: PropTypes.number.isRequired,
    search: PropTypes.string.isRequired,
    changeSearch: PropTypes.func.isRequired,
};