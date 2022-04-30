import styled from '@emotion/styled';
import {  Box, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';

const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#5CB85F',
    borderColor: '#5CB85F',
    fontFamily: [
      'Roboto',
    ].join(','),
    '&:hover': {
      backgroundColor: '#86b75b',
      borderColor: '#86b75b',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#5CB85F',
      borderColor: '#5CB85F',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  });

function Header() {
  alert('Mas Andika, ini saya menggunakan data API yang berbeda, soalnya data API dari binar sudah tidak bisa digunakan')
  return (
    <nav>
        <Box>
            <Box position='relative' sx={{backgroundColor:'#F1F3FF', boxShadow:0}}>
                <Toolbar sx={{padding:0}}>
                <Box sx={{flexGrow:2, mr: '45vw'}}>
                    <img src="../images/logo.svg" alt="" srcset="" />
                </Box>
                <Box sx={{display:'flex', color:'black'}}>
                    <Typography sx={{mr:2}}>Our Services</Typography>
                    <Typography sx={{mr:2}}>Why Us</Typography>
                    <Typography sx={{mr:2}}>Testimonial</Typography>
                    <Typography sx={{mr:2}}>FAQ</Typography>
                </Box>
                <BootstrapButton variant="contained" sx={{mr:8}}>Register</BootstrapButton>
                </Toolbar>
            </Box>
        </Box>
    </nav>
  )
}

export default Header