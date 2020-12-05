import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { CardMedia, Divider, Grid, Typography } from '@material-ui/core'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

import { MOVIE_SCHEDULE_PAGE } from '../../../constants/constant';
import LoadingCool from '../../Spinner_Cool/SpinnerCool';
import ScheduleMovie from './ScheduleMovie/SheduleMovie';

import './MovieSection.scss';

const MovieSection = () => {
  const movieSchedule = useSelector(state => state.cinemaList.initialScheduleMovie)

  const renderMovieSchedule = () => {
    return movieSchedule.map((item, index) => {
      const {hinhAnh, tenPhim, maPhim, lstLichChieuTheoPhim} = item;

      return (
        <Grid
          className='movie-item'
          key={index}
        >
          <Grid className='item'>
            <Grid className='movie-images'>
              {
                hinhAnh ? (   
                  <CardMedia
                    className='movie-img'
                    image={hinhAnh}
                  />
                ) : (
                  <Grid className='loading'>
                    <LoadingCool />
                  </Grid>
                )
              }      
            </Grid>
            <Grid className='content'>
              <Typography
                className='movie-content'
                color='textPrimary'
                variant='body2'
              >
                {tenPhim}
              </Typography>
              <Grid
                className='schedule-content'
              >
                <ScheduleMovie movieSchedules={lstLichChieuTheoPhim}/>
              </Grid>
            </Grid>
            <Grid className='next-detail'>
              <Link
                className='detail'
                color='textPrimary'
                to={`${MOVIE_SCHEDULE_PAGE}/${maPhim}`}
                variant='body2'
              >More detail </Link>
              <ArrowRightAltIcon className='next-icon'/>
              
            </Grid>
          </Grid>
          <Divider className='movie-divider'/>
        </Grid>
      )
    });
  }

  return (
    <div>
      {
        movieSchedule ? (
          <Grid
            className='movie-schedule'
          >
            {renderMovieSchedule()}
          </Grid>
        ) : <LoadingCool />
      }
    </div>
  )
}

export default MovieSection
