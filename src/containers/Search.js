import React from 'react';
import { Grid } from '@material-ui/core';
import SearchField from '../components/SearchField';
import Button from '../components/Button';
import { connect } from 'react-redux';
import { fetchMovies } from '../actions/movies';

const mapDispatchToProps = dispatch => {
  return {
    doFetchMovies: query => dispatch(fetchMovies(query)),
  }
}

function Search({ query, setQuery, doFetchMovies }) {

  function handleButtonFetchMovies() {
   doFetchMovies(query);
  }
  
  function handleSearchFetchMovies(event) {
   console.log(event.keyCode)
   if (event.keyCode === 13) {
    doFetchMovies(query);
   }
  }

  return (
        <Grid container item xs={12} justify="center">
          <SearchField
            setQuery={setQuery}
            query={query}
            handleSearchFetchMovies={handleSearchFetchMovies}
          />
            {/* <Button
              handleButtonFetchMovies={() => handleButtonFetchMovies(query)}
              query={query}
            /> */}
      </Grid>
  );
}

export default connect(null, mapDispatchToProps)(Search);
