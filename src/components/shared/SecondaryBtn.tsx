import { Button } from '@mui/material'
import React from 'react'

interface Btn {
    text: string
}
const Styles = {
    btn: {
    fontSize: '18px',
    background: 'transparent',
    color: 'primary.main',
    fontFamily: "Bebas Neue",
    fontWeight: '700',
    padding: '10px 35px',
    zIndex: 1,
    border: '1px solid #fff',
    borderRadius: '50px',
    cursor: 'pointer'
    }
}
const SecondaryBtn = ({ text }: Btn) => {
    return (
        <Button sx={Styles.btn}>{text}</Button>
    )
}

export default SecondaryBtn