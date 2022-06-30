import { Box, Button, Container, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import PrimaryBtn from './shared/PrimaryBtn'

const Latest = () => {
  const category=[
    {
      id:'1',image:'/assets/images/latest-2.png',title:'ARTICLE TITLE GOES HERE'
    },
    {
      id:'2',image:'/assets/images/latest-img-2.png',title:'ARTICLE TITLE GOES HERE'
    },
    {
      id:'3',image:'/assets/images/latest-2.png',title:'ARTICLE TITLE GOES HERE'
    },
    {
      id:'4',image:'/assets/images/latest-img-2.png',title:'ARTICLE TITLE GOES HERE'
    },
  ]
  return (
    <Box sx={{ background: '#F2F2F2', py: '10px' }}>
      <Container>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', mt: '100px', flexDirection: { xs: 'column', md: 'row' } }}>
          <Box>

            <Typography variant='h4' sx={{ maxWidth: '476px' }}>LATEST FROM 4RIVERS</Typography>
          </Box>
          <Box sx={{ alignContent: 'flex-end' }}>
            <PrimaryBtn text='VIEW ALL' />
          </Box>
        </Box>
        <Box sx={{my:2}}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={7}>
              <Box sx={{position:'relative'}}>
                <Image width='687.17px'
                  height='458px'layout="responsive"  src='/assets/images/latest.png' alt='' />
                  <Typography sx={{fontFamily:'Bebas Neue',fontSize:'15px',lineHeight:'36px'}}>MAR 11TH 2022</Typography>
                  <Typography sx={{fontFamily:'Bebas Neue',fontSize:'36px',lineHeight:'36px',my:'10px'}}>Colorado Eagles Hockey | Agriculture Night</Typography>
                  <Typography sx={{fontFamily:'Heebo',fontSize:'15px',lineHeight:'20px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rhoncus, nisi ultricies malesuada ultricies,</Typography>
                  <Box sx={{position:'absolute',top:'20px' ,left:'20px'}}><Button sx={{background:'#091C30',borderRadius:'0',px:'20px',mb:'10px',fontSize:'14px','&:hover':{
                          background:'#F5C801'
                         }}}>Category</Button></Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={5}>
              {
                category.map(element=>(
                  <Box key={element.id} >
                    <Box sx={{display:'flex',mb:'20px'}}>
                      <Image width='139.24px' height='92.06px' src={element.image} alt=''/>
                      <Box sx={{ml:'20px'}}>
                         <Button sx={{background:'#091C30',borderRadius:'0',px:'20px',mb:'10px',fontSize:'14px','&:hover':{
                          background:'#F5C801'
                         }}}>Category</Button>
                         <Typography variant='h6'>{element.title}</Typography>
                      </Box>
                    </Box>
                  </Box>
                ))
              }
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

export default Latest