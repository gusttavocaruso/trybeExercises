import React from 'react';
import movies from './data';
import './App.css';

import Header from './components/Header';
import Rating from './components/Rating';
import MovieLibrary from './components/MovieLibrary';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={ movies } />
      <Rating />
      {/* <SearchBar searchText="something" /> */}
      {/* <AddMovie /> */}
    </div>
  );
}

export default App;
