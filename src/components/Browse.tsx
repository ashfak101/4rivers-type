import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Typography } from '@mui/material'
import React, { useRef, useState } from 'react'
import BrowseTabs from './shared/BrowseTabs'
import PrimaryBtn from './shared/PrimaryBtn'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import NearMeIcon from '@mui/icons-material/NearMe';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const Styles = {
    prev: {
        position: 'relative',
        border: '1px solid #979797',
        cursor: 'pointer',
        p: 2, mx: '10px',
        '&:hover': {
            color: '#fff'
        },
        '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            zIndex: -10,

            transform: 'scaleX(0)',
            // transformOrigin: 'left',
            transition: 'transform 0.5s ease-in-out',
            background: "#091C30",
        },
        '&:hover::before': {
            transform: 'scaleX(1)'

        },

    },

}
const browse = [
    {
        id: '1',
        name: 'JOHN DEERE',
        image: 'assets/images/browse-img.png',
        loader: '1023+LOADER',
        price: '$26,800',
        time: '27', date: '2021', km: '27',
        stock: 'AVAILABLE NOW'
    },
    {
        id: '2',
        name: 'JOHN DEERE',
        image: '/assets/images/browse1.png',
        loader: '1023+LOADER',
        price: '$26,800',
        time: '27', date: '2021', km: '17', stock: 'PRE-ORDER'
    },
    {
        id: '3',
        name: 'JOHN DEERE',
        image: '/assets/images/browse3.png',
        loader: '1023+LOADER',
        price: '$26,800',
        time: '27', date: '2021', km: '67',
        stock: 'AVAILABLE NOW'
    },
    {
        id: '4',
        name: 'JOHN DEERE',
        image: '/assets/images/browse4.png',
        loader: '1023+LOADER',
        price: '$26,800',
        time: '27', date: '2021', km: '34',
        stock: 'AVAILABLE NOW'
    },
    {
        id: '2',
        name: 'JOHN DEERE',
        image: 'assets/images/browse-img.png',
        loader: '1023+LOADER',
        price: '$26,800',
        time: '27', date: '2021', km: '27',
        stock: 'AVAILABLE NOW'
    },
    {
        id: '6',
        name: 'JOHN DEERE',
        image: '/assets/images/browse1.png',
        loader: '1023+LOADER',
        price: '$26,800',
        time: '27', date: '2021', km: '17', stock: 'PRE-ORDER'
    },
    {
        id: '7',
        name: 'JOHN DEERE',
        image: '/assets/images/browse3.png',
        loader: '1023+LOADER',
        price: '$26,800',
        time: '27', date: '2021', km: '67',
        stock: 'AVAILABLE NOW'
    },
    {
        id: '8',
        name: 'JOHN DEERE',
        image: '/assets/images/browse4.png',
        loader: '1023+LOADER',
        price: '$26,800',
        time: '27', date: '2021', km: '34',
        stock: 'AVAILABLE NOW'
    }
]

const Browse = () => {
    const silder:any = useRef(null);
    const [count,setCount]=useState<number>(4)
    
    let settings = {
        dots: false,
        
        speed: 500,
        
        slidesToShow:count,
        slidesToScroll: 1,
        initialSlide: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <Box sx={{ my: 10 }}>
            <Container>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: { xs: 'column', md: 'row' } }}>
                    <Typography variant='h4'>Browse <Box component='span' sx={{ fontSize: '24px' }}>[23]</Box></Typography>
                    <Box><BrowseTabs  setCount={setCount}/></Box>
                    <Box>
                        <PrimaryBtn text={'View all'} />
                        <Box sx={Styles.prev} component='span'   onClick={() => silder?.current?.slickPrev()}> <ArrowBackIcon sx={{
                            fontSize: '16px', '&:hover': {
                                color: '#fff'
                            }
                        }} /></Box>
                        <Box  onClick={() => silder?.current?.slickNext()} sx={Styles.prev} component='span'> <ArrowForwardIcon sx={{
                            fontSize: '16px', '&:hover': {
                                color: '#fff'
                            }
                        }} /></Box>

                    </Box>
                </Box>
                <Box sx={{mt:'15px'}}>
                <Slider ref={silder} {...settings}>
                    {
                        browse.map(element =>
                            <Card key={element.id} sx={{ maxWidth: {xs:'383px',md:'270px'},background: '#FFFFFF',boxShadow: '0px 26px 35px rgba(0, 0, 0, 0.0680999)' ,borderRadius:'0px',mr:12}}>
                                <CardMedia
                                    component="img"

                                    image={element.image}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'Bebas Neue', fontSize: '13px' }}>
                                        {element.name}
                                    </Typography>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Typography variant='h5'>{element.loader}</Typography>
                                        <Typography variant='h5'>{element.price}</Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', mt: 1 }}>
                                        <Typography sx={{ fontSize: '11px', fontWeight: '500' }}>Year:{element.date}</Typography>
                                        <Typography sx={{ fontSize: '11px', fontWeight: '500', ml: 4 }}>Hours:{element.time}</Typography>
                                    </Box>
                                    <Typography sx={{ fontSize: '11px', fontWeight: '700', mt: 2 }}>Location goes here</Typography>
                                </CardContent>
                                <Box sx={{background:'#091C30',display:'flex',justifyContent:'space-between',py:'5px',px:'10px'}}>
                                    <Typography sx={{color:'info.main',fontSize:'12px'}}>307.638.8669</Typography>
                                    <Typography sx={{display:'flex',alignItems:'center',color:'info.main',fontSize:'12px'}}><NearMeIcon/>{element.km}KM</Typography>
                                </Box>
                            </Card>
                        )
                    }
                    </Slider>
                </Box>
            </Container>
        </Box>
    )
}

export default Browse