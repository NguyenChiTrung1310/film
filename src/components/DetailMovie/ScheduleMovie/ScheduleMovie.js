
import React from 'react'
import TheaterInfo from '../TheaterInfo/TheaterInfo'
import { Container, Typography, Grid } from '@material-ui/core'
import PropTypes from 'prop-types';

const ScheduleMovie = ({ schedule }) => {

  const renderScheduleMovie = () => {
    return schedule.map((item, index) => {
      const {
        thongTinRap,
        ngayChieuGioChieu,
        // maLichChieu, 
        // maRap, 
        // maPhim, 
        // tenPhim, 
        // giaVe, 
        // thoiLuong
      } = item;

      return (
        <Grid key={index}>
          <Typography
            className='title'
            component='h5'
            variant='h5'
          >
            {ngayChieuGioChieu}
          </Typography>
          <TheaterInfo
            item={thongTinRap}
          />
        </Grid>
      )
    })
  }

  return (
    <Container>
      <Typography
        className='title'
        component='h5'
        variant='h5'
      >
        Movie Schedule
      </Typography>
      {renderScheduleMovie()}
    </Container>
  )
}

ScheduleMovie.propTypes={
  schedule: PropTypes.array,
}


export default ScheduleMovie


