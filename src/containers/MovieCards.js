import React from 'react';
import { connect } from 'react-redux';
import { Grid, GridList, makeStyles } from'@material-ui/core';
import MovieCard from '../components/MovieCard';
import MovieTile from '../components/MovieTile';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 350,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

const mapStateToProps = state => {
  return {
    movies: state.moviesReducer.results,
    }
  };

function MovieCards({ movies }) {
  const classes = useStyles();
  return (
    <Grid container justify="space-evenly" alignContent="space-evenly" >
      {
        movies ? movies.map(movie => {
            return (
              <GridList cellHeight="auto" className={classes.gridList} spacing={3}>
                <MovieTile
                  id={movie.id}
                  img={movie.backdrop_path}
                  title={movie.title}
                  votes={movie.vote_count}
                  popularity={movie.votes_average}
                  releaseDate={movie.release_date}
                  overview={movie.overview}
                />
              </GridList>
            )
          }
        ) : <h1>Please enter a search value</h1>
      }
      </Grid>
  );
}

export default connect(mapStateToProps)(MovieCards);
