import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
});

export default function Stepper({ currentPage, totalPages, totalResults, nextPage, previousPage}) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <MobileStepper
      variant="progress"
      steps={totalPages}
      position="static"
      activeStep={currentPage - 1}
      className={classes.root}
      nextButton={
        <Button size="small" onClick={() => nextPage()} disabled={currentPage === totalPages}>
          Page {currentPage + 1}
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </Button>
      }
      backButton={
        <Button size="small" onClick={() => previousPage()} disabled={currentPage === 1}> 
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
          {currentPage === 1 ? ' ' : "Page " + (currentPage - 1)}
        </Button>
      }
    />
  );
}
