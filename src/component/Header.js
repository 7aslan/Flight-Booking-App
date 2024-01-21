import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();

  const handleContactClick = () => {
    if (window.contactRef) {
      window.scrollTo({
        top: window.contactRef.offsetTop,
        behavior: 'smooth',
      });
    }
  }

  const handleLogoClick = () => {
    router.push('/');
  }

  return (
    <AppBar position="static" sx={{ backgroundColor: '#16358f', height: '70px' }}>
      <Toolbar sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="h4" sx={{ flexGrow: 1, color: '#FFFFFF', cursor: 'pointer' }} onClick={handleLogoClick}>
          Amadeus Booking
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
