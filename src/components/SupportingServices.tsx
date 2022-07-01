import { Box, Container, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import PrimaryBtn from './shared/PrimaryBtn'

// box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
const SupportingServices = () => {
    return (
        <Box sx={{my:10}}>
            <Container>
                <Box sx={{textAlign:'center',my:10}}>
                    <Typography color='info.main' variant='h5'>SUPPORTING SERVICES</Typography>
                    <Typography color='warning.main' variant='h4'>Supporting you all the way</Typography>
                </Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent:{ xs:'space-evenly', md:'space-between'},alignItems:'center', }}>
                    <Box sx={{ maxWidth: '310px', textAlign: 'center', position: 'relative',background: '#F2F2F2',py:4,borderRadius:'10px',mb:{xs:10,md:0},cursor:'pointer',transition:'all 0.3s ease','&:hover':{
                        boxShadow:'rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px'
                    } }}>
                        <Box sx={{display:'inline-block',px:3,py:3,background:'#091C30',position:'absolute',borderRadius:'50px',left:'35%',top:'-10%'}}>
                            <Image width='32px' height='24' src='/assets/images/support-icon/Shape.svg' alt='' />
                        </Box>
                        <Typography variant='h5' sx={{my:3}}>EQUIPMENT PARTS</Typography>
                        <Typography sx={{fontSize:'15px',p:1,mb:1}}>Moments mean dollars, and getting the right part when you are down is crucial to your success. 4Rivers Equipment’s parts experts can help you get up and running again in no time. Our specialty encompasses a wide range of John Deere products, from heavy equipment parts to farm machinery parts and beyond.</Typography>
                        <PrimaryBtn text={'FIND OUT MORE'} />
                    </Box>
                    <Box sx={{ maxWidth: '310px', textAlign: 'center', position: 'relative',background: '#F2F2F2',py:4,borderRadius:'10px' ,mb:{xs:10,md:0},cursor:'pointer',transition:'all 0.3s ease','&:hover':{
                        boxShadow:'rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px'
                    } }}>
                        <Box sx={{display:'inline-block',px:3,py:3,background:'#091C30',position:'absolute',borderRadius:'50px',left:'35%',top:'-10%'}}>
                            <Image width='32px' height='24' src='/assets/images/support-icon/Shape-1.svg' alt='' />
                        </Box>
                        <Typography variant='h5' sx={{my:3}}>EQUIPMENT SERVICE</Typography>
                        <Typography sx={{fontSize:'15px',p:1,mb:1}}>Moments mean dollars, and getting the right part when you are down is crucial to your success. 4Rivers Equipment’s parts experts can help you get up and running again in no time. Our specialty encompasses a wide range of John Deere products, from heavy equipment parts to farm machinery parts and beyond.</Typography>
                        <PrimaryBtn text={'FIND OUT MORE'} />
                    </Box>
                    <Box sx={{ maxWidth: '310px', textAlign: 'center', position: 'relative',background: '#F2F2F2' ,py:4,borderRadius:'10px',mb:{xs:10,md:0},cursor:'pointer',transition:'all 0.3s ease','&:hover':{
                        boxShadow:'rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px'
                    } }}>
                        <Box sx={{display:'inline-block',px:3,py:3,background:'#091C30',position:'absolute',borderRadius:'50px',left:'35%',top:'-10%'}}>
                            <Image width='32px' height='24' src='/assets/images/support-icon/Shape-2.svg' alt='' />
                        </Box>
                        <Typography variant='h5'sx={{my:3}}>EQUIPMENT TECHNOLOGY</Typography>
                        <Typography sx={{fontSize:'15px',p:1,mb:1}}>Moments mean dollars, and getting the right part when you are down is crucial to your success. 4Rivers Equipment’s parts experts can help you get up and running again in no time. Our specialty encompasses a wide range of John Deere products, from heavy equipment parts to farm machinery parts and beyond.</Typography>
                        <PrimaryBtn text={'FIND OUT MORE'} />
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default SupportingServices