import React from 'react'
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@material-ui/core';
import LoadingCool from '../../../components/Spinner_Cool/SpinnerCool';
import CinemaSchedule from './CinemaSchedule/CinemaSchedule';
import './CinemaSystem.scss';

const CinemaSystems = () => {
  const cinemaSystem = useSelector(state => state.cinemaList.initialCinemaSystem)

  return (
    <Grid className='cinema-system'>
      {
        cinemaSystem ? (
          <Grid>
            {
              cinemaSystem.map((item, index) => {
                const {tenHeThongRap, cumRapChieu} = item;
                return (
                  <Grid key = {index}>
                    <Typography
                      className='cinema-system_name'
                      variant={'h2'}
                    >
                      {tenHeThongRap}
                    </Typography>
                    <CinemaSchedule cinemaSchedule={cumRapChieu}/>
                  </Grid>
                )
              })
            }
          </Grid>
        ) : <LoadingCool />
      }
    </Grid>
  )
}

CinemaSystems.propTypes = {
  cinemaSystem: PropTypes.array,
  cumRapChieu: PropTypes.array,
  tenHeThongRap: PropTypes.string,
};
  

export default CinemaSystems
