
// == Import
import './styles.scss';
import gamesList from '../../data/games';
import charactersList from '../../data/characters-full'

import Header from '../Header/index';
import Characters from '../Characters/index';
import Games from '../Games/index'

import { useState } from "react";

// == Composant
function App() {
  const [search, setSearch] = useState('');

  console.log(charactersList)

  const filteredGames = gamesList.filter((currentGame) => {
    const value = search.toLowerCase().trim();
    return currentGame.toLowerCase().includes(value);
  })

  console.log(filteredGames)

  return (
    <div className="app">
      <Header count={filteredGames.length} changeSearch={setSearch} search={search}/>
      <div className="app-content">
        <Games />
        <Characters />
      </div>
    </div>
  );
}

export default App;
