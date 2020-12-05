import { CardMedia, Container, Grid, Typography } from '@material-ui/core';
import React from 'react'
import LoadingCool from '../../components/Spinner_Cool/SpinnerCool';
import { LOCAL_STORAGE_ORDER_CART_KEY, LOCAL_STORAGE_ORDER_CART_MOVIE_INFO_KEY, LOCAL_STORAGE_PROFILE_KEY } from '../../constants/constant';
import { getDataFromLocalStorage } from '../../utils/LocalStorage/LocalStorage';
import './OrderCart.scss';

import TicketImage from '../../assets/images/gold-ticket.png';

const OrderCartPage = () => {
  const orderCartStr = getDataFromLocalStorage(LOCAL_STORAGE_ORDER_CART_KEY)
  const orderCartMovieInfo = getDataFromLocalStorage(LOCAL_STORAGE_ORDER_CART_MOVIE_INFO_KEY)
  const userStr = getDataFromLocalStorage(LOCAL_STORAGE_PROFILE_KEY)

  const orderCart = JSON.parse(orderCartStr);
  const user = JSON.parse(userStr);
  const movieInformation = JSON.parse(orderCartMovieInfo);

  const {maLichChieu} = orderCart;
  const {movie, theater, address, screeningRoom, date, time} = movieInformation;
  return (
    <Container>
      {
        orderCart ? (
          <Grid className='order-form'>
            <Grid className='order-info'>
              <CardMedia
                className='ticket-img'
                image={TicketImage}
              />
              <Grid className='ticket-info'>
                <Grid>                 
                  <Typography 
                    className='order-title'
                    component={'h1'}
                    variant='h3'
                  >
                Your Order
                  </Typography>               
                </Grid>
                <Grid>                 
                  <Typography 
                    className='ticket-item'
                    component={'h5'}
                    variant='h5'
                  >
                      Schedule ID:  
                    <Typography 
                      className='item'
                      component={'span'}
                      variant='h6'
                    >
                      {user.hoTen}
                    </Typography>
                  </Typography>         
                </Grid>
                <Grid>                 
                  <Typography 
                    className='ticket-item'
                    component={'h5'}
                    variant='h5'
                  >
                      Schedule ID:  
                    <Typography 
                      className='item'
                      component={'span'}
                      variant='h6'
                    >
                      {maLichChieu}
                    </Typography>
                  </Typography>         
                </Grid>
                <Grid>                 
                  <Typography 
                    className='ticket-item'
                    component={'h5'}
                    variant='h5'
                  >
                    Movie:  
                    <Typography 
                      className='item'
                      component={'span'}
                      variant='h6'
                    >
                      {movie}
                    </Typography>
                  </Typography>         
                </Grid>
                <Grid>                 
                  <Typography
                    className='ticket-item' 
                    component={'h5'}
                    variant='h5'
                  >
                      Theater:  
                    <Typography 
                      className='item'
                      component={'span'}
                      variant='h6'
                    >
                      {theater}
                    </Typography>
                  </Typography>         
                </Grid>
                <Grid>                 
                  <Typography 
                    className='ticket-item'
                    component={'h5'}
                    variant='h5'
                  >
                    Address:  
                    <Typography 
                      className='item'
                      component={'span'}
                      variant='h6'
                    >
                      {address}
                    </Typography>
                  </Typography>         
                </Grid>
                <Grid>                 
                  <Typography 
                    className='ticket-item'
                    component={'h5'}
                    variant='h5'
                  >
                      Date:  
                    <Typography 
                      className='item time-location'
                      component={'span'}
                      variant='h6'
                    >
                      {date}
                    </Typography>
                  </Typography>         
                </Grid>
                <Grid>                 
                  <Typography 
                    className='ticket-item'
                    component={'h5'}
                    variant='h5'
                  >
                    Time:  
                    <Typography 
                      className='item time-location'
                      component={'span'}
                      variant='h6'
                    >
                      {time}
                    </Typography>
                  </Typography>         
                </Grid>
                <Grid>                 
                  <Typography 
                    className='ticket-item'
                    component={'h5'}
                    variant='h5'
                  >
                  Screening Room:  
                    <Typography 
                      className='item time-location'
                      component={'span'}
                      variant='h6'
                    >
                      {screeningRoom}
                    </Typography>
                  </Typography>         
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        ) : <LoadingCool />
      }
    </Container>
  )
}

export default OrderCartPage
