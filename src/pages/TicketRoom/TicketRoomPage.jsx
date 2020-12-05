import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { CardMedia, Container, Grid, Typography } from '@material-ui/core';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';


import OrderTicket from './Order/Order';
import SeatList from './SeatList/SeatList';
import { createAction } from '../../redux/actions';
import { getTicketRoomsAction } from '../../redux/actions/bookingAction';
import CheckoutBtn from './CheckoutBtn/CheckoutBtn';
import LoadingCool from '../../components/Spinner_Cool/SpinnerCool';
import { CLEAR_DETAIL_MOVIE, SEAT_LIST } from '../../constants/constant';
import './TicketRoomPage.scss'


const TicketRoomPage = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTicketRoomsAction(props.match.params.maLichChieu));
    return () => {
      dispatch(createAction(CLEAR_DETAIL_MOVIE))
    }
  }, [dispatch, props])

  const ticketRoom = useSelector(state => state.ticketRoom.initialTicketRoom);
  
  const{thongTinPhim, danhSachGhe} = ticketRoom;

  useEffect(() => {
    dispatch(createAction(SEAT_LIST ,danhSachGhe));
  }, [dispatch, danhSachGhe])

  return (
    <Container className='ticket-room-page'>
      {
        ticketRoom ? (
          <Grid>
            {
              thongTinPhim ? (
                <Grid>
                  <Grid className='ticket-detail'>
                    <Grid className='trailer-film'>
                      {
                        thongTinPhim.hinhAnh ?  
                          <CardMedia
                            className='img-film'
                            image={thongTinPhim.hinhAnh}
                          />
                          : <LoadingCool />
                      }         
                    </Grid>
                    {
                      thongTinPhim.tenPhim ? (
                        <Grid className='movie-information'>
                          <Grid>                 
                            <Typography 
                              component={'h1'}
                              style={{fontWeight: '400', color: '#e61a27', textAlign: 'left'}}
                              variant='h3'
                            >
                              {thongTinPhim.tenPhim}
                            </Typography>               
                          </Grid>

                          <Grid>             
                            <Typography 
                              component={'h5'}
                              style={{fontWeight: '600'}}
                              variant='h5'
                            >
                              <LabelImportantIcon />
                  Theater:  
                              <Typography 
                                component={'span'}
                                style={{paddingLeft: '5px'}}
                                variant='h6'
                              >
                                {thongTinPhim.tenCumRap}
                              </Typography>
                            </Typography>                  
                          </Grid>

                          <Grid>                 
                            <Typography 
                              component={'h5'}
                              style={{fontWeight: '600'}}
                              variant='h5'
                            >
                              <LabelImportantIcon />
                      Address:  
                              <Typography 
                                component={'span'}
                                style={{paddingLeft: '5px'}}
                                variant='h6'
                              >
                                {thongTinPhim.diaChi}
                              </Typography>
                            </Typography>         
                          </Grid>

                          <Grid>             
                            <Typography 
                              component={'h5'}
                              style={{fontWeight: '600'}}
                              variant='h5'
                            >
                              <LabelImportantIcon />
                      Screening room:  
                              <Typography 
                                component={'span'}
                                style={{paddingLeft: '5px', color: '#03a9f4', fontWeight: 'bold'}}
                                variant='h6'
                              >
                                {thongTinPhim.tenRap}
                              </Typography>
                            </Typography>                  
                          </Grid>        
                          <Grid>             
                            <Typography 
                              component={'h5'}
                              style={{fontWeight: '600'}}
                              variant='h5'
                            >
                              <LabelImportantIcon />
                      Date:  
                              <Typography 
                                component={'span'}
                                style={{paddingLeft: '5px', color: '#03a9f4', fontWeight: 'bold'}}
                                variant='h6'
                              >
                                {thongTinPhim.ngayChieu}
                              </Typography>
                            </Typography>                  
                          </Grid>   
                          <Grid>             
                            <Typography 
                              component={'h5'}
                              style={{fontWeight: '600'}}
                              variant='h5'
                            >
                              <LabelImportantIcon />
                      Time start:  
                              <Typography 
                                component={'span'}
                                style={{paddingLeft: '5px', color: '#03a9f4', fontWeight: 'bold'}}
                                variant='h6'
                              >
                                {thongTinPhim.gioChieu}
                              </Typography>
                            </Typography>                  
                          </Grid>  

                          <Grid className='ticket'>
                            <Typography 
                              component={'h5'}
                              style={{fontWeight: '600', textAlign: 'center', color: '#e61a27', fontSize: '30px'}}
                              variant='h5'
                            >
                            Your Order
                            </Typography>

                            <OrderTicket />

                            <Grid className='checkout'>
                              <CheckoutBtn
                                maLichChieu={thongTinPhim.maLichChieu}
                                movieInfo={{
                                  movie: thongTinPhim.tenPhim,
                                  theater: thongTinPhim.tenCumRap,
                                  address: thongTinPhim.diaChi,
                                  screeningRoom: thongTinPhim.tenRap,
                                  date: thongTinPhim.ngayChieu,
                                  time: thongTinPhim.gioChieu
                                }}
                              />
                            </Grid>
                          </Grid>                
                        </Grid> 
                      ) : <LoadingCool />
                    }   
                  </Grid> 
                  <Grid className='screen'>Screen</Grid>
                  <Grid className='seat-list-by-theater'>
                    {
                      danhSachGhe ? <SeatList seatList={danhSachGhe}/>
                        : <LoadingCool />
                    }
              
                  </Grid>
                </Grid>
              ) : <LoadingCool />
            }     
          </Grid>
        ) : <LoadingCool />
      }
    </Container>
  )
}

TicketRoomPage.propTypes={
  danhSachGhe: PropTypes.array,
  match: PropTypes.object,
  params: PropTypes.object,
  thongTinPhim: PropTypes.object,
}

export default TicketRoomPage
