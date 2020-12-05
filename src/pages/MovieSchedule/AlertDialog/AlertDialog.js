import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Divider,
  Grid
} from '@material-ui/core';

import { LOGIN_PAGE, SCHEDULE_ID_LINK, TICKET_ROOM_PAGE } from '../../../constants/constant';
import PropTypes from 'prop-types';
import {createAction} from '../../../redux/actions';

 
const AlertDialog = ({tenRap, ngayChieuGioChieu, maLichChieu}) => {
  const [open, setOpen] = useState(false);
  const user = useSelector(state => state.user.credentials);

  const history = useHistory();
  const dispatch = useDispatch()

 
  const handleClickOpen = () => {
    setOpen(true);
  };
 
  const handleClose = () => {
    setOpen(false);
  };

  const handleClickSignIn = () => {
    const link = `${TICKET_ROOM_PAGE}/${maLichChieu}`;

    if(!user){
      history.push(`${LOGIN_PAGE}`);
      dispatch(createAction(SCHEDULE_ID_LINK, link))

    }
    setOpen(false);
  }
 
  return (
    <Grid>
      <Button
        onClick={handleClickOpen}
      >
        <Grid className='cinema-name'>
          {tenRap}
        </Grid>
        <Divider className='devide'/>
        <Grid
          className='schedule-detail'
        >
          {ngayChieuGioChieu}
        </Grid>
      </Button>
      <Dialog
        aria-describedby='alert-dialog-description'
        aria-labelledby='alert-dialog-title'
        onClose={handleClose}
        open={open}
      >
        <DialogContent>
          <DialogContentText className='confirm-dialog'>
           You are not logged in !
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            className='btn-style'
            onClick={handleClose}
          >
           Cancel
          </Button>
          <Button
            autoFocus
            className='btn-style'
            onClick={handleClickSignIn}
          >
           Sign in
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
}
 
AlertDialog.propTypes = {
  maLichChieu: PropTypes.string,
  ngayChieuGioChieu: PropTypes.string,
  tenRap: PropTypes.string,
};

export default AlertDialog;

