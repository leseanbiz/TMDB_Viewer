import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  leftIcon: {
    marginRight: theme.spacing(1),
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
  iconSmall: {
    fontSize: 20,
  },
}));

export default function CustomButton({doFetchMovies, search}) {
  const classes = useStyles();
  console.log("search in button", search)
  return (
    <div>
      <Button variant="contained" color="secondary" onClick={search => doFetchMovies(search)}className={classes.button}>
        Search
        <DeleteIcon className={classes.rightIcon} />
      </Button>
    </div>
  );
}
