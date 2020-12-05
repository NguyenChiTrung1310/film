import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { 
  CardMedia, 
  Container, 
  Grid, 
  Typography,
} from '@material-ui/core'
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import PropTypes from 'prop-types';

import LoadingCool from '../../components/Spinner_Cool/SpinnerCool'
import { DetailMovieScheduleAction } from '../../redux/actions/cinemaListAction';

import ModalPopup from './Modal/Modal';
import {CINEMA_SYSTEM, CLEAR_DETAIL_MOVIE} from '../../constants/constant';
import CinemaSystems from './CinemaSystems/CinemaSystems';
import { createAction } from '../../redux/actions';
import ShowMoreText from 'react-show-more-text';


import './MovieSchedule.scss';

const MovieSchedulePage = (props) => {
  const dispatch = useDispatch();
  const [expand, setExpand] = useState(false);
  const onClick = () => {
    setExpand(!expand);
  };

  useEffect(() => {
    dispatch(DetailMovieScheduleAction(props.match.params.maPhimId));
    return () => {
      dispatch(createAction(CLEAR_DETAIL_MOVIE))
    }
  }, [dispatch, props])

  const movieScheduleDetail = useSelector(state => state.cinemaList.initialMovieScheduleByTheater);
  const {
    hinhAnh, 
    tenPhim, 
    moTa,
    ngayKhoiChieu,
    danhGia,
    trailer,
    heThongRapChieu
  } = movieScheduleDetail;

  useEffect(() => {
    dispatch(createAction(CINEMA_SYSTEM ,heThongRapChieu));
  }, [dispatch, heThongRapChieu])

  return (
    <Container className='movie-schedule-page'>
      {
        movieScheduleDetail ? (
          <Grid>
            <Grid className='movie-detail'>
              <Grid className='movie-trailer'>
                {
                  hinhAnh ?  
                    <CardMedia
                      className='movie-img'
                      image={hinhAnh}
                    />
                    : <LoadingCool />
                }         
              </Grid>
              {
                tenPhim ? (
                  <Grid className='movie-info'>
                    <Grid>                 
                      <Typography 
                        component={'h1'}
                        style={{fontWeight: '400', color: '#03a9f4'}}
                        variant='h2'
                      >
                        {tenPhim}
                      </Typography>               
                    </Grid>

                    <Grid>    
                      {
                        moTa.length > 200 ? (
                          <Typography 
                            component={'h5'}
                            style={{fontWeight: '600'}}
                            variant='h5'
                          >
                        Description:  
                            <Typography 
                              component={'span'}
                              style={{paddingLeft: '5px'}}
                              variant='h6'
                            >
                              <ShowMoreText
                                expanded={expand}
                                less={<ExpandLess style={{color: '#03a9f4'}}/>}
                                lines={2}
                                more={<ExpandMore style={{color: '#03a9f4'}}/>}
                                onClick={onClick}
                              >{moTa}
                              </ShowMoreText>
                            </Typography>
                          </Typography>  
                        ) : (
                          <Typography 
                            component={'h5'}
                            style={{fontWeight: '600'}}
                            variant='h5'
                          >
                        Description:  
                            <Typography 
                              component={'span'}
                              style={{paddingLeft: '5px'}}
                              variant='h6'
                            >
                              {moTa}
                            </Typography>
                          </Typography>  
                        )
                      }                             
                    </Grid>

                    <Grid>                 
                      <Typography 
                        component={'h5'}
                        style={{fontWeight: '600'}}
                        variant='h5'
                      >
                      Release:  
                        <Typography 
                          component={'span'}
                          style={{paddingLeft: '5px'}}
                          variant='h6'
                        >
                          {ngayKhoiChieu}
                        </Typography>
                      </Typography>         
                    </Grid>

                    <Grid>             
                      <Typography 
                        component={'h5'}
                        style={{fontWeight: '600'}}
                        variant='h5'
                      >
                      Rating:  
                        <Typography 
                          component={'span'}
                          style={{paddingLeft: '5px', color: '#03a9f4', fontWeight: 'bold'}}
                          variant='h6'
                        >
                          {danhGia}
                        </Typography>
                      </Typography>                  
                    </Grid>             
                    <ModalPopup trailer={trailer}/>
                  </Grid> 
                ) : <LoadingCool />
              }
          
            </Grid>     
            <Grid className='schedule-by-theater'>
              {
                heThongRapChieu ? <CinemaSystems />
                  : <LoadingCool />
              }
              
            </Grid>
          </Grid>
        ) : <LoadingCool />
      } 
    </Container>
  )
}

MovieSchedulePage.propTypes={
  match: PropTypes.object,
  movieScheduleDetail: PropTypes.object,
  params: PropTypes.object,
}


export default MovieSchedulePage
