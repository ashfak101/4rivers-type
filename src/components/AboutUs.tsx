import { Box, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import SecondaryBtn from './shared/SecondaryBtn'

const AboutUs = () => {
    return (
        <Box sx={{ m:{xs:0,md: 10 }}}>
            <Grid container spacing={0}>
                <Grid item xs={12} md={6}>
                    <Image width=' 660px' height='580px' layout="responsive" src='/assets/images/about.png' alt='' />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box sx={{ background: '#091C30' ,height: {xs:'100%',md:'777.04px'},p:{xs:2,md:10},mt:{xs:0,md:15}}}>
                        <Typography color='info.main' variant='h5' sx={{my:5}}>ABOUT US</Typography>
                        <Typography color='primary.main' variant='h3'>It starts with your vision.</Typography>
                        <Typography   color='primary.light' sx={{maxWidth:'380px',my:5}}>The expert service professionals at 4Rivers understand that you need to keep your machinery running, whether it’s combines and tractors on the farm, skid steers and dozers on the job site, or lawnmowers and utility vehicles at home. We are here to keep your John Deere equipment running and ensure you can finish the job.</Typography>
                        <SecondaryBtn text={'CLICK HERE'}/>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default AboutUs