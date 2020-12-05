import { UPDATE_PROFILE_API, USER_PROFILE_API } from './api';
import request from '../configs/request';

export async function ProfileService(taiKhoan) {
  return (
    request(
      USER_PROFILE_API,
      'POST',
      {taiKhoan}
    )
  );
}

export async function UpdateProfileService(profileData){
  return (
    request(
      UPDATE_PROFILE_API,
      'PUT',
      profileData
    )
  );
}