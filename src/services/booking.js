import request from '../configs/request';
import { 
  BOOKING_TICKET_API,
  GET_TICKET_ROOM_API
} from './api';

export async function GetTicketRoomService (id) {
  return (
    request(
      GET_TICKET_ROOM_API + `${id}`,
      'GET'
    )
  )
}

export async function BookingTicketService (ticketInfo) {
  return (
    request (
      BOOKING_TICKET_API,
      'POST',
      ticketInfo
    )
  );
}