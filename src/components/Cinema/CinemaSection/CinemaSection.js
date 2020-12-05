import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Typography } from '@material-ui/core';

import { showMoviesList } from '../../../redux/actions/cinemaListAction';
import CinemaList from './CinemaList/CinemaList';

import './CinemaSection.scss';

const CinemaSection = () => {
  const dispatch = useDispatch();
 
  const theaterSchedule = useSelector(state => state.cinemaList.initialListTheater);

  return theaterSchedule.map((item,index) => {

    const handleClick = () => {
      const {danhSachPhim} = item;
      dispatch(showMoviesList(danhSachPhim));
    }
    
    return theaterSchedule ? (
      <CinemaList
        handleClick={handleClick}
        index={index}
        item={item}
        key={index}
      />
    ) : (<Typography key={index}>NOT FOUND</Typography>)
  });
}

export default CinemaSection
