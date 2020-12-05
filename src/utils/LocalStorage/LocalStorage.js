import { 
  LOCAL_STORAGE_CREDENTIALS_KEY, 
  LOCAL_STORAGE_PROFILE_KEY, 
  LOCAL_STORAGE_TOKEN_KEY,
  LOCAL_STORAGE_ORDER_CART_KEY,
  LOCAL_STORAGE_ORDER_CART_MOVIE_INFO_KEY, 
  LOCAL_STORAGE_ORDER_CART_TICKET_INFO_KEY,
  LOCAL_STORAGE_BOOKING_STATUS_KEY
} from '../../constants/constant';


/* ========= USER TOKEN ========= */
export const storeUserToken = (token) => {
  localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, token);
}

/* ========= USER CREDENTIALS ========= */
// set 
export const storeCredentials = (token) => {
  localStorage.setItem(LOCAL_STORAGE_CREDENTIALS_KEY, token);
}

/* ========= PROFILE ========= */
// set 
export const storeProfile = (data) => {
  localStorage.setItem(LOCAL_STORAGE_PROFILE_KEY, data);
}

/* ========= ORDER CART ========= */
// set 
export const storeOrderCart = (data, status) => {
  localStorage.setItem(LOCAL_STORAGE_ORDER_CART_KEY, data);
  localStorage.setItem(LOCAL_STORAGE_BOOKING_STATUS_KEY, status);
}
export const storeOrderCart_MovieInfo = (data) => {
  localStorage.setItem(LOCAL_STORAGE_ORDER_CART_MOVIE_INFO_KEY, data);
}
export const storeOrderCart_TicketInfo = (data) => {
  localStorage.setItem(LOCAL_STORAGE_ORDER_CART_TICKET_INFO_KEY, data);
}



/* ========= GET DATA FRON LOCALSTORAGE ========= */

// get Data
export const getDataFromLocalStorage = (key) => {
  return localStorage.getItem(key);
}

// get Token
export const getTokenFromLocalStorage = () => {
  const token =  localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY);
  return token;
}


/* ========= LOGOUT and CLEAR LOCALSTORAGE ========= */

// CLEAR STORE
export const clearStoreFromLocalStorage = () => {
  localStorage.clear();
}

