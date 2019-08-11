import React, { useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import { connect } from 'react-redux';
import { fetchDetails } from '../actions/movies';

const mapDispatchToProps = dispatch => {
 return {
   doFetchDetails: id => dispatch(fetchDetails(id)),
 }
}

const mapStateToProps = state => {
 return {
   details: state.detailsReducer,
   }
 };

const MovieCardDetails = ({overview, id, doFetchDetails, details}) => {

 useEffect(() => {
  // console.log("movieCardDetails useEffect details:", details)
  if(id !== details.id){
   doFetchDetails(id);
  }
 }, [])

 return(
         <CardContent>
          <Typography paragraph>Overview:</Typography>
          <Typography paragraph>
            {overview}{id}
            <a target="_blank" rel="noopener noreferrer" href={`https://www.imdb.com/title/${details.imdb_id}`}>IMDB LINK</a>
          </Typography>
        </CardContent>
 )
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieCardDetails)