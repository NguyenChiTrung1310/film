import React from 'react' 
import LoadingCool from './../../Spinner_Cool/SpinnerCool'
import PropTypes from 'prop-types'; 

import { 
  Card,
  CardActionArea, 
  CardContent, 
  Typography, 
  Grid, 
  CardMedia
} from '@material-ui/core';  
import StarIcon from '@material-ui/icons/Star';

import './SliderItems.scss' 

const SliderItems=({item})=>{ 
  const {ngayKhoiChieu, tenPhim, hinhAnh, danhGia} =  item;   

  return(
    <Card className='img-card' >
      <CardActionArea>      
        <CardContent className='card-body'>
          {
            hinhAnh ? (
              <CardMedia
                alt='movie_Image'
                className='img'
                image={hinhAnh}
              />
            ) : <LoadingCool/>
          }  
          <Typography
            className='card-title'
            component='h2'
            gutterBottom
            variant='h5'
          >
            {tenPhim}
          </Typography>
          <Grid style={{textAlign: 'left', width: '50%', margin: 'auto'}}>
            <Typography
              className='card-text'
              component='h5'
              variant='h5'
            >
             Date: 
              <Typography
                component='span'
                style={{paddingLeft: '8px', color: '#03a9f4'}}
                variant='body2'
              >
                {ngayKhoiChieu}
              </Typography>
            </Typography>
            <Typography
              className='card-text'
              component='h5'
              variant='h5'
            >
             Rating: 
              <Typography
                component='span'
                style={{paddingLeft: '8px', color: '#03a9f4'}}
                variant='body2'
              >
                {danhGia} 
                <StarIcon className='icon-star'/>
                <StarIcon className='icon-star'/>
                <StarIcon className='icon-star'/>
                <StarIcon className='icon-star'/>
                <StarIcon className='icon-star'/>
              </Typography>
            </Typography>
          </Grid>
        </CardContent>
      </CardActionArea>     
    </Card>
  )
} 

SliderItems.propTypes={
  hinhAnh: PropTypes.string,
  item: PropTypes.object,
  moTa: PropTypes.string,
  tenPhim: PropTypes.string,
}

export default SliderItems;  

