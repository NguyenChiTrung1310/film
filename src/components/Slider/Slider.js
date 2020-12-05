import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Slider from 'react-slick'; 
import {Typography} from '@material-ui/core' 
import SliderItems from './SliderItems/SliderItems';
import {useStyles} from './useStyles'
import PropTypes from 'prop-types'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.scss'; 
import { fetchMovieList } from '../../redux/actions/movieListAction';
const SliderSlick=()=> {
  const classes= useStyles();
  const config = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  const [settings] = useState(config);
  const dispatch= useDispatch();

  useEffect(()=>{
    dispatch(fetchMovieList());
  },[dispatch]);
  
  const movieList = useSelector((state) => {
    return state.movieList.initialMovieList;
  });
 
  const renderSilerList=()=>{
    return movieList.map((item, index)=>{
      return (
        <SliderItems
          item= {item}
          key={index}
        />
      )
    })
  }

  return (
    <div className='slick'>
      <Typography
        className={classes.text}
        component='h2'
        variant='h4'
      >Now Showing</Typography>
      <Slider {...settings}>
        {
          renderSilerList()
        } 
      </Slider>
    </div>
  );
}
SliderSlick.propTypes={
  SliderItems: PropTypes.object,
}
export default SliderSlick;
