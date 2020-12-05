import React, { useEffect, useState } from 'react'
import { CardMedia, Container, Grid, Tab } from '@material-ui/core';

import { useDispatch, useSelector } from 'react-redux';
import { cinemaListAction, showCinemaListAction, showTheaterScheduleAction } from '../../redux/actions/cinemaListAction';

import TabPanel from '../TabPanel/TabPanel';
import { TabItem } from '../TabPanel/TabItem/TabItem';

import cinemaBannerImg from '../../assets/images/cinema-banner.jpg'
import './Cinema.scss';
import CinemaSection from './CinemaSection/CinemaSection';
import MovieSection from './MovieSection/MovieSection';

const a11yProps = (index) => {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const imgCinema = (img) => {
  return (
    <CardMedia 
      alt='cinema'
      className='cinema-item'
      image={img}
    />
  )
}

////////////////////////////////////////////////////////////////////

const Cinema = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const cinemaList = useSelector(state => state.cinemaList.initialCinemaList);

  const renderTab = (index, key) => {
    const handleClick = () => {
      if(cinemaList){
        dispatch(showCinemaListAction(cinemaList[index].maHeThongRap));
        dispatch(showTheaterScheduleAction(cinemaList[index].maHeThongRap));
      }
    }

    return cinemaList
      ? (
        <Tab
          className='tab'
          label={imgCinema(cinemaList[index].logo)}
          {...a11yProps(index)}
          key={key}
          onClick={handleClick}
        />
      ) : (
        <Tab
          className='tab'
          label={cinemaList[index].tenHeThongRap}
          {...a11yProps(index)}
          key={key}
        />
      )
  }

  const mapTab = () => {
    return cinemaList.map((item, index) => {
      return renderTab(index, index);
    });
  }
  

  useEffect(() => {
    dispatch(cinemaListAction());
  }, [dispatch])

  return (
    <Container
      className='container'
      maxWidth='lg'
    >
      <Grid className='banner'>
        <img
          alt='cinema-banner'
          className='img-banner'
          src={cinemaBannerImg}
        />
        <div className='tabs'>
          {
            cinemaList ? (
              <TabPanel
                handleChange={handleChange}
                orientation='horizontal'
                propsValue={value}
              >
                {
                  mapTab()
                }
              </TabPanel>
            ) : null
          }
          
        </div>
      </Grid>
      <Grid className='info-section'>
        <Grid className='left-section'>
          <TabItem
            className='tab-item'
            index={0}
            value={value}
          >
            <CinemaSection />
          </TabItem>
          <TabItem
            className='tab-item'
            index={1}
            value={value}
          >
            <CinemaSection />
          </TabItem>
          <TabItem
            className='tab-item'
            index={2}
            value={value}
          >
            <CinemaSection />
          </TabItem>
          <TabItem
            className='tab-item'
            index={3}
            value={value}
          >
            <CinemaSection />
          </TabItem>
          <TabItem
            className='tab-item'
            index={4}
            value={value}
          >
            <CinemaSection />
          </TabItem>
          <TabItem
            className='tab-item'
            index={5}
            value={value}
          >
            <CinemaSection />
          </TabItem>
        </Grid>
        <Grid className='right-section'>
          <MovieSection />
        </Grid>
      </Grid>  
    </Container>
  )
}

export default Cinema
