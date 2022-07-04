import { createTheme, ThemeProvider } from "@mui/material";
import { ReactNode, useMemo, useState } from "react";
import { createContext } from "vm";

export type PaletteMode = 'light' | 'dark';
export const ColorModeContext = createContext({
    toggleMode:()=>{},
    mode:"light"
})
export const ColorContextProvider=({children}: {children:ReactNode} )=>{
    const [mode ,setMode]=useState("dark");
    const colorMode = useMemo(()=>{
        toggleMode : ()=>setMode(prevMode =>prevMode === "light"?"dark":"light")
        mode
    },[mode])
    const theme = createTheme({
        palette:{
            mode: mode as PaletteMode,
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
    return(
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                    {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}