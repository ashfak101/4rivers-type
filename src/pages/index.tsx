import { Box, Typography } from '@mui/material'
import AboutUs from 'components/AboutUs'
import Banner from 'components/Banner'
import Browse from 'components/Browse'
import Careers from 'components/Careers'
import DealerNetwork from 'components/DealerNetwork'
import Process from 'components/Process'
import Research from 'components/Research'
import SupportingServices from 'components/SupportingServices'
import Testimonials from 'components/Testimonials'
import TractorBuying from 'components/TractorBuying'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Typography sx={{textAlign:'center',color:'#333',fontSize:'12px',background:'#84D0F4',fontWeight:'700',py:1}}>A trusted seller  |  Equipment in stock and ready to work  <Box component='span' sx={{textDecoration:'underline'}}>View all</Box></Typography>
      <Banner/>
      <DealerNetwork/>
      <Browse/>
      <TractorBuying/>
      <Process/>
      <Research/>
      <SupportingServices/>
      <AboutUs/>
      <Testimonials/>
      <Careers/>
     
    </div>
  )
}

export default Home
