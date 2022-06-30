import { Box, Typography } from '@mui/material'
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
    let settings = {
        dots: true,
        
        speed: 500,
        
        slidesToShow:1,
        slidesToScroll: 1,
        initialSlide: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
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
        <Box sx={{my:{xs:4,md:2}}}>
            <Box>
            <Slider  {...settings}>
                <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',mx:'auto'}}>
                    <Typography color='info.main' variant='h5' sx={{textAlign:'center'}}>OUR CUSTOMERS</Typography>
                    <Typography variant='h4' sx={{maxWidth:'901px',fontSize:'52px',textAlign:'center',my:5,m:' auto'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet, neque in congue mattis.</Typography>
                    <Typography sx={{textAlign:'center',my:'10px'}}>Name goes here</Typography>
                </Box>
                <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                    <Typography color='info.main' variant='h5' sx={{textAlign:'center'}}>OUR CUSTOMERS</Typography>
                    <Typography variant='h4' sx={{maxWidth:'901px',fontSize:'52px',textAlign:'center',my:5,m:' auto'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet, neque in congue mattis.</Typography>
                    <Typography sx={{textAlign:'center',my:'10px'}}>Name goes here</Typography>
                </Box>
                <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                    <Typography color='info.main' variant='h5' sx={{textAlign:'center'}}>OUR CUSTOMERS</Typography>
                    <Typography variant='h4' sx={{maxWidth:'901px',fontSize:'52px',textAlign:'center',my:5,m:' auto'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet, neque in congue mattis.</Typography>
                    <Typography sx={{textAlign:'center',my:'10px'}}>Name goes here</Typography>
                </Box>
                </Slider>
            </Box>
        </Box>
    )
}

export default Testimonials