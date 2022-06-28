import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Styles = {
    navlink: {
        fontSize: '18px',
        fontFamily: 'Bebas Neue',
        color: '#fff',
        margin: '0 20px',
        '&:hover': {
            color: '#333'
        }
    }
}
const Navbar = () => {
    return (
        <>
            <AppBar position='static' sx={{ background: 'transparent', boxShadow: 'none' }}>
                <Toolbar disableGutters>
                    <Image width='217.95px' height='66px' src='/assets/images/logo.png' alt='logo' />
                    <Box>

                    </Box>
                    <Box sx={{ flexGrow: '1', justifyContent: 'center' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Link href='/'><Typography sx={Styles.navlink}>RESEARCH</Typography></Link>
                            <Link href='/'><Typography sx={Styles.navlink}>SHOP </Typography></Link>
                            <Link href='/'><Typography sx={Styles.navlink}>Supporting </Typography></Link>
                            <Link href='/'><Typography sx={Styles.navlink}>SERVICES </Typography></Link>
                            <Link href='/'><Typography sx={Styles.navlink}>LOCATIONS </Typography></Link>
                            <Link href='/'><Typography sx={Styles.navlink}>COMPANY</Typography></Link>
                        </Box>
                    </Box>
                    <Box sx={{ flexGrow: '0', display: { xs: "none", md: "flex" } }}>
                        <Typography>Call 307.638.8669 or email us</Typography>
                        <Box sx={{ display: 'flex' }}>
                            <Typography>Hello</Typography>
                            <Typography>Hello</Typography>
                            <Typography>Hello</Typography>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar