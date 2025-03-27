//Vi hara skapat en komponent för en footer som visas på varje sida och den läggs in i App.jsx
//En simpel komponent som har kontaktuppgifter och socialamedier information. 
//Vi har använt oss av material UI men inte någon specifik komponent på deras hemsida. 

import React from 'react';
import { Box, Container, Typography, Link, Stack } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import ikon from '../assets/loggotyp.png';


const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#e3f2fd', color: 'black', py: 4 , mt: '1rem'}}>
      <Container maxWidth="lg">
        <Stack direction={{ xs: 'column', md: 'row'}} justifyContent={"space-between"} spacing={1}>
          <Box>
            <Typography variant="subtitle1" gutterBottom>Kontakt</Typography>
            <Typography variant="body2">Email: Namn@mittforetag.com</Typography>
            <Typography variant="body2">Telefon: 070-123 45 67</Typography>
          </Box>
          <Box>
            <Typography variant="subtitle1" gutterBottom>Följ oss</Typography>
            <Link href="https://www.instagram.com/ollebogardhdg/" color="inherit" underline="hover"><InstagramIcon fontSize="small" /></Link>
            <Link href="#" color="inherit" underline="hover" style={{padding:"1rem"}}><FacebookIcon fontSize="small" /></Link>
          </Box>
          <Box
            component="img"
            src={ikon}
            alt='Logga'
            textAlign='center'
            sx={{height: 100, width: 100, ml: 'auto', borderRadius: 5}} 
          />
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;