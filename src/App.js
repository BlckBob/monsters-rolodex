import { useEffect, useState } from 'react';

import './App.css';

import CardList from './components/card-list/card-list.comp';
import SearchBox from './components/search-box/search-box.comp';

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSearchChange = (evt) => setSearchField(evt.target.value);

  const filteredMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div className='App'>
      <h1>Monsters Rolodex</h1>
      <SearchBox placeholder='search monsters' handleChange={onSearchChange} />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
