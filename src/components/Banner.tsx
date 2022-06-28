import { Box, Typography } from '@mui/material'
import React from 'react'
import Navbar from './shared/Navbar';

const bannerBg = {
    background: `url('/assets/images/banner.png')`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  
    height: "724.31px",
  };
const Banner = () => {

  return (
    <Box style={bannerBg}>
       <Navbar/>
    </Box>
  )
}

export default Banner