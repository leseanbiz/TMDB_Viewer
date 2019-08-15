import React from 'react';
import { connect } from 'react-redux';
import { Grid, GridList, makeStyles } from'@material-ui/core';
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
    <Grid container justify="space-evenly">
      {
        movies ? movies.map(movie => {
          const { id, backdrop_path, title, vote_count, votes_average, release_date, overview } = movie;
            return (
              <GridList cellHeight="auto" key={movie.id} className={classes.gridList} spacing={3}>
                <MovieTile
                  id={id}
                  img={backdrop_path}
                  title={title}
                  votes={vote_count}
                  popularity={votes_average}
                  releaseDate={release_date}
                  overview={overview}
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
