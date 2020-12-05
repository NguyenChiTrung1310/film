import { UPDATE_PROFILE, USER_PROFILE } from '../../constants/constant';
import { ProfileService, UpdateProfileService } from '../../services';
import { storeProfile } from '../../utils/LocalStorage/LocalStorage';

const profile = (userData) => {
  const {data} = userData;
  return {
    type: USER_PROFILE,
    payload: data
  }
}

const updateProfile = (profileData) => {
  const {data} = profileData;
  return {
    type: UPDATE_PROFILE,
    payload: data
  }
}

export const inforUserAction = (dataProfile) => {
  return (dispatch) => {
    if(dataProfile){
      ProfileService(dataProfile.taiKhoan)
        .then(res => {
          const {data} = res;
          dispatch(profile(res));
          storeProfile(JSON.stringify(data));
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
}

export const updateProfileAction = (
  profileData,
  notify_success = () => {},
  notify_failed = () => {},
) => {
  return (dispatch) => {
    UpdateProfileService(profileData)
      .then(res => {
        const {data} = res;
        dispatch(updateProfile(res));
        storeProfile(JSON.stringify(data));

        // Notify Success
        notify_success();
      })
      .catch(err => {
        console.log(err);
        // Notify Failed
        notify_failed();
      })
  }
}


