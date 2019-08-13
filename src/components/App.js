import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import Search from '../containers/Search';
import NavBar from './NavBar';
import Pagination from '../containers/Pagination';
import MovieCards from '../containers/MovieCards';

function App() {

  const [query, setQuery] = useState('')
  
  return (
      <Grid container spacing={3}>
          <NavBar />
        <Grid container>
          <Search 
            query={query}
            setQuery={setQuery}
          />
        </Grid>
        <Grid container spacing={2}>
          <Pagination 
            query={query}
          />
        </Grid>
        <Grid container>
          <MovieCards />
        </Grid>
      <Grid container spacing={2}>
        <Pagination 
          query={query}
        />
      </Grid>
    </Grid>
  );
}

export default App;
