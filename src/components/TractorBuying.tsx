import { Box, Typography } from '@mui/material'
import React from 'react'

const TractorBuying = () => {
    return (
        <Box sx={{ width: '100%', textAlign: 'center', background: '#091C30', display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ m: '100px auto',px:{xs:'20px',md:'0'} }}>
                <Box sx={{ maxWidth: '536.43px',m: {
                    xs:'0 0',md:'0 auto'
                } }}>
                    <Typography variant='h4' color='primary'>Simple Tractor Buying from 4Rivers Equipment</Typography>
                    <Box sx={{ width: '96.08px', border: '1px solid #FFD000', m: '30px auto' }}></Box>
                </Box>
                <Box sx={{ maxWidth: '587px', m: {
                    xs:'0 0',md:'0 auto'
                } }}>
                    <Typography color='primary.light' sx={{ fontSize: '15px', fontFamily: 'Heebo', fontWeight: '400', lineHeight: '20px', mb: '20px' }}>Simple Tractor Buying from 4Rivers Equipment now includes Buy Online! That’s right, pick your John Deere Tractor, add attachments, and apply for financing all online. We are making building your tractor package simple.</Typography>
                    <Typography color='primary.light' sx={{ fontSize: '15px', fontFamily: 'Heebo', fontWeight: '400', lineHeight: '20px', mb: '50px' }}>It’s simple. We have John Deere tractors waiting to get to work today, at the price you see online. Add a few attachments, and check out online today!

                    </Typography>

                </Box>
                <Box sx={{ display: 'flex' ,flexDirection:{
                    xs:'column',md:'row',justifyContent:'center',alignItems:'center'
                }}}>
                    <Box color='primary' sx={{ maxWidth: '276.83px',mr:4 }}>
                        <Typography variant='h5' color='primary'>FEATURE HERE</Typography>
                        <Typography color='primary.light' sx={{ fontSize: '15px', fontFamily: 'Heebo', fontWeight: '400', lineHeight: '20px', mt: '20px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
                    </Box>
                    <Box sx={{ maxWidth: '276.83px',mr:4 }}>
                        <Typography variant='h5' color='primary'>FEATURE HERE</Typography>
                        <Typography color='primary.light' sx={{ fontSize: '15px', fontFamily: 'Heebo', fontWeight: '400', lineHeight: '20px', mt: '20px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
                    </Box>
                    <Box sx={{ maxWidth: '276.83px' }}>
                        <Typography variant='h5' color='primary'>FEATURE HERE</Typography>
                        <Typography color='primary.light' sx={{ fontSize: '15px', fontFamily: 'Heebo', fontWeight: '400', lineHeight: '20px', mt: '20px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default TractorBuying