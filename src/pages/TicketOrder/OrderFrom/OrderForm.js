import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import { Grid, Typography } from '@material-ui/core'

import { createAction } from '../../../redux/actions';
import { CLEAR_BOOKING_STATUS } from '../../../constants/constant';
import {storeOrderCart_MovieInfo, storeOrderCart_TicketInfo } from '../../../utils/LocalStorage/LocalStorage';

const OrderForm = ({config}) => {
  const dispatch = useDispatch();

  const ticketInformation = useSelector(state => state.ticketRoom.initialTicketInfo);
  const movieInformation = useSelector(state => state.ticketRoom.initialTicketMovie);
  const bookingStatus = useSelector(state => state.ticketRoom.initialBookingStatus);

  const {seats, price} = ticketInformation;
  const {movie, theater, address, screeningRoom, date, time} = movieInformation;

  useEffect(() => {
    if(movieInformation){
      storeOrderCart_MovieInfo(JSON.stringify(movieInformation));
      storeOrderCart_TicketInfo(JSON.stringify(ticketInformation));
    }
  })

  const {data} = config;
  const orderData = JSON.parse(data);
  const {maLichChieu} = orderData;

  useEffect(() => {
    if(bookingStatus === 200) {
      dispatch(createAction(CLEAR_BOOKING_STATUS))
    }
  }, [dispatch, bookingStatus])

  const renderSeats = () => {
    return seats.map((item, index)=>{
      const {numID, typeSeat} = item;
    
      return (
        <Typography
          component={'span'}
          key={index}
          style={{fontWeight: '600'}}
          variant='h5'
        >
          {`([${numID}], `}
          {
            typeSeat === 'Thuong' ? (
              <Typography
                component={'span'}
                style={{color: '#03a9f4', fontWeight: '600'}}
                variant='h5'
              >
                {`${typeSeat}`}
              </Typography>
            ) : (
              <Typography
                component={'span'}
                style={{color: '#ed1c2d', fontWeight: '600'}}
                variant='h5'
              >
                {`${typeSeat}`}
              </Typography>
            )
          }
          {' ),'}
        </Typography>
      )
    });
  }

  return (
    <Grid>
      <Typography>Your order</Typography>
      <Typography>Movie schedule ID: {maLichChieu}</Typography>
      <Typography>Seat: {renderSeats()}</Typography>
      <Typography>Total price: {price} VND</Typography>
      <Grid>
        {
          movieInformation ? (
            <Grid className='movie-information'>
              <Grid>                 
                <Typography 
                  component={'h1'}
                  style={{fontWeight: '400', color: '#e61a27', textAlign: 'left'}}
                  variant='h3'
                >
                  {movie}
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
                    {theater}
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
                    {address}
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
                    {screeningRoom}
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
                    {date}
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
                    {time}
                  </Typography>
                </Typography>                  
              </Grid> 
            </Grid>
          ) : null
        }
      </Grid>
    </Grid>
  )
}

OrderForm.propTypes={
  bookingStatus: PropTypes.number,
  config: PropTypes.object,
  movieInformation: PropTypes.object,
  orderData: PropTypes.object,
  seats: PropTypes.array,
  ticketInformation: PropTypes.object,
}

export default OrderForm
