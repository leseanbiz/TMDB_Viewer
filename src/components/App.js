import React, { useState } from 'react';
import Search from '../containers/Search';
import NavBar from './NavBar';
import Pagination from '../containers/Pagination';
import MovieCards from '../containers/MovieCards';

function App() {

  const [query, setQuery] = useState('')
  
  return (
    <div className="">
      <NavBar />
      <Search 
        query={query}
        setQuery={setQuery}
      />
      <Pagination 
        query={query}
      />
      <MovieCards />
    </div>
  );
}

export default App;
