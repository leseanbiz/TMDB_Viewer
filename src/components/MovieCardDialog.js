import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { Typography } from '@material-ui/core';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { fetchDetails } from '../actions/details';


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

function MovieCardDialog({open, setOpen, overview, id, title, details, doFetchDetails}) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));

  useEffect(() => {
   if(id !== details.id){
    doFetchDetails(id);
   }
  })

  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>
           Overview:
              {overview}{id}
              <a target="_blank" rel="noopener noreferrer" href={`https://www.imdb.com/title/${details.imdb_id}`}>IMDB LINK</a>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieCardDialog)