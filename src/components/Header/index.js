// == Import
import "./styles.scss";

// == composant
export default function Header({ count, changeSearch, search }) {
  return (
    <header className="header">
      <h1 className="header-title">oFig - nintendo</h1>
      <p className="header-baseline">{count} Jeux</p>
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
