import React from 'react';
import {useHistory} from 'react-router-dom'
import { Button, CardMedia, Grid, Paper, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { MOVIE_DETAIL_PAGE } from '../../../constants/constant';

import BannerImg from '../../../assets/images/banner2.jpg';

import './Carousel.scss';

const CarouselBanner = ({ item }) => {
  const history = useHistory();

  const {
    tenPhim = 'Harry Potter',
    moTa = 'a boy is given the ability to become an adult superhero in times of need with a single magic word',
    ngayKhoiChieu = 'By: david f. sandberg',
    danhGia = 'NOT FOUND',
    hinhAnh = {BannerImg},
    maPhim  = 'NOT FOUND',
  } = item;

  const detailLink=()=>{ 
    history.push(`${MOVIE_DETAIL_PAGE}/${maPhim}`);
  }
  return (
    <Paper
      className='banner'
      elevation={10}
    >
      <Grid className='titles'>
        <Typography
          className='style name'
          component='h3'
          variant='h3'
        >
          {tenPhim}
        </Typography>
        <Typography
          className='style description'
          component='h6'
          variant='h6'
        >
          {moTa}
        </Typography>
        <Typography
          className='style author'
          component='h4'
          variant='h4'
        >
          {ngayKhoiChieu}
        </Typography>
        <Typography
          className='style author'
          component='h4'
          variant='h4'
        >
          {danhGia}
        </Typography>
        <Button
          className='style detail-btn'
          onClick={detailLink}
        >Detail</Button>
      </Grid>
      <CardMedia
        alt='banner-img'
        className='banner-img'
        image={hinhAnh}
      />
    </Paper>
  )
} 
CarouselBanner.propTypes = {
  danhGia: PropTypes.string,
  hinhAnh: PropTypes.string,
  item: PropTypes.object,
  moTa: PropTypes.string,
  ngayKhoiChieu: PropTypes.string,
  tenPhim: PropTypes.string,
};

export default CarouselBanner;


