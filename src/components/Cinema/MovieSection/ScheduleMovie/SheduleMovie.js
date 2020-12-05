import React from 'react';
import PropTypes from 'prop-types';
import { Button, Divider, Grid } from '@material-ui/core';

import './ScheduleMovie.scss';
import { CONTACT_PAGE } from '../../../../constants/constant';

const ScheduleMovie = ({movieSchedules}) => {
  const schedules = movieSchedules.slice(0,5);

  return schedules.map((item, index) => {
    const {ngayChieuGioChieu, tenRap} = item;

    return (
      <Button
        className='schedule-item'
        key={index}
      >
        <Grid className='cinema-name'>
          {tenRap}
        </Grid>
        <Divider className='devide'/>
        <Grid
          className='schedule-detail'
          to={CONTACT_PAGE}
        >
          {ngayChieuGioChieu}
        </Grid>
      </Button>
    ) 
  });

}

ScheduleMovie.propTypes = {
  schedule: PropTypes.array,
};

export default ScheduleMovie
