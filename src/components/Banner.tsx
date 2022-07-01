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
    <Box style={bannerBg} sx={{ zIndex:1,position:'relative','&:before':{
      content:'""',position:'absolute',width:"100%",height:'100%',background: 'linear-gradient(0deg, rgba(46, 46, 46, 0.0001) 0%, #151515 100%)'
    }}}>
      
       <Navbar/>
       <BannerContent/>
    </Box>
  )
}

export default Banner