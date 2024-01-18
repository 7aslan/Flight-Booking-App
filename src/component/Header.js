import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';




const Header = () => {
const router = useRouter();

const handleContactClick = () =>{
  router.push('/#contact');

}

  return (
    <AppBar position="static" style={{ backgroundColor: '#4CAF50' }}>
        <Toolbar>
          <Typography variant="h4" style={{ flexGrow: 1, color: '#FFFFFF' }}>
            Aslan Booking
          </Typography>
          <Button variant='h5' color="inherit" onClick={()=> router.push('/login')}>Log In</Button>
          <Button color='inherit' onClick={handleContactClick} >Contact</Button>
        </Toolbar>
    </AppBar>
  );
};

export default Header;