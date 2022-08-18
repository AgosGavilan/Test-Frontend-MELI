import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';

import './App.scss';

import NabBar from './components/NavBar/NavBar';
import Items from './components/Items/Items';
import { itemsSearch } from './interface';
import Detail from './components/Detail/Detail';


function App() {
  const [search, setSearch] = useState<itemsSearch[]>([])
  const [category, setCategory] = useState<string[]>()

  async function onSearch (name:string) {
    const { data } = await axios.get(`http://localhost:3001/api/items?q=${name}`)
    let response = await data //response es ahora un array de objetos
    setSearch(response.items)
    setCategory(response.category)
}

  return (
    <div className="App">
      <NabBar onSearch={onSearch} setSearch={setSearch}/>
      <Routes>
        <Route path={'/items'} element={<Items items={search!} category={category!}/>}/>
        <Route path={'/items/:id'} element={<Detail category={category!}/>}/>
      </Routes>
    </div>
  );
}

export default App;
