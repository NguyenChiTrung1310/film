import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Carousel from 'react-material-ui-carousel';
import CarouselBanner from '../Carousel/Carousel';
import { fetchMovieList } from '../../../redux/actions/movieListAction';
import { Grid } from '@material-ui/core';

const Banner = () => {
  const [carousel] = useState({
    autoPlay: true,
    timer: 500,
    animation: 'fade',
    indicators: true,
    interval: 1000
  })
  
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(fetchMovieList());
    }, 5000);
    return () => clearInterval(interval);
  }, [dispatch]);

  const movieList = useSelector((state) => {
    return state.movieList.initialMovieList;
  });

  const renderSilerList = () => {
    const shortList = movieList.slice(0,8);

    return shortList.map((item, index) => {
      return (
        <CarouselBanner
          item={item}
          key={index}
        />
      )
    })
  }

  return (
    <Grid className='carousel'>
      <Carousel
        animation={carousel.animation}
        autoPlay={carousel.autoPlay}
        className='carousel'
        indicators={carousel.indicators}
        interval={carousel.interval}
      >
        {
          renderSilerList()
        }
      </Carousel>
    </Grid>
  )
}

Banner.propTypes = {
  carousel: PropTypes.object,
}

export default Banner
