import React from 'react';
import { AppBar, Toolbar, Typography,Button } from '@mui/material';


  
  function Navbar() {
      
  return (
    <div>
    <AppBar>
      <Toolbar>
        <Typography variant="h5" style={{flexGrow:1}}>Material Ui</Typography>
        <Button color="inherit" >Home</Button>
        <Button color="inherit" >Help</Button>
        <Button color="inherit" >Edit</Button>
        <Button color="inherit">Menu</Button>
      </Toolbar>
    </AppBar>
    
    </div>
  );
}

export default Navbar;
