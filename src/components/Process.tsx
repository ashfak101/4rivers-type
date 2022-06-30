import { Box, Container, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import PrimaryBtn from './shared/PrimaryBtn'
import styles from '../styles/Process.module.scss'



const Process = () => {
    const process =[
        {id:1,title:'HAGGLE',image:'/assets/images/process/scott-goodwill.png',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
        {id:2,title:'FRONT RANGE READY',image:'/assets/images/process/randy-fath.png',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
        {id:3,title:'30 DAYS WORRY-FREE',image:'/assets/images/process/scott-goodwill.png',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
        {id:4,title:'10 YEAR WARRANTY',image:'/assets/images/process/dan-loran.png',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
    ]
    return (
        <Box>
            <Container>
                <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',mt:'100px',flexDirection:{xs:'column',md:'row'}}}>
                    <Box>
                        <Typography variant='h6' color='info.main'>OUR PROCESS</Typography>
                        <Typography variant='h4' sx={{ maxWidth: '476px' }}>Simple Tractor Buying from 4Rivers Equipment</Typography>
                    </Box>
                    <Box sx={{alignContent: 'flex-end'}}>
                        <PrimaryBtn text='FIND OUT MORE' />
                    </Box>
                </Box>
                <Box sx={{mt:'50px'}}>
                    <Grid container spacing={1}>
                        {
                            process.map(element=>
                                <Grid key={element.id} xs={12} md={6} lg={3} className={styles.process_card}>
                                    <Image width='276' height='398' src={element.image} alt=''/>
                                    <Typography variant='h5' color='primary.main'>{element.title}</Typography>
                                </Grid>
                            )
                        }
                    </Grid>

                </Box>
            </Container>
        </Box>
    )
}

export default Process