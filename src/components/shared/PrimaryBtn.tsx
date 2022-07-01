import { Button } from '@mui/material'
import React from 'react'
interface Btn {
    text: string
}
const Styles = {
    btn: {
        position: 'relative',
        fontSize: '18px',
        background: 'transparent',
        color:'secondary.main',
        fontFamily: "Bebas Neue",
        fontWeight: '700',
        padding: {xs:'8px 25px',md:'10px 35px',},
        zIndex: 10,
        border: '1px solid #091C30',
        borderRadius: '50px',
        cursor: 'pointer',
        '&:hover': {
            border: '1px solid transparent',
            transition: 'all 0.3s ease-in',
            color:'primary.main'
        },
        '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            zIndex: -10,
            borderRadius: '50px',
            transform: 'scaleX(0)',
            // transformOrigin: 'left',
            transition: 'transform 0.5s ease-in-out',
            background: "#091C30",
        },
        '&:hover::before':{
            transform: 'scaleX(1)'
        }
    }
}
const PrimaryBtn = ({ text }: Btn) => {
  return (
    <Button sx={Styles.btn}>{text}</Button>
  )
}

export default PrimaryBtn