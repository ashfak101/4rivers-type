import { Box, Tab, Tabs } from '@mui/material'
import React from 'react'

const BrowseTabs = ({setCount}:any) => {
    const [value, setValue] = React.useState('one');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    return (
        <Box sx={{ width: '100%',mb:'10px' }}>
            <Tabs
                value={value}
                variant="scrollable"
                scrollButtons="auto"
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                sx={{'& .MuiTab-root':{
                    fontSize:'18px',
                    fontFamily:'Bebas Neue',
                    p:0,
                    mx:1,
                    flexWrap:'wrap'
                    // flexDirection:{xs:'column'}
                }}}
                aria-label="scrollable auto tabs example"
            >
                <Tab value="one" label="TRACTORS" onClick={()=>setCount(4)}/>
                <Tab value="two" label="HOME AND RANCH"  onClick={()=>setCount(3)}/>
                <Tab value="three" label="FARM & AGRICULTURE "  onClick={()=>setCount(4)}/>
                <Tab value="four" label="GENERAL CONSTRUCTION"  onClick={()=>setCount(3)}/>
                
            </Tabs>
        </Box>
    )
}

export default BrowseTabs