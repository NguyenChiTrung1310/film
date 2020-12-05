import { CLEAR_STORE, LOGIN_FAILURE, LOGIN_SUCCESS, REGISTER_FAILURE, REGISTER_SUCESS } from '../../constants/constant';
import {LoginService, RegisterService} from '../../services'; 
import { clearStoreFromLocalStorage, storeCredentials, storeUserToken } from '../../utils/LocalStorage/LocalStorage';

// login success
const loginSucceeded = (loginData) => {
  const {data} = loginData;
  return {
    type: LOGIN_SUCCESS,
    loginStatus: true, 
    payload: data
  };
}

// login failed
const loginFailed = () => {
  return {
    type: LOGIN_FAILURE,
    loginStatus: false
  };
}

// logout 
const logOut = () => {
  return {
    type: CLEAR_STORE
  }
}

export const loginAction = (
  loginData,
  notify_success = () => {},
  notify_failed = () => {},
) => {
  return (dispatch) => {
    LoginService(loginData)
      .then(res => {
        const { accessToken } = res.data;
        const {data} = res;        
        // dispatch action to reducer
        dispatch(loginSucceeded(res)); // res is an object of data's API
        
        // store data (localstorage)
        storeUserToken(accessToken);
        storeCredentials(JSON.stringify(data));

        // Notify Success
        notify_success();
      })
      .catch((err) => {

        // dispatch action to reducer
        dispatch(loginFailed());
        console.log(err);

        // Notify Failed
        notify_failed();
      });
  }
} 
 
const registerSucess=(registerData)=>{
  const {data} =registerData;
  return {
    type: REGISTER_SUCESS,
    payload:data,
    loginStatus:false,
  }
}

const registerFailed=()=>{ 
  return {
    type: REGISTER_FAILURE, 
    loginStatus:false,
  }
}
// clear store
export const clearStoreAction = (notify_success = () => {}) => {
  return (dispatch) => {
    dispatch(logOut());
    clearStoreFromLocalStorage();
    notify_success();
  }
}
 
export const registerAction =( 
  taiKhoan,
  matKhau,
  email,
  soDt,
  maNhom,
  maLoaiNguoiDung,
  hoTen,
  notify_success=()=>{},
  notify_failed=()=>{},
) => {
  return (dispatch)=>{
    RegisterService(
      taiKhoan,
      matKhau,
      email,
      soDt,
      maNhom,
      maLoaiNguoiDung,
      hoTen
    )
      .then(res=>{ 
        dispatch(registerSucess(res)) 
        notify_success();
      })
      .catch(err=>{ 
        console.log(err);
        dispatch(registerFailed());
        notify_failed();
      })
  }
}