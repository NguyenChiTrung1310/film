import request from '../configs/request';
import { 
  BRANCH_CINEMA_LIST_API, 
  CINEMA_LIST_API, 
  THEATERS_SCHEDULE_API,
  DETAIL_MOVIE_SCHEDULE_BY_THEATER_API 
} from './api';

// Export cinemas list
export async function CinemaService() {
  return (
    request(
      CINEMA_LIST_API,
      'GET',
    )
  );
}

// Export Theater branches list of each cinema
export async function BranchCinemaService (id) {
  return (
    request(
      BRANCH_CINEMA_LIST_API + `${id}`,
      'GET',
    )
  );
}

// Export Theater schedules list (movies info, movies schedule,...)
export async function TheaterScheduleService (id) {
  return (
    request (
      THEATERS_SCHEDULE_API + `${id}&maNhom=GP01`,
      'GET',
    )
  )
}

// Export Movie schedule by theater
export async function DetailMovieBScheduleByTheaterService (id) {
  return (
    request (
      DETAIL_MOVIE_SCHEDULE_BY_THEATER_API + `${id}`,
      'GET',
    )
  )
}