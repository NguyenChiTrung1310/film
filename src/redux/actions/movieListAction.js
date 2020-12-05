// fetch data  
import {createAction} from '.';
import { FETCH_MOVIELIST, FETCH_MOVIE_DETAIL } from '../../constants/constant';
import { MovieDetailService, MovieListService } from '../../services/movielist';

export const fetchMovieList = ()=>{
  return (dispatch) =>{
    MovieListService()
      .then((res)=>{
        dispatch(createAction(FETCH_MOVIELIST,res.data)) 
      })
      .catch((err)=>{
        // console.log(err);
      })
  }
}

export const fetchMovieDetail=(maPhim)=>{ 
  return (dispatch)=> {
    MovieDetailService(maPhim).then(
      (res)=>{
        dispatch(createAction(FETCH_MOVIE_DETAIL, res.data))
      }
    ).catch((err)=>{
      //console.log(err);
    })
  }
    
}

 