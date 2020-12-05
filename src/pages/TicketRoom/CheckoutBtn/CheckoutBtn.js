import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { 
  Grid,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText
} from '@material-ui/core';

import { BookingTicketAction } from '../../../redux/actions/bookingAction';
import { TICKET_MOVIE, TICKET_ORDER_PAGE } from '../../../constants/constant';
import { createAction } from '../../../redux/actions';
import { toast } from 'react-toastify';
import './CheckoutBtn.scss';

const CheckoutBtn = ({maLichChieu, movieInfo}) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const orderInformation = useSelector(state => state.ticketRoom.initialTicketInfo);
  const account = useSelector(state => state.user.credentials);
  const bookingStatus = useSelector(state => state.ticketRoom.initialBookingStatus);

  const {price, tickets} = orderInformation;
  const {taiKhoan} = account;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const notify_success = () => {
    toast.success('Booking success !');
  }
  
  const notify_failed = () => {
    toast.error('Booking failure !');
  }

  const handleCheckout = () => {
    if(price !== 0){
      const newTickets = tickets.map(item => item.ticket);

      const checkout = {
        maLichChieu: maLichChieu,
        danhSachVe: newTickets,
        taiKhoanNguoiDung: taiKhoan
      }

      dispatch(BookingTicketAction(checkout, notify_success, notify_failed))
      dispatch(createAction(TICKET_MOVIE, movieInfo))
      setOpen(false);
    }
  }

  useEffect(()=> {
    if(bookingStatus === 200) {
      setTimeout(() => {
        history.push(TICKET_ORDER_PAGE)
      }, 2000);
    }
  })

  return (
    <div>
      <Button
        className='checkout-btn style'
        onClick={handleClickOpen}
        variant='outlined'
      >
        Checkout
      </Button>
      <Dialog
        aria-describedby='alert-dialog-description'
        aria-labelledby='alert-dialog-title'
        onClose={handleClose}
        open={open}
      >
        <DialogContent>
          <DialogContentText className='confirm-dialog'>
            {price !== 0 ? 'Confirm your order?' : 'Please select your seat !'}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {
            price !== 0 ? (
              <Grid>
                <Button
                  className='btn-style'
                  onClick={handleClose}
                >
            Disagree
                </Button>
                <Button
                  autoFocus
                  className='btn-style'
                  onClick={handleCheckout}
                >
            Agree
                </Button>
              </Grid>
            ) : (
              <Button
                className='btn-style'
                onClick={handleClose}
              >
            OK
              </Button>
            )
          }
        </DialogActions>
      </Dialog>
    </div>
  );
}

CheckoutBtn.propTypes={
  maLichChieu: PropTypes.number,
  movieInfo: PropTypes.object,
}

export default CheckoutBtn;
