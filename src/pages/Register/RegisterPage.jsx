import React, { useEffect, useState  } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, useHistory} from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container, TextField, Typography, Grid, InputLabel, Select, FormControl, MenuItem } from '@material-ui/core';

import Button from './../../components/Button/Button';
import { handleRegisterForm } from '../../utils/Validation/Validation';
import { LOGIN_PAGE, REGISTER_SUCESS } from './../../constants/constant'

import { registerAction } from '../../redux/actions/userAction';
import LoadingCool from '../../components/Spinner_Cool/SpinnerCool';
import { useStyles } from './../Register/useStyles';
import { toast } from 'react-toastify';
import './RegisterPage.scss'; 

const RegisterPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const registerStatus = useSelector(state=> state.user.registerStatus); 

  const [fields, setFields] = useState({
    taiKhoan: '',
    matKhau: '',
    email: '',
    soDt: '',
    maNhom:'',
    maLoaiNguoiDung:'KhachHang',
    hoTen: '',
  });

  const handleChange = (e) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      taiKhoan,
      matKhau,
      email,
      soDt,
      maNhom,
      maLoaiNguoiDung,
      hoTen
    } = fields; 
    const error= handleRegisterForm(fields); 

    const notify_success = () => {
      toast.success('Register success');
    };
    const notify_failed = () => {
      toast.error('Email Registered');
    };

    if(error===1){ 
      dispatch(
        registerAction(
          taiKhoan.trim(),
          matKhau.trim(),
          email.trim(),
          soDt.trim(),
          maNhom.trim(),
          maLoaiNguoiDung.trim(),
          hoTen.trim(),
          notify_success,
          notify_failed,
        )
      ); 
    }
  }; 
  useEffect(() => {
    if(registerStatus === REGISTER_SUCESS){
      setTimeout(()=>{
        history.push(LOGIN_PAGE); 
      },2000);
    } 
  }, [registerStatus, history])
  
  const isLoading=()=>{
    return(
      <LoadingCool/> 
    );
  }

  return (
    <Container
      component='main'
      maxWidth='xs'
    >
      {
        registerStatus === REGISTER_SUCESS
          ? isLoading() 
          : (
            <Grid className={classes.paper}>
              <Typography
                className='title'
                component='h3'
                variant='h3'
              >
          Register
              </Typography>
              <form
                className={classes.form}
                noValidate
                onSubmit={handleSubmit}
              >
                <TextField
                  autoComplete='taiKhoan'
                  autoFocus
                  className={classes.field}
                  fullWidth
                  id='taiKhoan'
                  label='Account'
                  margin='normal'
                  name='taiKhoan'
                  onChange={(event) => handleChange(event)}
                  required
                  type='text'
                  value={fields.taiKhoan}
                  variant='outlined'
                />
                <TextField
                  autoComplete='matKhau'
                  className={classes.field}
                  fullWidth
                  id='matKhau'
                  label='Password'
                  margin='normal'
                  name='matKhau'
                  onChange={(event) => handleChange(event)}
                  required
                  type='password'
                  value={fields.matKhau}
                  variant='outlined'
                />
                <TextField
                  autoComplete='hoTen'
                  className={classes.field}
                  fullWidth
                  id='hoTen'
                  label='Full Name'
                  margin='normal'
                  name='hoTen'
                  onChange={(event) => handleChange(event)}
                  required
                  type='text'
                  value={fields.hoTen}
                  variant='outlined'
                />
                <TextField
                  autoComplete='email'
                  className={classes.field}
                  fullWidth
                  id='email'
                  label='Email'
                  margin='normal'
                  name='email'
                  onChange={(event) => handleChange(event)}
                  required
                  type='text'
                  value={fields.email}
                  variant='outlined'
                />
                <TextField
                  autoComplete='phomeNumber'
                  className={classes.field}
                  fullWidth
                  id='soDt'
                  label='Phone Number'
                  margin='normal'
                  name='soDt'
                  onChange={(event) => handleChange(event)}
                  required
                  type='text'
                  value={fields.soDt}
                  variant='outlined'
                /> 
                <FormControl
                  className={classes.formControl}
                  variant='filled'
                >
                  <InputLabel
                    className={classes.inputLabel}
                    htmlFor='filled-age-native-simple'
                  >Select Group</InputLabel>
                  <Select
                    className={classes.inputLabel} 
                    name='maNhom'
                    onChange={(event) => handleChange(event)} 
                    value={fields.maNhom}
              
                  >
                    <MenuItem
                      aria-label='None'
                      className={classes.inputLabel}
                      value=' '
                    />
                    <MenuItem
                      className={classes.inputLabel}
                      value='GP01'
                    >GP01</MenuItem>
                    <MenuItem
                      className={classes.inputLabel}
                      value='GP02'
                    >GP02</MenuItem>
                    <MenuItem
                      className={classes.inputLabel}
                      value='GP03'
                    >GP03</MenuItem>
                    <MenuItem
                      className={classes.inputLabel}
                      value='GP04'
                    >GP04</MenuItem>
                    <MenuItem
                      className={classes.inputLabel}
                      value='GP05'
                    >GP05</MenuItem>
                    <MenuItem
                      className={classes.inputLabel}
                      value='GP06'
                    >GP06</MenuItem>
                  </Select>
                </FormControl> 
                <Button
                  color='primary'
                  type='submit'
                  variant='contained'
                >
            Create Account
                </Button>
                <Grid container>
                  <Grid item>
                    <Grid className={classes.loginLink}>
                      <p>
            Have an Account?
                        <Link
                          className={classes.link}
                          to = {LOGIN_PAGE}
                        >
              Login
                        </Link>
                      </p>
                    </Grid>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          )
      }
      
    </Container>
  );
};

RegisterPage.propTypes = {
  fields: PropTypes.shape({
    taiKhoan: PropTypes.string.isRequired,
    matKhau: PropTypes.string.isRequired,
    hoTen: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired, 
    soDt: PropTypes.string.isRequired, 
    maNhom: PropTypes.string.isRequired, 
    maLoaiNguoiDung: PropTypes.string.isRequired, 
  }),
  onChange: PropTypes.func, 
  onSubmit: PropTypes.func,
};

export default RegisterPage;