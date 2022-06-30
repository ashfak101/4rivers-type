import { Box, Container, Typography } from '@mui/material';
import React from 'react'

const Careers = () => {
  const careerBg = {
    background: `url('/assets/images/careers.png')`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
   
    height: "770px",
    PointerEvent:'all',
   
  };
  return (
    <Box style={careerBg} sx={{position:'relative',zIndex:'-1',my:10,'&:before':{
      content:'""',
      position:'absolute',left:0,right:0,top:0,bottom:0,background:' linear-gradient(-15deg, rgba(46, 46, 46, 0.0001) 0%, #151515 100%)',zIndex:'-1'
    }}}>
      <Container>
      <Box sx={{py:20}}>
        <Typography color='info.main' variant='h5'>CAREERS</Typography>
        <Typography color='primary.main'  variant='h3' sx={{maxWidth:'369px',fontSize:'82px',my:4}}>A PLACE OF Integrity</Typography>
        <Typography color='primary.light' sx={{maxWidth:'369px',fontSize:'15px',lineHeight: '25px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta mauris at finibus mattis. Nulla facilisi. Pellentesque ac tellus nulla. Nulla facilisi. Sed viverra commodo erat, ut laoreet tellus hendrerit vitae.</Typography>
      </Box>
      </Container>
    </Box>
  )
}

export default Careers