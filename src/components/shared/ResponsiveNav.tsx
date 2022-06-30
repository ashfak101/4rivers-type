import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Styles = {
    navLink: {
        color: 'primary.main',
        cursor: 'pointer',
        fontFamily: 'Bebas Neue',
        my: 4
        , "&:hover": {
            color: 'info.main'
        }
    }
}
const ResponsiveNav = () => {
    return (
        <Box sx={{ width: 250, background: '#111111', height: '100vh' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
                <Link href='/'><Typography sx={Styles.navLink}>RESEARCH</Typography></Link>
                <Link href='/'><Typography sx={Styles.navLink}>SHOP </Typography></Link>
                <Link href='/'><Typography sx={Styles.navLink}>Supporting </Typography></Link>
                <Link href='/'><Typography sx={Styles.navLink}>SERVICES </Typography></Link>
                <Link href='/'><Typography sx={Styles.navLink}>LOCATIONS </Typography></Link>
                <Link href='/'><Typography sx={Styles.navLink}>COMPANY</Typography></Link>
            </Box>
            <Box sx={{}}>
                <Typography sx={{ fontSize: '12px', fontWeight: '500', fontFamily: 'Heebo', pr: 3, color: '#fff', textAlign: 'center' }}>Call 307.638.8669 or email us</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                    <Typography sx={{ mx: 2 }}> <Image src='/assets/images/navIcon/profile.svg' alt='' width='22px' height='21px' /> </Typography>
                    <Typography> <Image src='/assets/images/navIcon/Shape.svg' alt='' width='22px' height='21px' /> </Typography>
                    <Typography sx={{ mx: 2 }}> <Image src='/assets/images/navIcon/Shape.png' alt='' width='22px' height='21px' /> </Typography>

                </Box>
            </Box>
        </Box>
    )
}

export default ResponsiveNav