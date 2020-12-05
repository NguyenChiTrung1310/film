/* eslint-disable no-useless-escape */
import { toast } from 'react-toastify';

const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@\']+(\.[^<>()[\]\\.,;:\s@\']+)*)|(\'.+\'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const validatePhoneNumber = (soDt) => {
  var re = /^\(?([0-9]{3})\)?(?:[0-9]??).{6,10}[0-9]$/;
  return re.test(soDt);
};



const notify_warning = (error) => {
  toast.warn(error);
};

const handleRegisterForm = (fields) => {
  var errors = {
    taiKhoan: '',
    matKhau: '',
    email: '',
    soDt: '',
    maNhom: '',
    maLoaiNguoiDung: '',
    hoTen: '',
  };
  if (
    fields['taiKhoan'] !== '' &&
    fields['hoTen'] !== '' &&
    fields['email'] !== '' &&
    fields['matKhau'] !== '' &&
    fields['soDt'] !== '' &&
    fields['maNhom'] !== '' &&
    fields['maLoaiNguoiDung'] !== '' &&
    validateEmail(fields['email']) === true &&
    validatePhoneNumber(fields['soDt']) === true
  ) {
    // console.log(
    //   `Account: ${fields['taiKhoan']} || Password: ${fields['matKhau']} || Fullname: ${fields['hoTen']} || Email: ${fields['email']} || Phone: ${fields['soDt']} || TypeGroup: ${fields['maNhom']} || TypeUser: ${fields['maLoaiNguoiDung']} `
    // );
    // notify_success();
    return 1;
  } else {
    //taiKhoan
    if (!fields['taiKhoan']) {
      errors['taiKhoan'] = 'Account field cannot be empty';
      return notify_warning(errors['taiKhoan']);
    }

    //Email

    if (!fields['email']) {
      errors['email'] = 'Email field cannot be empty';
      return notify_warning(errors['email']);
    } else {
      if (!validateEmail(fields['email'])) {
        errors['email'] = 'Invalid Email';
        return notify_warning(errors['email']);
      }
    }

    //matKhau
    if (!fields['matKhau']) {
      errors['matKhau'] = 'Password field cannot be empty';
      return notify_warning(errors['matKhau']);
    }

    //Username
    if (!fields['hoTen']) {
      errors['hoTen'] = 'Fullname field cannot be empty';
      return notify_warning(errors['hoTen']);
    }

    //soDt
    if (!fields['soDt']) {
      errors['soDt'] = 'Phone filed cannot be empty';
      return notify_warning(errors['soDt']);
    } else {
      if (!validatePhoneNumber(fields['soDt'])) {
        errors['soDt'] = 'Phone number at least 10-15 numbers';
        return notify_warning(errors['soDt']);
      }
    }
    //maNhom 
      if (!fields['maNhom']) {
        errors['maNhom'] = ' Type group field cannot be empty';
        return notify_warning(errors['maNhom']);
      }
    //maNguoiDung 
    if (!fields['maLoaiNguoiDung']) {
      errors['maLoaiNguoiDung'] = ' Type User field cannot be empty';
      return notify_warning(errors['maLoaiNguoiDung']);
    }
  }
};

const handleLoginForm = (fields) => {
  var errors = {
    taiKhoan: '',
    matKhau: ''
  };

  if (
    fields['taiKhoan'] !== '' &&
    fields['matKhau'] !== ''
  ) {
    return 1;
  } else {
    // taiKhoan
    if (!fields['taiKhoan']) {
      errors['taiKhoan'] = 'Account field cannot be empty';
      return notify_warning(errors['taiKhoan']);
    }

    //matKhau
    if (!fields['matKhau']) {
      errors['matKhau'] = 'Password field cannot be empty';
      return notify_warning(errors['matKhau']);
    }
  }
}

export { handleRegisterForm, validateEmail, handleLoginForm };
