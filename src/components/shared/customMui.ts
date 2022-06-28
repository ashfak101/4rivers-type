import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette:{
        primary:{
            main:'#F5C801'
        },
        secondary:{
            main:'#111111'
        },
        warning:{
            main:'#091C30'
        }
        ,
        info:{
            main:'#84D0F4'
        }
        ,  
    },
    typography:{
        h3:{
            fontSize:'60px'
        },
        h4:{
            fontSize:'44px'
        },
        h5:{
            fontSize:'24px' 
        }
    }
})