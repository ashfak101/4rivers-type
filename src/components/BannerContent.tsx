import { Box, Typography } from "@mui/material"
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from "react";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            maxWidth: 250,
        },
    },
};
const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];
function getStyles(name: string, personName: readonly string[], theme: Theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}
const BannerContent = () => {
    const theme = useTheme();
    const [personName, setPersonName] = useState<string[]>([]);

    const handleChange = (event: SelectChangeEvent<typeof personName>) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    return (
        <Box sx={{position:'absolute',left:'50%',top:{xs:'40%',md:'40%',lg:'40%'},transform:'translate(-50%,-50%)',textAlign:'center'}}>
            <Typography variant="h3" color='primary' sx={{fontSize:{xs:'34px',md:'60px'}}} >YOUR JOHN DEERE DEALER</Typography>
            <Typography color='primary' sx={{fontSize:'18px',fontFamily:"Bebas Neue",my:2}}>NEW & USED EQUIPMENT. PARTS. SERVICE. TECHNOLOGY.</Typography>
            <FormControl sx={{ m: 1, maxWidth: 300, mt: 3, }} color='primary'>
                <Select
                    
                    displayEmpty
                    value={personName}
                    sx={{'& .MuiSelect-select':{width:'100%',cursor:'pointer',},width:{xs:'250px',md:'300px'},fontStyle:'none',border:'1px solid #fff',borderRadius:'4px',color:'#fff','& .MuiSvgIcon-root':{color:'#fff'} ,'&:hover':{background:'#091C30'}}}
                    onChange={handleChange}
                    input={<OutlinedInput />}
                    renderValue={(selected) => {
                        if (selected.length === 0) {
                            return <em style={{fontStyle: 'normal'}}>Select industry type</em>;
                        }

                        return selected.join(', ');
                    }}
                    MenuProps={MenuProps}
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem disabled value="" color='primary'>
                        <em>Select industry type</em>
                    </MenuItem>
                    {names.map((name) => (
                        <MenuItem
                            key={name}
                            value={name}
                            style={getStyles(name, personName, theme)}
                        >
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    )
}

export default BannerContent