import React, { useState } from 'react';
import NavBar from './NavBar';
import SearchField from './SearchField';
import MovieCard from './MovieCard';
import Button from './Button';
import { connect } from 'react-redux';
import { fetchMovies } from '../actions/movies';



const mapStateToProps = state => {
  return {movies: state.moviesReducer}
  };

const mapDispatchToProps = dispatch => {
  return {
    doFetchMovies: query => dispatch(fetchMovies(query)),
  }
}

function App({movies, doFetchMovies}) {
  // console.log("APP:", movies);
  // const [data, setData] = useState('');
  const [query, setQuery] = useState('')//hateful to find empty image
  // const fetchData = async (search) => {
  //     console.log("fetch called", search);
  //     if(!search){ return alert("please enter a search value and try again")}
  //     const res = await fetch(MOVIE_DB_BASE_URL + API_KEY + "&query="+ search);
  //     const apiData = await res.json();
  //     doAddMovies(apiData.results)
  //   }
  // console.log(MOVIE_DB_BASE_URL + API_KEY + "hateful")
  console.log("Query:", query);
  return (
    <div className="">
      <NavBar />
      <SearchField
        setQuery={setQuery}
        query={query}
      />
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
