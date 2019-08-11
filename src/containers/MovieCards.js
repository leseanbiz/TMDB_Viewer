import React from 'react';
import { connect } from 'react-redux';
import MovieCard from '../components/MovieCard';

const mapStateToProps = state => {
  return {
    movies: state.moviesReducer.results,
    }
  };

function MovieCards({ movies }) {
  
  return (
    <div className="">
      {
        movies ? movies.map(movie => {
            return (
                <MovieCard
                  key={movie.id}
                  id={movie.id}
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

export default connect(mapStateToProps)(MovieCards);
