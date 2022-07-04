import { Box, Button, Container, Divider, Grid, Typography } from '@mui/material'
import { height } from '@mui/system'
import Image from 'next/image'
import React from 'react'
import MapsGoogle from './MapsGoogle'
import SecondaryBtn from './shared/SecondaryBtn'

// box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
const DealerNetwork = () => {
    return (
        <Box sx={{ mt: -20, zIndex: 999, position: 'relative' }}>
            <Container >
                <Grid container spacing={1}>
                    <Grid item xs={12} md={6} lg={4} >
                        <Box sx={{ m: 1, p: 2, boxShadow: ' 0px 8px 35px rgba(0, 0, 0, 0.0991348)', backgroundColor:'primary.main', borderRadius: '10px', minHeight: '370px','&:hover':{
                            boxShadow: "rgba(33, 35, 38, 0.1) 0px 10px 10px -10px"
                        } }}>
                            <Typography color='secondary.main' variant='h5' sx={{ mb: 2 }}>OUR DEALER NETWORK <Box component='span' sx={{ fontSize: '14px', textDecoration: 'underline', ml: 10, fontWeight: '300', }}>View Locations</Box></Typography>
                            {/* <Image width=' 355px' height='305.27px' src='/assets/images/mm.png' alt='' layout="responsive"/> */}
                            <MapsGoogle/>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4} >
                        <Box sx={{ m: 1, p: 2, boxShadow: ' 0px 8px 35px rgba(0, 0, 0, 0.0991348)', backgroundColor: 'warning.main', borderRadius: '10px', textAlign: 'center', minHeight: '370px' }}>
                            <Box sx={{ my: 4 }}><Image width='59px' height='40px' src='/assets/images/noun-map.png' alt='' /></Box>
                            <Typography variant='h5' color='primary'>We Transfer Equipment to any 4Rivers Location</Typography>
                            <Typography color='primary' sx={{ fontSize: '15px', fontFamily: 'Heebo', lineHeight: '20px', my: 2 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
                            <Box sx={{ my: 3 }}><SecondaryBtn text={'Search All Location'} /></Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4} >
                        <Box sx={{ m: 1, p: 2, boxShadow: ' 0px 8px 35px rgba(0, 0, 0, 0.0991348)',backgroundColor: 'primary.main', borderRadius: '10px', minHeight: '370px', '&:hover':{
                            boxShadow: "rgba(33, 35, 38, 0.1) 0px 10px 10px -10px"
                        }}}>
                            <Typography variant='h5' color='secondary.main'>BUYING FROM US</Typography>
                            <Box sx={{ display: 'flex', my: 5, mx: 1 }}><Image width='24px' height='24px' src='/assets/images/dealer-icon/dealer1.svg' alt='' />
                                <Typography sx={{ fontSize: '14px', color: '#242424', ml: 5 }}>Lorem ipsum dolor sit amet, consetur</Typography>
                            </Box>
                            <Divider color='#D8D8D8' />

                            <Box sx={{ display: 'flex', my: 5, mx: 1 }}><Image width='24px' height='24px' src='/assets/images/dealer-icon/dealer2.svg' alt='' />
                                <Typography sx={{ fontSize: '14px', color: '#242424', ml: 5 }}>Lorem ipsum dolor sit amet, consetur</Typography>
                            </Box>
                            <Divider color='#D8D8D8' />
                            <Box sx={{ display: 'flex', my: 5, mx: 1 }}><Image width='24px' height='24px' src='/assets/images/dealer-icon/dealer3.svg' alt='' />
                                <Typography sx={{ fontSize: '14px', color: '#242424', ml: 5 }}>Lorem ipsum dolor sit amet, consetur</Typography>
                            </Box>


                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default DealerNetwork