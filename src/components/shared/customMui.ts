import { createTheme } from "@mui/material";
import React from "react";



export const theme = createTheme({
    palette:{
        
        primary:{
            main:'#FFFFFF',
            light:'#CECECE'
        },
        secondary:{
            main:'#111111'
        },
        warning:{
            main:'#091C30'
        }
        ,
        info:{
            main:'#F5C801'
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
        },
        h6:{
            fontSize:'20px'
        }
    }
})

export default function ToggleColorMode(){
    const [mode, setMode] = React.useState<'light' | 'dark'>('light');
    const colorMode = React.useMemo(
      () => ({
        toggleColorMode: () => {
          setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        },
      }),
      [],
    );

    
}