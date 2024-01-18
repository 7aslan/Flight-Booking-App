
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();

  const handleContactClick = () => {
    router.push('/#contact');
  }

  const handleLogoClick = () => {
    router.push('/')
  }

  return (
    <AppBar position="static" style={{ backgroundColor: '#16358f' }}>
      <Toolbar>
        <Typography variant="h4" style={{ flexGrow: 1, color: '#FFFFFF' }} onClick={handleLogoClick}>
          Aslan Booking
        </Typography>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Button variant='h5' color="inherit" onClick={() => router.push('/login')}>Log In</Button>
          <Button color='inherit' onClick={handleContactClick}>Contact</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
