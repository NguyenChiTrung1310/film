import React from 'react'
import { CardMedia, Grid, Typography } from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CopyrightIcon from '@material-ui/icons/Copyright';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import BrandLogo from '../../assets/images/logo-admin.png';

import './Footer.scss';

const Footer = () => {
  return (
    <Grid className='footer'>
      <Grid className='footer-information'>
        <Grid className='footer-content'>
          <Grid className='address'><Typography><LocationOnIcon className='icon'/> Address: 112 Cao Thang, 3 district, HCM City</Typography></Grid>
          <Grid className='address'><Typography><LocationOnIcon className='icon'/> Branch 1: 376 Vo Van Tan, 3 district, HCM City</Typography></Grid>
          <Grid className='address'><Typography><LocationOnIcon className='icon'/> Branch 2: 459 Su Van Hanh, 10 district, HCM City</Typography></Grid>
          <Grid className='address'><Typography><LocationOnIcon className='icon'/> Branch 3: 82 Ung Van Khiem, Binh Thanh district, HCM City</Typography></Grid>
          <Grid className='address'><Typography><LocationOnIcon className='icon'/> Branch 4: 110 CityLand section, Phan Van Tri, Gò Vấp district, HCM City</Typography></Grid>
          <Grid className='address'><Typography><LocationOnIcon className='icon'/> Branch 5: 56 Le Canh Tuan, Tan Phu district, HCM City</Typography></Grid>
        </Grid>
        <Grid className='footer-brand'>
          <Grid className='brand-name'>
            <CardMedia
              alt='brand'
              className='brand'
              image={BrandLogo}
            />
            <Grid><Typography className='name'>Cybersoft Academy</Typography></Grid>
          </Grid>
          
          <Grid className='social'>
            <Typography className='social-name'>Get socials</Typography>
            <FacebookIcon className='icon-social fb'/>
            <YouTubeIcon className='icon-social yt'/>
          </Grid>
        </Grid>
      </Grid>
      <Grid className='copyright'>
        <Typography>
          <CopyrightIcon className='icon-copyright' /> Cybersoft 2017-2020
        </Typography>
      </Grid>
    </Grid>
  )
}
export default Footer
