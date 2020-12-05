import React   from 'react';   
import { Container  , Typography, Grid  } from '@material-ui/core'
import PropTypes from 'prop-types';


const TheaterInfo = ({item}) => {
  const {
    tenCumRap, 
    tenRap,
    // maRap, 
    // maCumRap, 
    // maHeThongRap, 
    // tenHeThongRap
  } =item; 
  return (
    <Container>
 
      <Grid
        container
         
      >
        <Grid
          item
          sm={3}
          xs={12}
        >
          <Typography
            className='title'
            component='h5'
            variant='h5'
          >
            {tenCumRap}
          </Typography>
        </Grid>
        <Grid
          item
          sm={9}
          xs={12}
        >
          <Typography
            className='title'
            component='h5'
            variant='h5'
          >
            {tenRap}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

TheaterInfo.propTypes={
  item: PropTypes.object,
}

export default TheaterInfo
