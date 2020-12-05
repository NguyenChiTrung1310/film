import {CLEAR_STORE, UPDATE_PROFILE, USER_PROFILE} from '../../constants/constant';

let initialState = {
  initialProfile: null,
};

const ProfileReducer = (state = initialState, action) => {
  const { type, payload } = action;
    
  switch(type) {
    case USER_PROFILE:
      state.initialProfile = payload;
      return {
        ...state
      }
    case UPDATE_PROFILE:
      state.initialProfile = payload;
      return {
        ...state
      }
    case CLEAR_STORE:
      state = undefined;
      return {
        ...state,
      }
    default:
      return state;
  }
}

export default ProfileReducer;
