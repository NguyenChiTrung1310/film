import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link, useHistory} from 'react-router-dom'
import PropTypes from 'prop-types'; 
import { Container, Grid, TextField, Typography } from '@material-ui/core'; 

import Button from '../../components/Button/Button'; 
import { HOME_PAGE, REGISTER_PAGE } from './../../constants/constant'
import { handleLoginForm } from '../../utils/Validation/Validation';
import { loginAction } from '../../redux/actions/userAction';

import { isEmpty } from 'lodash';
import LoadingCool from '../../components/Spinner_Cool/SpinnerCool';

import { toast } from 'react-toastify';
import { useStyles } from './useStyles';
import './LoginPage.scss';


const LoginPage = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const history = useHistory();

  /* START ______GET DATA FROM REDUCER______ */
  
  // Get loginStatus from reducer using useSelector
  const loginStatus = useSelector(state => state.user.loginStatus);

  const linkScheduleID = useSelector(state => state.cinemaList.initialScheduleIDLink);

  /* END ________________________________________ */

  const [fields, setFields] = useState({
    taiKhoan: '',
    matKhau: '',
  });

  const handleChange = (e) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const {taiKhoan, matKhau} = fields;
    const loginData = {taiKhoan, matKhau};
  
    // handle validation form
    const error = handleLoginForm(fields);
    
    if (!isEmpty(error)) {
      toast.warn('Please input valid email and password');
      return;
    }

    const notify_success = () => {
      toast.success('Login success');
    }
    
    const notify_failed = () => {
      toast.error('Email or password is incorrect !');
    }

    if(error === 1){
      // dispatch action
      dispatch(
        loginAction(loginData, notify_success, notify_failed)
      );    
    } 
  }

  useEffect(() => {
    if(loginStatus === true){
      if(linkScheduleID){
        history.push(linkScheduleID);
      }else{
        setTimeout(() => {
          history.push(HOME_PAGE)
        }, 2000);
      }
    }
  }, [loginStatus, linkScheduleID, history]);

  const loading = () => {
    return (<LoadingCool />);
  }

  return (
    <Container
      component='main'
      maxWidth='xs'
    >
      {loginStatus 
        ? loading() 
        : (
          <div className={classes.paper}>
            <Typography
              className='title'
              component='h1'
              variant='h3'
            >
          Sign in
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
                label='Username'
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
              <Button type='submit'>Sign In</Button>
              <Grid container>
                <Grid item>
                  <Grid className={classes.registerLink}>
                    <p>
                  Don't have an account?
                      <Link
                        className={classes.link}
                        to = {REGISTER_PAGE}
                      >
                    Register
                      </Link>
                    </p>
                  </Grid>
                </Grid>
              </Grid>
            </form>
          </div>
        )
      
      }
      
    </Container>
  );
};

LoginPage.propTypes = {
  check: PropTypes.bool,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  loginStatus: PropTypes.bool,
  matKhau: PropTypes.string, 
  onChange: PropTypes.func,
  onSubmit: PropTypes.func, 
  taiKhoan: PropTypes.string,
};

export default LoginPage;
