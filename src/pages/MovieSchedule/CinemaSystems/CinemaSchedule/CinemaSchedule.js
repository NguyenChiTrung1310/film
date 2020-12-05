import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn';

import PropTypes from 'prop-types';
import Schedule from '../Schedule/Schedule';
import './CinemaSchedule.scss'


const CinemaSchedule = ({cinemaSchedule}) => {

  return (
    <Grid>
      {
        cinemaSchedule.map((item, index) => {
          const {tenCumRap, lichChieuPhim} = item;
          
          return (
            <Grid
              className='cinema-schedule'
              key = {index}
            >
              
              <Typography
                className='theater-name'
                component='h1'
                variant='h5'
              >
                <LocationOnIcon className='icon'/>
                {tenCumRap}
              </Typography>
              <Schedule schedule={lichChieuPhim} />
            </Grid>
          )
        })
      }
    </Grid>
  )
}

CinemaSchedule.propTypes = {
  cinemaSchedule: PropTypes.array,
};

export default CinemaSchedule
