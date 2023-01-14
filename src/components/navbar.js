import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import  {Stack } from '@mui/material';
import Button from '@mui/material/Button';
const style={
"&:hover":{
  textDecoration: 'underline',
  fontSize:'1.6rem',
}
}
function navbar() {
  return (
    <div >
       <AppBar position="static">
        <Stack sx={{ display: 'flex', flexDirection:'row',justifyContent: 'space-around',bgcolor:'#020202',paddingY:'1.2rem' }}>
        <Button color='inherit' sx={style}>Home</Button>
        <Button color='inherit' sx={style}>About</Button>
        <Button color='inherit' sx={{ fontSize: '1.5rem'}}>NUTRIO</Button>
        <Button color='inherit' sx={style}>Credits</Button>
        <Button color='inherit' sx={style}>Results</Button>
        </Stack>
      </AppBar>
    </div>
  )
}


export default navbar;