import * as React from 'react';
import Link from '@mui/material/Link';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

function Footer(props) {

  return (
    <React.Fragment>
    <AppBar position="static" component={"nav"} 
      color='primary'
      sx={{ 
        minHeight: '150px', position: '', bottom: 0, marginTop: "0px"
      }}>
       <Container  
       sx={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: '5px', paddingTop: '5px', width: '100%', marginBottom: '5px'
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
              <Grid item xs={12} sm={12} md={12}>
              <Typography sx={{ color: '#fff', alignContent: 'center', justifyContent: 'center', display: 'flex' }}>word word word word word word word word word word</Typography>
              </Grid>
            </Grid>
            <Grid container item spacing={1}>
              <Grid item xs={4} sm={12} md={4}>
              <Typography sx={{ color: '#fff', alignContent: 'center', justifyContent: 'center', display: 'flex' }}>Phone</Typography>
              </Grid>
              <Grid item xs={4} sm={12} md={4}>
              <Typography sx={{ color: '#fff', alignContent: 'center', justifyContent: 'center', display: 'flex' }}>FACEBOOK</Typography>
              </Grid>
              <Grid item xs={4} sm={12} md={4}>
              <Typography sx={{ color: '#fff', alignContent: 'center', justifyContent: 'center', display: 'flex' }}>SOCIAL</Typography>
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