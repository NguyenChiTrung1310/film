
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createAction } from './redux/actions';
import { Route, Switch} from 'react-router-dom';  

import 'react-toastify/dist/ReactToastify.css';
import {
  LoginPage, 
  RegisterPage, 
  ErrorPage, 
  HomePage, 
  CinemaPage, 
  ContactPage, 
  ProfilePage, 
  AdminPage, 
  MovieDetailPage,
  MovieSchedulePage, 
  TicketRoomPage, 
  TicketOrderPage,
  OrderCartPage
} from './pages';

import {
  LOGIN_PAGE, 
  REGISTER_PAGE, 
  HOME_PAGE, 
  CINEMA_PAGE, 
  CONTACT_PAGE, 
  ADMIN_PAGE, 
  MOVIE_SCHEDULE_PAGE,
  ORDER_CART_PAGE,
  LOGIN_SUCCESS, 
  LOCAL_STORAGE_CREDENTIALS_KEY, 
  PROFILE_PAGE, 
  USER_PROFILE, 
  LOCAL_STORAGE_PROFILE_KEY, 
  TICKET_ROOM_PAGE,
  MOVIE_DETAIL_PAGE,
  TICKET_ORDER_PAGE,
  LOCAL_STORAGE_ORDER_CART_KEY,
  LOCAL_STORAGE_ORDER_CART_MOVIE_INFO_KEY,
  BOOKING_SUCCESS,
  TICKET_MOVIE,
  LOCAL_STORAGE_BOOKING_STATUS_KEY,
  BOOKING_STATUS,
} from './constants/constant';
import { Grid } from '@material-ui/core';
import AppBar from './components/AppBar/AppBar';
import Footer from './components/Footer/Footer';

import { getDataFromLocalStorage } from './utils/LocalStorage/LocalStorage';
import { toast } from 'react-toastify';

import './App.scss';

toast.configure({
  autoClose: 2000,
});
function App() {
  const dispatch = useDispatch();

  const getCredentialsFromLocal = () => {
    const credentialsStr = getDataFromLocalStorage(LOCAL_STORAGE_CREDENTIALS_KEY);
    if(credentialsStr){
      dispatch(createAction(LOGIN_SUCCESS, JSON.parse(credentialsStr)))
    }
  }

  const getProfileFromLocal = () => {
    const profileStr = getDataFromLocalStorage(LOCAL_STORAGE_PROFILE_KEY)
    if(profileStr){
      dispatch(createAction(USER_PROFILE, JSON.parse(profileStr)))
    }
  }

  const getOrderCartFromLocal = () => {
    const orderCartStr = getDataFromLocalStorage(LOCAL_STORAGE_ORDER_CART_KEY)
    const bookingStatus = getDataFromLocalStorage(LOCAL_STORAGE_BOOKING_STATUS_KEY)
    const orderCartMovieInfoStr = getDataFromLocalStorage(LOCAL_STORAGE_ORDER_CART_MOVIE_INFO_KEY)
    if(orderCartMovieInfoStr){
      dispatch(createAction(BOOKING_SUCCESS, JSON.parse(orderCartStr)))
      dispatch(createAction(BOOKING_STATUS, JSON.parse(bookingStatus)))
      dispatch(createAction(TICKET_MOVIE, JSON.parse(orderCartMovieInfoStr)))
    }
  } 

  useEffect(() => {
    getCredentialsFromLocal()
  });

  useEffect(() => {
    getProfileFromLocal()
  });

  useEffect(() => {
    getOrderCartFromLocal()
  });

  return (
    <Grid className='App'>
      <AppBar />
      <Switch> 
        
        <Route
          component={LoginPage}
          exact
          path={LOGIN_PAGE}
        />
        <Route
          component={RegisterPage}
          exact
          path={REGISTER_PAGE}
        />
        <Route
          component={HomePage}
          exact
          path={HOME_PAGE}
        />
        <Route
          component={CinemaPage}
          exact
          path={CINEMA_PAGE}
        />
        <Route
          component={ContactPage}
          exact
          path={CONTACT_PAGE}
        />
        <Route 
          component={ProfilePage}
          exact
          path={PROFILE_PAGE}
        />
        <Route 
          component={AdminPage}
          exact
          path={ADMIN_PAGE}
        />
        <Route 
          component={MovieSchedulePage}
          exact
          path={`${MOVIE_SCHEDULE_PAGE}/:maPhimId`}
        />
        <Route 
          component={TicketRoomPage}
          exact
          path={`${TICKET_ROOM_PAGE}/:maLichChieu`}
        />
        <Route 
          component={TicketOrderPage}
          exact
          path={TICKET_ORDER_PAGE}
        />
        <Route 
          component={MovieDetailPage}
          exact
          path={`${MOVIE_DETAIL_PAGE}/:maPhimId`}
        />
        <Route 
          component={OrderCartPage}
          exact
          path={ORDER_CART_PAGE}
        />
        <Route
          component={ErrorPage}
        />
      </Switch>
      <Footer />
    </Grid>
  );
}

export default App;
