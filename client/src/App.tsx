import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';

import './App.css';

import NabBar from './components/NabBar/NavBar';
import Items from './components/Items/Items';
import { itemsSearch } from './interface';
import Detail from './components/Detail/Detail';


function App() {
  const [items, setItems] = useState<itemsSearch[]>()
  const [category, setCategory] = useState<string[]>()

  async function onSearch (name:string) {
    const { data } = await axios.get(`http://localhost:3001/api/items?q=${name}`)
    let response = await data //response es ahora un array de objetos
    setItems(response.items)
    console.log("soy items: ", items)
    setCategory(response.category)
    console.log("soy category: ", category)
}

  return (
    <div className="App">
      <NabBar onSearch={onSearch}/>
      <Routes>
        <Route path={'/items'} element={<Items items={items!} category={category!}/>}/>
        <Route path={'/items/:id'} element={<Detail category={category!}/>}/>
      </Routes>
    </div>
  );
}

export default App;
