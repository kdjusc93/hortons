import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '../src/Link';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { Card, CardContent, CardActions } from '@mui/material';
import { ContactPage, Handyman } from '@mui/icons-material';


export default function Index() {
  return (
    <React.Fragment>
    <Container 
      maxWidth={false} 
      sx={{
        minHeight: '300px', 
        width: '100%', 
        margin: '0px', 
        backgroundColor: 'white'
      }} 
      disableGutters
    >
      <Box 
        sx={{
          backgroundImage: 'url(/stylish_home2.png)',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover', 
          height: '500px', 
          width: '100%', 
          paddingLeft: '0px', 
          margin: '0px', 
          position: 'relative',
        }}
      >
      <Card 
        sx={{
          backgroundColor: 'rgba(255, 255, 255, .7)', 
          marginLeft: '5%', 
          marginRight: '5%', 
          marginTop: '100px', 
          position: 'absolute', 
          // height: '200px', 
          minWidth: 'xs',
          maxWidth: 'sm', 
          padding: '10px'
        }}>
        <CardContent>
          <Typography 
            gutterBottom 
            variant="h3" 
            component="div"
            fontWeight='bold'
          >
            Get Your Free Estimate!
          </Typography>
          <Typography variant="h6" color="text.secondary">
          In and around the home we've got you covered! 
          Check out our services or contact us below to get your next project started!
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" component={Link} href="/services" startIcon={<Handyman />}>
            Services
          </Button>
          <Button variant="contained" component={Link} href="/contact" startIcon={<ContactPage />}>
            Contact Us
          </Button>
        </CardActions>
      </Card>  
    </Box>
      <br/>
    </Container>
    <Container maxWidth="md" sx={{minHeight: '600px'}}>
    <Box 
      sx={{
        textAlign: 'center',
        backgroundColor: 'lightgray', 
        my: 8, 
        borderRadius: 2, 
        padding: '1%',
        border: '4px solid',
        borderColor: '#358f7a'
      }}
    >
      <Typography 
        variant="h3" 
        component="h1" 
        gutterBottom
        sx={{
          pt: 2,
          pb: 4
        }}
      >
        Section
      </Typography>
    </Box>
    <Box 
      sx={{
        textAlign: 'center',
        backgroundColor: 'lightgray', 
        my: 8, 
        borderRadius: 2, 
        padding: '1%',
        border: '4px solid',
        borderColor: '#358f7a'
      }}
    >
      <Typography 
        variant="h3" 
        component="h1" 
        gutterBottom
        sx={{
          pt: 2,
          pb: 4
        }}
      >
        Section
      </Typography>
    </Box>
  </Container>
  </React.Fragment>
  );
}
