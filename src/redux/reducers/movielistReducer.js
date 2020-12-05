import { FETCH_MOVIELIST, FETCH_MOVIE_DETAIL, CLEAR_DETAIL_MOVIE } from '../../constants/constant'

let initialState={
  initialMovieList: [],
  initaialMovieList_Detail: null,
} 
 
const MovieListReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_MOVIELIST:
      state.initialMovieList = payload;
      return { ...state }; 
    case FETCH_MOVIE_DETAIL:
      state.initaialMovieList_Detail=payload;
      return {...state};
    case CLEAR_DETAIL_MOVIE:
      state.initaialMovieList_Detail=null;
      return {...state};
    default:
      return state;
  }
};

export default MovieListReducer;

