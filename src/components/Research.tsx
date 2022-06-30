import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import SecondaryBtn from './shared/SecondaryBtn';


const bannerBg = {
    background: `url('/assets/images/scott-goodwill-bg.png')`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",

    height: "606px",
    PointerEvent: 'all',

};
const Research = () => {
    return (
        <Box style={bannerBg} sx={{position:'relative',zIndex:'1','&:after':{
            content:'""',position:'absolute',
            left:0,
            right:0,
            top:0,
            bottom:0,
            background: 'linear-gradient(0deg, rgba(46, 46, 46, 0.0001) 0%, #151515 100%)',
            zIndex:'-1'

        }}}>
            <Container>
                <Box sx={{display:'flex' , alignItems:'center',height:'606px'}}>
                    <Box sx={{ maxWidth: '562px' }}>
                        <Typography variant='h5' color='info.main' sx={{mb:'10px', zIndex:'10'}}>RESEARCH</Typography>
                        <Typography variant='h3' color='primary'  sx={{mb:'10px',fontSize:{xs:'44px',md:'77px'}, zIndex:'1'}}>Find the right machine for the job</Typography>
                        <Typography color='primary.light'  sx={{mb:'20px', zIndex:'1'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit nunc imperdiet lorem ipsum dolor sit amet.</Typography>
                        <SecondaryBtn text={'CLICK HERE'} />
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Research