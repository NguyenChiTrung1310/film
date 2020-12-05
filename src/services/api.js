// USER AUTH
const LOGIN_API = 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap';
const REGISTER_API = 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy';

// PROFILE
const USER_PROFILE_API = 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan';
const UPDATE_PROFILE_API = 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung';

// MOVIES
const MOVIELIST_API='https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01';
const MOVIEDETAIL_API='https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=';
// CINEMAS
const CINEMA_LIST_API = 'https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap';
const BRANCH_CINEMA_LIST_API = 'https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=';
const THEATERS_SCHEDULE_API = 'https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=';
const DETAIL_MOVIE_SCHEDULE_BY_THEATER_API = 'https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=';

// BOOKING TICKET
const GET_TICKET_ROOM_API = 'https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=';
const BOOKING_TICKET_API = 'https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe';


export {
  LOGIN_API, 
  REGISTER_API, 
  USER_PROFILE_API, 
  UPDATE_PROFILE_API,
  MOVIELIST_API, 
  CINEMA_LIST_API, 
  BRANCH_CINEMA_LIST_API, 
  THEATERS_SCHEDULE_API,
  DETAIL_MOVIE_SCHEDULE_BY_THEATER_API,
  GET_TICKET_ROOM_API,
  MOVIEDETAIL_API,
  BOOKING_TICKET_API
}; 
