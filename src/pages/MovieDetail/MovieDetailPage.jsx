import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Typography, Grid, Button } from '@material-ui/core';
import { fetchMovieDetail } from '../../redux/actions/movieListAction';
import LoadingCool from '../../components/Spinner_Cool/SpinnerCool';
import { CLEAR_DETAIL_MOVIE } from '../../constants/constant';
import { createAction } from '../../redux/actions'; 
import ModalPopup from './Modal/Modal.js';

// import _ from 'lodash';
import PropTypes from 'prop-types';


import './MovieDetail.scss'
import CustomScheduleMovie from '../../components/DetailMovie/CustomScheduleMovie/CustomScheduleMovie';
import { useStyles } from './Modal/useStyles';
const MovieDetailPage = (props) => {
  const dispatch = useDispatch();
  const classes= useStyles();
  useEffect(() => {
    dispatch(fetchMovieDetail(props.match.params.maPhimId));
    return () => {
      dispatch(createAction(CLEAR_DETAIL_MOVIE))
    }
  }, [dispatch, props]);



  const movieList = useSelector((state) => {
    return state.movieList.initaialMovieList_Detail
  });

  const renderMovieList = () => {
    const { danhGia,
      hinhAnh,
      biDanh,
      // maNhom, 
      maPhim,
      moTa,
      ngayKhoiChieu,
      tenPhim,
      lichChieu,
      trailer,
    } = movieList;
    // console.log('ARRAY LICH CHIEU', lichChieu); 
    // const arrr = lichChieu.reduce((acc, lichChieu) => {
  

    //   const found = acc.find(i => i.maRap === lichChieu.maRap);
      
     
    //   if (found) {
    //     found.ngayChieuGioChieu.push(lichChieu.ngayChieuGioChieu);
    //   } else {
    //     acc.push({maRap: lichChieu.maRap, ngayChieuGioChieu: [lichChieu.ngayChieuGioChieu]}) 
    //   }
       
    //   return acc;  
    // }, []);
    // console.log('XXXX',arrr);
    // Declare a new array 
    let newArray = []; 
    // Declare an empty object 
    let uniqueObject = {};

    // Loop for the array elements 
    for (let i in lichChieu) { 
      
      // Extract the title 
      let objTitle = lichChieu[i]['maRap']; 

      // Use the title as the index 
      uniqueObject[objTitle] = lichChieu[i]; 
    } 
      
    // Loop to push unique object into array 
    for (let i in uniqueObject) { 
      newArray.push(uniqueObject[i]); 
    } 
      
    // Display the unique objects 
    // console.log(newArray);   
    
    const yo=[];
    for( let i in newArray){
      // console.log(newArray[i]);
      yo.push(newArray[i].thongTinRap);
    }
    // console.log('QQQ',yo);

    // const arr = yo.reduce((acc, yo) => {
  

    //   const found = acc.find(i => i.tenCumRap === yo.tenCumRap);
      
    //   if(found) {
 
    //     found.tenRap.push(yo.tenRap);
    //   } else {
    //     acc.push({tenCumRap: yo.tenCumRap, tenRap: [yo.tenRap]}) 
    //   }
       
    //   return acc;  
    // }, []);
    // console.log('RESULT',arr);

    return (
      <Container className='main'>
        <Grid
          container 
        >
          {/* Poster&NameMovie */}
          <Grid
            item
            sm={3}
            xs={12}
          >
            <Grid
              container
            >

              <Grid
                item
                sm={6}
                xs={12}
              >
                <Typography
                  className='title'
                  component='h4'
                  variant='h4'
                >
                  {tenPhim}
                </Typography>
              </Grid>
              <Grid
                item
                sm={6}
                xs={12}
              >
                <Typography
                  className='title'
                  component='h4'
                  variant='h4'
                >
                  {maPhim}
                </Typography>
              </Grid>


              <img
                alt='imagee'
                className='image'
                src={hinhAnh}

              />
            </Grid>
          </Grid>
          {/* Schedule */}
          <Grid
            className='title-detail'
            item
            sm={9}
            xs={12}
          >
            <Typography
              className='title'
              component='h5'
              variant='h5'
            >
              {biDanh}
            </Typography>
            <Typography
              className='title'
              component='h5'
              variant='h5'
            >
              {moTa}
            </Typography>
            <Typography
              className='title'
              component='h5'
              variant='h5'
            >
              Đánh giá: {danhGia} *
            </Typography>
            <Typography
              className='title'
              component='h5'
              variant='h5'
            >
              Ngày khởi chiếu: {ngayKhoiChieu}
            </Typography>
            <Grid
              container
            > 
              <ModalPopup trailer={trailer}/>
              <Grid
                className='button'
                item
                sm={3}
                xs={12}
              > 
                <Button
                  className={classes.trailerbtn}
                >  
                  <Typography
                    component='h6'
                    variant='h6'
                  >
                     Ticket
                  </Typography></Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* <ScheduleMovie schedule={lichChieu} /> */}
        <CustomScheduleMovie
          arrayData={newArray}
          className='schedule-movie' 
        />
        {/* <CustomScheduleMovie arrayData={arr} /> */}
      </Container>

    )
  }


  return (
    <div>
      {
        movieList ? renderMovieList() : <LoadingCool />
      }
    </div>
  )
}

MovieDetailPage.propTypes={
  match: PropTypes.object,
  params: PropTypes.object,
}


export default MovieDetailPage;

