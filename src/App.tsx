import React from 'react';
import {Route, Routes, BrowserRouter as Router} from "react-router-dom";
import {Items, Pokemon, Pokemons} from "./pages";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/pokemons/:name' element={<Pokemon />}/>
          <Route path='/items' element={<Items />}/>
          <Route path='/' element={<Pokemons />}/>
        </Routes>
      </div>
    </Router>

  );
}

export default App;
