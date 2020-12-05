import axios from 'axios';
import request from '../configs/request';
import { LOGIN_API, REGISTER_API } from './api';

export async function LoginService(loginData) {
  return (
    request(
      LOGIN_API,
      'POST',
      loginData
    )
  );
} 
export async function RegisterService(taiKhoan, matKhau, email, soDt, maNhom, maLoaiNguoiDung, hoTen) {
  const registerData = {taiKhoan, matKhau, email, soDt, maNhom, maLoaiNguoiDung, hoTen};
  return await axios({
    method: 'POST',
    url: REGISTER_API,
    data: registerData,
  });
}

 