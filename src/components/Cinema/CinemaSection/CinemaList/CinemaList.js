import React from 'react'
import { Divider, Grid, ListItem, Typography } from '@material-ui/core'
import PropTypes from 'prop-types';

import {useStyles} from './ueStyles';

const CinemaList = ({item, index, handleClick = () => {}}) => {
  const classes = useStyles();
  const {tenCumRap, diaChi} = item;
  return (
    <Grid
      className={classes.root}
      component={'span'}
      key={index}
    >
      <ListItem
        alignItems='flex-start'
        className={classes.inline}
        component={'span'}
        onClick={handleClick}
      > 
        <Typography
          className={classes.nameTheater}
          color='textPrimary'
          component={'span'}
          variant='body2'
        >
          {tenCumRap}
        </Typography>
        <Typography
          className={classes.address}
          color='textPrimary'
          component={'span'}
          variant='body2'
        >
          {diaChi}
        </Typography>
        <Divider
          className={classes.divider}
          component={'span'}
        />   
      </ListItem>
    </Grid>
  )
}

CinemaList.propTypes = {
  handleClick: PropTypes.func,
  index: PropTypes.number,
  item: PropTypes.object,
};

export default CinemaList
