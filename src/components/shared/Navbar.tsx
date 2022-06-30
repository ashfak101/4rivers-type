import { AppBar, Box, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import ResponsiveNav from './ResponsiveNav'
import SegmentRoundedIcon from "@mui/icons-material/SegmentRounded";

const Styles = {
    navlink: {
        fontSize: '18px',
        fontFamily: 'Bebas Neue',
        color: '#fff',
        cursor:'pointer',
        margin: '0 20px',
        '&:hover': {
            color: 'info.main'
        }
    }
}
const Navbar = () => {
    const [state, setState] = useState(false);
    return (
        <>
            <AppBar position='static' sx={{ background: 'transparent', boxShadow: 'none' ,pt:'27px'}}>
                <Toolbar >
                    <Image width='217.95px' height='66px' src='/assets/images/logo.png' alt='logo' />
                    <Box>

                    </Box>
                    <Box sx={{ flexGrow: '1', justifyContent: 'center' }}>
                        <Box sx={{ display: {xs:'none',md:'no',lg:'flex'}, justifyContent: 'center' }}>
                            <Link href='/'><Typography sx={Styles.navlink}>RESEARCH</Typography></Link>
                            <Link href='/'><Typography sx={Styles.navlink}>SHOP </Typography></Link>
                            <Link href='/'><Typography sx={Styles.navlink}>Supporting </Typography></Link>
                            <Link href='/'><Typography sx={Styles.navlink}>SERVICES </Typography></Link>
                            <Link href='/'><Typography sx={Styles.navlink}>LOCATIONS </Typography></Link>
                            <Link href='/'><Typography sx={Styles.navlink}>COMPANY</Typography></Link>
                        </Box>
                    </Box>
                    <Box sx={{ flexGrow: '0', display: { xs: "none", md: "flex" },alignItems:'center' }}>
                        <Typography sx={{color:'#fff',fontSize:'12px',fontWeight:'500',fontFamily:'Heebo',pr:3,borderRight:'1px solid #fff'}}>Call 307.638.8669 or email us</Typography>
                        <Box sx={{ display: 'flex' }}>
                            <Typography sx={{mx:2}}> <Image src='/assets/images/navIcon/profile.svg' alt='' width='22px' height='21px'/> </Typography>
                            <Typography> <Image src='/assets/images/navIcon/Shape.svg' alt='' width='22px' height='21px'/> </Typography>
                            <Typography  sx={{mx:2}}> <Image src='/assets/images/navIcon/Shape.png' alt='' width='22px' height='21px'/> </Typography>
                          
                        </Box>
                    </Box>
                    <Box
              sx={{
                marginLeft: "auto",
                display: { xs: "flex", md: "block",lg:'none' },
              }}
            >
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="primary"
                sx={{ color: "primary" }}
                onClick={() => setState(true)}
              >
                <SegmentRoundedIcon style={{ fontSize: "2rem" }} />
              </IconButton>
            </Box>
                </Toolbar>
            </AppBar>
            <Drawer open={state} onClose={()=>setState(false)}>
                <ResponsiveNav/>
            </Drawer>
        </>
    )
}

export default Navbar