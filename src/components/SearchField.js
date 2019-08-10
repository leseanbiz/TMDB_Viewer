import React from 'react';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

export default function SearchField({query, setQuery}) {
  const classes = useStyles();
  console.log(query);
  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <TextField
          className={classes.margin}
          label="Search Movies!"
          variant="outlined"
          id="mui-theme-provider-outlined-input"
          onChange={event => setQuery(event.target.value)}
          value={query}
        />
      </ThemeProvider>
    </div>
  );
}
