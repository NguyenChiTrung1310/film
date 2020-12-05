/* eslint-disable no-mixed-spaces-and-tabs */

import React from 'react'
import { Container, Grid,Divider } from '@material-ui/core'
import PropTypes from 'prop-types';


const CustomScheduleMovie = ({ arrayData }) => {

  const renderCustomMovie = () => {
    return arrayData.map((item, index) => {
      const {   ngayChieuGioChieu, thongTinRap } = item; 
      //   const x =[];
      //   x.push(thongTinRap);
      //   console.log('QQQ',x);
      //   const arr = test.reduce((acc, test) => {
  

      //     const found = acc.find(i => i.tenCumRap === test.tenCumRap);
        
         
  
      //     if (found) {
      //       found.tenRap.push(test.tenRap);
      //     } else {
      //       acc.push({tenCumRap: test.tenCumRap, tenRap: [test.tenRap]}) 
      //     }
         
      //     return acc;  
      //   }, []);
      //   console.log(arr);
      return (
        <Grid   
          key={index}
        >
          
          <Grid
            container
          >
            <Grid
              
              item
              sm={6} 
              xs={12}
            >  
              {thongTinRap.tenCumRap} </Grid>
            <Grid
              className='schedule-item'
              item
              sm={2}
              style={{ display: 'flex' }}
              xs={12}
            >
              <Grid className='cinema-name'>
                {thongTinRap.tenRap} 
			       </Grid>
              <Divider className='devide'/>
              <Grid className='schedule-detail'> 
                {ngayChieuGioChieu} 
			       </Grid>
            </Grid>
        
           
          </Grid>

        </Grid>
      )
    })
  }
  return (
    <Container>
      {renderCustomMovie()}
    </Container>
  )
}

CustomScheduleMovie.propTypes={
  arrayData: PropTypes.array,
}


export default CustomScheduleMovie


 