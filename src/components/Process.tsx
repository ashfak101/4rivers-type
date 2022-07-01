import { Box, CardMedia, Container, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import PrimaryBtn from './shared/PrimaryBtn'
import styles from '../styles/Process.module.scss'

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { height } from '@mui/system'

const Process = () => {
    const process = [
        { id: 1, title: 'HAGGLE', image: '/assets/images/process/scott-goodwill.png', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { id: 2, title: 'FRONT RANGE READY', image: '/assets/images/process/randy-fath.png', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { id: 3, title: '30 DAYS WORRY-FREE', image: '/assets/images/process/scott-goodwill.png', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { id: 4, title: '10 YEAR WARRANTY', image: '/assets/images/process/dan-loran.png', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }
    ]
    return (
        <Box sx={{
            pb: 10, position: 'relative', '&:before': {
                content: '""',
                position: 'absolute', width: "35%", height: '100%', background: '#F2F2F2', right: 0
            }
        }}>

            <Container>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', pt: '100px', flexDirection: { xs: 'column', md: 'row' } }}>
                    <Box>
                        <Typography variant='h6' color='info.main'>OUR PROCESS</Typography>
                        <Typography variant='h4' sx={{ maxWidth: '476px' }}>Simple Tractor Buying from 4Rivers Equipment</Typography>
                    </Box>
                    <Box sx={{ alignContent: 'flex-end' }}>
                        <PrimaryBtn text='FIND OUT MORE' />
                    </Box>
                </Box>
                <Box sx={{ mt: '50px' }}>
                    <Box sx={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
                        {
                            process.map(element =>
                                <Box key={element.id} className={styles.process}>
                                    <Box className={styles.card}><img className={styles.image} src={element.image} alt="" />
                                        <Typography variant='h5' color='primary.main' className={styles.title}>{element.title}</Typography>
                                        <Box className={styles.content}>
                                            <Typography variant='h5' color='primary'>{element.title}</Typography>

                                            <Typography color='primary.light' sx={{ fontFamily: 'Heebo', fontSize: '15px', my: 4 }}>{element.text}</Typography>
                                            {/* <Box sx={{ display: 'inline', pt: 2, border: '1px solid #ffffff', fontSize: '24px', pb: 1, px: 2, borderRadius: '50px' }}><PlayArrowIcon sx={{ p: 0, m: 0 }} color='primary' />
                                            </Box> */}
                                            <Box sx={{
                                                position: 'relative', width: '47px',
                                                height: '47px',border:' 1.20569px solid #D5D5D5',borderRadius:'50px',transition:'all 0.3s ease-in',
                                                '&:hover':{
                                                    background:'#091C30',border:' 1.20569px solid #091C30'
                                                }
                                            }}>
                                                <PlayArrowIcon sx={{ p: 0, m: 0, position: 'absolute' ,top:'25%',left:'25%'}} color='primary' />
                                            </Box>
                                        </Box>
                                    </Box>


                                </Box>
                            )
                        }
                    </Box>

                </Box>
            </Container>
        </Box>
    )
}

export default Process