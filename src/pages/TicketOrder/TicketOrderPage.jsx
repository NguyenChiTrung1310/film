import React from 'react'
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';

import { Grid, Typography } from '@material-ui/core'
import ErrorPage from '../Error/ErrorPage';
import OrderForm from './OrderFrom/OrderForm';

const TicketOrderPage = () => {
  const ticketOrder = useSelector(state => state.ticketRoom.initialBooking);

  const {data, config, status} = ticketOrder;

  return (
    <Grid>
      {
        status ? (
          <Grid>
            <Typography>
              {data}
            </Typography>
            <OrderForm config={config}/>
          </Grid>
        ) : 
          <Route
            component={ErrorPage}
          />
      }
    </Grid>
  )
}

export default TicketOrderPage
