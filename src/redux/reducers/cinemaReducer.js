import { 
  CINEMA_SYSTEM, 
  FECTH_BRANCH_CINEMA_LIST, 
  FETCH_CINEMA_LIST, 
  FETCH_THEATER_SCHEDULE, 
  MOVIE_SCHEDULE_DETAIL, 
  SCHEDULE_MOVIE, 
  CLEAR_DETAIL_MOVIE,
  SCHEDULE_ID_LINK 
} from '../../constants/constant'

let initialState={
  initialCinemaList: [],
  initialBranchCinemaList: [],
  initialTheaterSchedule: {},
  initialListTheater: [],
  initialScheduleMovie: [],
  initialMovieScheduleByTheater: {},
  initialCinemaSystem: [],
  initialScheduleIDLink: ''
} 
 
const CinemaListReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_CINEMA_LIST:
      state.initialCinemaList = payload;
      return { ...state }; 
    case FECTH_BRANCH_CINEMA_LIST:
      state.initialBranchCinemaList = payload;
      return { ...state }; 
    case FETCH_THEATER_SCHEDULE: 
      state.initialTheaterSchedule = payload;
      state.initialListTheater = payload.lstCumRap;
      return {...state};
    case SCHEDULE_MOVIE: 
      state.initialScheduleMovie = payload;
      return {...state};
    case MOVIE_SCHEDULE_DETAIL: 
      state.initialMovieScheduleByTheater = payload;
      return {...state}; 
    case CINEMA_SYSTEM: 
      state.initialCinemaSystem = payload;
      return {...state}
    case CLEAR_DETAIL_MOVIE:
      state.initialMovieScheduleByTheater = {};
      return {...state};
    case SCHEDULE_ID_LINK:
      state.initialScheduleIDLink = payload;
      return {...state}
    default:
      return state;
  }
};

export default CinemaListReducer;