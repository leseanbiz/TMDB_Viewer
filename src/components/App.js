import React, { useState } from 'react';
import NavBar from './NavBar';
import SearchField from './SearchField';
import MovieCard from './MovieCard';
import Button from './Button';
import { connect } from 'react-redux';
import { fetchMovies, nextPage, previousPage } from '../actions/movies';
import Stepper from './Stepper';

const mapStateToProps = state => {
  return {
    movies: state.moviesReducer.results,
    currentPage: state.moviesReducer.page,
    totalPages: state.moviesReducer.total_pages,
    totalResults: state.moviesReducer.total_results,
  }
  };

const mapDispatchToProps = dispatch => {
  return {
    doFetchMovies: query => dispatch(fetchMovies(query)),
    doNextPage: (num) => dispatch(nextPage(num)),
    doPreviousPage: (num) => dispatch(previousPage(num)),
  }
}

function App({movies, doFetchMovies, currentPage, totalPages, totalResults, doNextPage, doPreviousPage}) {
  
  const [query, setQuery] = useState('')//hateful to find empty image
  const [activeStep, setActiveStep] = React.useState(1);

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
    doNextPage(currentPage + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
    doPreviousPage(currentPage - 1);
  }
  
  return (
    <div className="">
      <NavBar />
      <SearchField
        setQuery={setQuery}
        query={query}
      />
      {totalPages > 1 ?
        <Stepper
          query={query}
          currentPage={currentPage}
          totalPages={totalPages}
          totalResults={totalResults}
          nextPage={() => handleNext()}
          previousPage={() => handleBack()}
        />
        : null
      }
      <Button
        doFetchMovies={() => doFetchMovies(query)}
        query={query}// is this needed?
       />
      {
        movies ? movies.map(movie => {
            return (
              <MovieCard
                key={movie.id}
                img={movie.backdrop_path}
                title={movie.title}
                votes={movie.vote_count}
                popularity={movie.votes_average}
                releaseDate={movie.release_date}
                overview={movie.overview}
              />
            )
          }
        ) : <h1>Please enter a search value</h1>
      }
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
