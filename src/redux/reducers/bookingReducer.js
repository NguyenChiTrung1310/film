import { 
  FETCH_TICKET_ROOM, 
  CLEAR_DETAIL_MOVIE, 
  SEAT_LIST, 
  TICKET_INFORMATION, 
  BOOKING_SUCCESS,
  TICKET_MOVIE,
  CLEAR_ORDER,
  CLEAR_BOOKING_STATUS,
  BOOKING_STATUS
} from '../../constants/constant'

let initialState={
  initialTicketRoom: {},
  initialSeatList: [],
  initialTicketInfo: {
    number: 0,
    price: 0,
    seats: [],
    tickets: []
  },
  initialBooking: {},
  initialBookingStatus: null,
  initialTicketMovie: {}
} 
   
const BookingTicketReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_TICKET_ROOM:
      state.initialTicketRoom = payload;
      return { ...state }; 
    case SEAT_LIST:
      state.initialSeatList = payload;
      return {...state}
    case CLEAR_DETAIL_MOVIE: 
      state.initialTicketRoom = {};
      return { ...state }; 
    case TICKET_INFORMATION: {
      let seatList = [...state.initialTicketInfo.seats];
      let ticketList = [...state.initialTicketInfo.tickets];

      const booking = {
        IdNum: payload.seat.numID,
        ticket: {
          maGhe: payload.seat.seatID,
          giaVe: payload.seat.initialPrice
        }
      }

      let check = false;
      let num = payload.number;
      let initialPrice = payload.price;

      seatList.map(value => {
        if (value.numID === payload.seat.numID) 
        {
          check = true;
        }
        return check;
      })

      if (check === false) {
        seatList.push(payload.seat);
        ticketList.push(booking);
      } else {
        seatList = seatList.filter(value => value.numID !== payload.seat.numID);
        ticketList = ticketList.filter(value => value.IdNum !== payload.seat.numID);
      }
      
      state.initialTicketInfo = {
        number: num,
        price: initialPrice,
        seats: seatList,
        tickets: ticketList
      };
      return {...state };
    }
    case BOOKING_SUCCESS: 
      state.initialBooking = payload;
      state.initialBookingStatus = payload.status;
      return {...state}
    case BOOKING_STATUS: 
      state.initialBookingStatus = payload;
      return {...state};
    case TICKET_MOVIE:
      state.initialTicketMovie = payload;
      return {...state}
    case CLEAR_ORDER:
      state.initialTicketInfo = {
        number: 0,
        price: 0,
        seats: [],
        tickets: []
      }
      return {...state}
    case CLEAR_BOOKING_STATUS:
      state.initialBookingStatus = null;
      return {...state}
    default:
      return state;
  }
};
  
export default BookingTicketReducer;