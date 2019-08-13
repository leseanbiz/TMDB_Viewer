import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import MovieCardDialog from './MovieCardDialog';
import Collapse from '@material-ui/core/Collapse';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  tileBar: {
   width: "100%",
   height:"100%",
   padding: 50
  }
}));

export default function TitlebarGridList({ id, img, title, votes, popularity, releaseDate, overview }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => setExpanded(!expanded)

  return (
   <GridListTile key={id} className={classes.tileBar} spacing={3}>
     <img src={img ? `https://image.tmdb.org/t/p/w500${img}` : null} alt={title} />
     <GridListTileBar
       
       title={title}
       subtitle={<span>by: {releaseDate}</span>}
       votes={votes}
       actionIcon={
         <IconButton 
          aria-label={`info about ${title}`} 
          className={classes.icon}
          onClick={handleExpandClick}
          aria-expanded={expanded}
         >
           <InfoIcon />
         </IconButton>
       }
         />
       <Collapse in={expanded} timeout="auto" unmountOnExit>
        <MovieCardDialog
          title={title}
          overview={overview}
          id={id}
          open={expanded}
          setOpen={setExpanded}
        />
      </Collapse>
   </GridListTile>
  );
}
