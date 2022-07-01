import { Box, Container, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import PrimaryBtn from './shared/PrimaryBtn'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
const Career = () => {
    return (
        <Box sx={{ my: { xs: '10px', md: '100px' } }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} sx={{ position: 'relative' }}>
                        <Image width='626px' height='500px' src='/assets/images/career.png' alt='' layout="responsive" />
                        <Box sx={{
                            width: '110px', height: '110px', background: '#FFFFFF', position: 'absolute', borderRadius: '50%',
                            top: "50%",
                            left: "50%",transition:'all 0.5s ease',
                            transform: 'translate(-50%, -50%)',cursor:'pointer','&:hover':{
                                background: '#091C30'
                            }
                        }}><PlayArrowIcon sx={{
                            fontSize: '34px', color: 'info.main', position: 'absolute', top: '50% ', left: '50% ',
                            transform: 'translate(-50%, -50%)'
                        }} /></Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ py: 3, px: 5 }}>
                            <Typography variant='h4' sx={{ maxWidth: '368px', my: 5 }}>Start a John Deere Career with 4Rivers Equipment</Typography>
                            <Typography sx={{ fontSize: '15px', fontFamily: 'Heebo', mb: 2 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta mauris at finibus mattis. Nulla facilisi. Pellentesque ac tellus nulla. Nulla facilisi. Sed viverra commodo erat, ut laoreet tellus hendrerit vitae.</Typography>
                            <PrimaryBtn text={'FIND OUT MORE'}></PrimaryBtn>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box >
    )
}

export default Career