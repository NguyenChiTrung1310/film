import { combineReducers } from 'redux';
import BookingTicketReducer from './bookingReducer';
import CinemaListReducer from './cinemaReducer';
import MovieListReducer from './movielistReducer';
import ProfileReducer from './profileReducer';
import UserReducer from './userReducer';

const RootReducer = combineReducers({
  user: UserReducer,
  profile: ProfileReducer,
  movieList: MovieListReducer,
  cinemaList: CinemaListReducer,
  ticketRoom: BookingTicketReducer
});
export default RootReducer;
