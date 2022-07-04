import { createTheme, ThemeProvider } from '@mui/material';
import React from 'react'

export const ColorModeContext = React.createContext({ toggleColorMode: () => { } });
const ToggleColorMode = ( {children}:any) => {
    const [mode, setMode] = React.useState<'light' | 'dark'>('dark');
    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
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
            }),
        [mode],
    );
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}

export default ToggleColorMode