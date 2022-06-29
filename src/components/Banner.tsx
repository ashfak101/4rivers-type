import { Box, Typography } from '@mui/material'
import React from 'react'
import BannerContent from './BannerContent';
import Navbar from './shared/Navbar';

const bannerBg = {
    background: `url('/assets/images/banner.png')`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
   
    height: "724.31px",
    PointerEvent:'all',
   
  };
const Banner = () => {

  return (
    <Box style={bannerBg} sx={{ zIndex:1,position:'relative'}}>
      
       <Navbar/>
       <BannerContent/>
    </Box>
  )
}

export default Banner