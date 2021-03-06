import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import MovieCardDialog from './MovieCardDialog';
import Collapse from '@material-ui/core/Collapse';
import Tooltip from '@material-ui/core/Tooltip';

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
  const tmdbImgUrl =  `https://image.tmdb.org/t/p/w500${img}`
  const fallbackImg = "https://ipsumimage.appspot.com/640x360?l=No+image+provided"
  const fallbackTitle = "no title provided";

  return (
   <GridListTile key={id} className={classes.tileBar} spacing={3}>
     <img src={ img ? tmdbImgUrl : fallbackImg } alt={title} />
     <GridListTileBar
       title={title ? title : fallbackTitle}
       subtitle={<span>release date: {releaseDate}</span>}
       votes={votes}
       actionIcon={
        <Tooltip title="view details" aria-label="view details">
         <IconButton 
          aria-label={`info about ${title}`} 
          className={classes.icon}
          onClick={handleExpandClick}
          aria-expanded={expanded}
         >
           <InfoIcon />
         </IconButton>
         </Tooltip>
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
