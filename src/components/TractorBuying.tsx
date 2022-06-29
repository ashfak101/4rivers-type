import { Box, Typography } from '@mui/material'
import React from 'react'

const TractorBuying = () => {
    return (
        <Box sx={{  textAlign: 'center', background: '#091C30' }}>
            <Box  sx={{m:'0 600px' }}>
                <Box sx={{ maxWidth: '475.43px' }}>
                    <Typography variant='h4' color='primary'>Simple Tractor Buying from 4Rivers Equipment</Typography>
                </Box>
                <Box sx={{width: '587px'}}>
                    <Typography color='primary'>Simple Tractor Buying from 4Rivers Equipment now includes Buy Online! That’s right, pick your John Deere Tractor, add attachments, and apply for financing all online. We are making building your tractor package simple.</Typography>
                    <Typography>It’s simple. We have John Deere tractors waiting to get to work today, at the price you see online. Add a few attachments, and check out online today!

                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default TractorBuying