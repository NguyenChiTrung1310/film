import React from 'react'
import { useSelector } from 'react-redux';
import { Grid, Typography } from '@material-ui/core'
import LabelImportantIcon from '@material-ui/icons/LabelImportant';

const OrderTicket = () => {

  const ticketInformation = useSelector(state => state.ticketRoom.initialTicketInfo);
  const {seats, number, price} = ticketInformation;

  const renderSeats = () => {
    
    return seats.map((item, index)=>{
      const {numID, typeSeat} = item;
    
      return (
        <Typography
          component={'span'}
          key={index}
          style={{fontWeight: '600'}}
          variant='h5'
        >
          {`([${numID}], `}
          {
            typeSeat === 'Thuong' ? (
              <Typography
                component={'span'}
                style={{color: '#03a9f4', fontWeight: '600'}}
                variant='h5'
              >
                {`${typeSeat}`}
              </Typography>
            ) : (
              <Typography
                component={'span'}
                style={{color: '#ed1c2d', fontWeight: '600'}}
                variant='h5'
              >
                {`${typeSeat}`}
              </Typography>
            )
          }
          {' ),'}
        </Typography>
      )
    });
  }

  return (
    <Grid className='ticket-section'>
      {
        number ? (
          <Grid>
            <Grid className='ticket-info'>
              <LabelImportantIcon className='label-icon'/>
              <Typography
                component={'span'}
                style={{fontWeight: '600'}}
                variant='h5'
              >
            Tickets: {number}
              </Typography>
            </Grid>
            <Grid className='ticket-info'>
              <LabelImportantIcon className='label-icon'/>
              <Typography
                component={'span'}
                style={{fontWeight: '600'}}
                variant='h5'
              >
                Seats: {renderSeats()}
              </Typography>
              
            </Grid>
            <Grid className='ticket-info'>
              <LabelImportantIcon className='label-icon'/>
              <Typography
                component={'span'}
                style={{fontWeight: '600'}}
                variant='h5'
              >
            Total (VND) : {
                  <Typography
                    component={'span'}
                    style={{fontWeight: '600',color: '#03a9f4'}}
                    variant='h5'
                  >{price}</Typography>
                } 
              </Typography>
            </Grid>
          </Grid>
        ) : (
          <Grid>
            <Grid className='ticket-info'>
              <LabelImportantIcon className='label-icon'/>
              <Typography
                component={'span'}
                style={{fontWeight: '600'}}
                variant='h5'
              >
            Tickets: 0
              </Typography>
            </Grid>
            <Grid className='ticket-info'>
              <LabelImportantIcon className='label-icon'/>
              <Typography
                component={'span'}
                style={{fontWeight: '600'}}
                variant='h5'
              >
            Seats: 0
              </Typography>
            </Grid>
            <Grid className='ticket-info'>
              <LabelImportantIcon className='label-icon'/>
              <Typography
                component={'span'}
                style={{fontWeight: '600'}}
                variant='h5'
              >
            Total (VND):  0
              </Typography>
            </Grid>
          </Grid>
        )
      }
    </Grid>
  )
}

export default OrderTicket
