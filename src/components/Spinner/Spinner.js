import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import {useStyles} from './useStyles';
import './Spinner.scss';

const LoadingSpinner = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CircularProgress 
        className='spinner'
      />
    </div>
  );
}

export default LoadingSpinner;
