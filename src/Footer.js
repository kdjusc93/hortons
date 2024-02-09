import * as React from 'react';
import Link from '@mui/material/Link';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';

import { Typography } from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

function Footer(props) {
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <React.Fragment>
    <AppBar position="static" component={"nav"} 
      color='primary'
      sx={{ 
        minHeight: '150px', position: '', bottom: 0, marginTop: "0px"
      }}>
       <Container  
       sx={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: '0px', paddingTop: '20px', width: '100%', marginBottom: '0px'
        }}>
       <Box 
       sx={{ 
        flexGrow: 1, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'
         }}>
          <Grid container item spacing={1} sx={{m:2}} columns={12}>
            <Grid container item spacing={1}>
              <Grid item xs={12} sm={12} md={3}>
              <Button key="about" sx={{ color: '#fff', alignContent: 'center', justifyContent: 'center', display: 'flex' }}
                  component={Link} href="/">
                      HOME
                  </Button>
              </Grid>
              <Grid item xs={12} sm={12} md={3}>
              <Button key="about" sx={{ color: '#fff', alignContent: 'center', justifyContent: 'center', display: 'flex' }}
                  component={Link} href="/about">
                      ABOUT
                  </Button>
              </Grid>
              <Grid item xs={12} sm={12} md={3}>
              <Button key="about2" sx={{ color: '#fff', alignContent: 'center', justifyContent: 'center', display: 'flex' }}
                    component={Link} href="/services">
                        SERVICES
                    </Button>
              </Grid>
              <Grid item xs={12} sm={12} md={3}>
              <Button key="about3" sx={{ color: '#fff', alignContent: 'center', justifyContent: 'center', display: 'flex' }}
                    component={Link} href="/contact">
                        CONTACT
                    </Button>
              </Grid>
            </Grid>
        
            
          
            <Grid container item spacing={1}>
              <Grid item xs={6}>
              <Typography sx={{ color: '#fff', alignContent: 'center', justifyContent: 'center', display: 'flex' }}>
                <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
            >
              <a style={{ textDecoration: 'none', color: 'white' }} href="tel:+4733378901"><LocalPhoneIcon/></a>
                
            </IconButton>
                </Typography>
              </Grid>
              <Grid item xs={6}>
              <Typography sx={{ color: '#fff', alignContent: 'center', justifyContent: 'center', display: 'flex' }}>
              <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
            >
              <a style={{ textDecoration: 'none', color: 'white' }} href="mailto:nrhorton432@gmail.com"><MailOutlineIcon/></a>
               
            </IconButton>
                </Typography>
              </Grid>
            </Grid>
            <Grid container item spacing={1}>
              <Grid item xs={12} sm={12} md={12}>
              <Typography sx={{ color: '#fff', alignContent: 'center', justifyContent: 'center', display: 'flex' }}>&copy; Copyright 2024 Horton’s Honey-Do and Handyman Service LLC</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        </Container>
      </AppBar>
      </React.Fragment>
  );
}
export default Footer;