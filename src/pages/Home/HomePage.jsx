import { Grid } from '@material-ui/core';
import React from 'react';
import Banner from '../../components/Carousel/Banners/Banner';
import SliderSlick from '../../components/Slider/Slider'; 

import './HomePage';

const HomePage=()=>{
  return (
    <Grid className='home-page'>
      <Grid className='banner'>
        <Banner />
      </Grid>
      <SliderSlick/>
    </Grid>
  )
}
export default HomePage;