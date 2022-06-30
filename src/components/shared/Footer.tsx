import { Box, Container, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
    return (
        <Box sx={{ py: 10, background: '#091C30' }}>
            <Container>
                <Box>
                    <Box sx={{ borderBottom: '1px solid #979797', pb: 5, display: 'flex', justifyContent: 'space-between', flexDirection: { xs: 'column', md: 'row', flexWrap: 'wrap', } }}>
                        <Box sx={{ mr: 1 }}>
                            <Image width=' 217.95px'
                                height=' 66px' src='/assets/images/logo.png' alt='' />
                        </Box>
                        <Box>
                            <Box sx={{ borderBottom: '1px solid #979797', mr: 1, pb: 1 }}>
                                <Typography variant='h5' color='primary.main'>RESEARCH</Typography>
                            </Box>
                            <Box sx={{ mt: 1 }}>
                                <Typography sx={{ color: '#979797' }}>RESEARCH</Typography>

                            </Box>
                        </Box>
                        <Box>
                            <Box sx={{ borderBottom: '1px solid #979797', mr: 1, pb: 1 }}>
                                <Typography variant='h5' color='primary.main'>Shop</Typography>
                            </Box>
                            <Box sx={{ mt: 1 }}>
                                <Typography sx={{ color: '#979797' }}>Shop</Typography>

                            </Box>
                        </Box>
                        <Box>
                            <Box sx={{ borderBottom: '1px solid #979797', mr: 1, pb: 1 }}>
                                <Typography variant='h5' color='primary.main'>TECHNOLOGY</Typography>
                            </Box >
                            <Box sx={{ mt: 1 }}>
                                <Typography sx={{ color: '#979797' }}>Technolog</Typography>
                                <Typography sx={{ color: '#979797' }}>4Sight Solution</Typography>
                                <Typography sx={{ color: '#979797' }}>Furrow Focus</Typography>
                            </Box>
                        </Box>
                        <Box>
                            <Box sx={{ borderBottom: '1px solid #979797', mr: 1, pb: 1 }}>
                                <Typography variant='h5' color='primary.main'>PARTS & SERVICES</Typography>
                            </Box>
                            <Box sx={{ mt: 1 }}>
                                <Typography sx={{ color: '#979797' }}>Parts & Services</Typography>
                                <Typography sx={{ color: '#979797' }}>Parts</Typography>
                                <Typography sx={{ color: '#979797' }}>Service</Typography>
                            </Box>
                        </Box>
                        <Box>
                            <Box sx={{ borderBottom: '1px solid #979797', mr: 1, pb: 1 }}>
                                <Typography variant='h5' color='primary.main'>COMPANY</Typography>
                            </Box>
                            <Box sx={{ mt: 1 }}>
                                <Typography sx={{ color: '#979797' }}>Brands</Typography>
                                <Typography sx={{ color: '#979797' }}>Careers</Typography>
                                <Typography sx={{ color: '#979797' }}>Dealer Transfer</Typography>
                                <Typography sx={{ color: '#979797' }}>Request</Typography>
                                <Typography sx={{ color: '#979797' }}>Events</Typography>
                                <Typography sx={{ color: '#979797' }}>Lil Partners Club</Typography>
                                <Typography sx={{ color: '#979797' }}>Location</Typography>
                                <Typography sx={{ color: '#979797' }}>Podcast</Typography>
                                <Typography sx={{ color: '#979797' }}>Sponsorships</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ borderBottom: '1px solid #979797', mr: 1, pb: 2 }}>
                        <Box sx={{ maxWidth: '500px',display:'flex' ,justifyContent:'space-between',flexWrap:'wrap',py:5}}>
                            <Box>
                                <Typography variant='h5' sx={{color:'#979797',mb:2}}>CORPORATE OFFICE</Typography>
                                <Typography color='primary.main'>927 11th Street Greeley,</Typography>
                            </Box>
                            <Box sx={{textAlign:'right'}}>
                                <Typography variant='h5' sx={{color:'#979797',mb:2}}>DIRECT EMAIL</Typography>
                                <Typography color='primary.light'>INFO@4RIVERSEQUIPMENTS,</Typography>
                            </Box>
                        </Box>
                        <Typography color='primary.light'>&copy;Copyright 2022 All Right Reserved 4Riverts Equipment </Typography>
                    </Box>
                </Box>
                <Box sx={{display:'flex',justifyContent:'space-between',flexWrap:'wrap',px:10,py:5,flexDirection:{xs:'column',md:'row'}}}>
                <Box sx={{ mt: 1,display:'flex' }}>
                                <Typography sx={{ color:'#fff',mr:2,fontSize:'14px' }}>PRIVACY POLICY</Typography>
                                <Typography sx={{ color: '#fff',fontSize:'14px',mr:2 }}>COOKIE POLICY</Typography>
                                <Typography sx={{ color: '#fff',fontSize:'14px',mr:2 }}>TERMS & CONDITIONSr</Typography>
                                <Typography sx={{ color: '#fff',fontSize:'14px' ,mr:2}}>SITE MAP</Typography>
                               
                            </Box>
                            <Box sx={{ mt: 1,display:'flex',justifyContent:'flex-end',color:'#fff' }}>
                                <Typography   sx={{mr:2}}>FOLLOW US</Typography>
                                <FacebookIcon  sx={{mr:2}}/>
                                <TwitterIcon  sx={{mr:2}}/>
                                <InstagramIcon  sx={{mr:2}}/>
                                <YouTubeIcon  sx={{mr:2}}/>
                            </Box>
                    <Box></Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Footer