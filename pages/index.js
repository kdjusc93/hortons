import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '../src/Link';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';


export default function Index() {
  return (
    <React.Fragment>
    <Container maxWidth={false} sx={{minHeight: '300px', width: '100%', margin: '0px', backgroundColor: 'white'}} disableGutters>
      <Box sx={{backgroundImage: 'url(/tools.jpg)',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover', height: '300px', width: '100%', paddingLeft: '0px', margin: '0px', position: 'relative'}}>
    <Box maxWidth="lg"  sx={{backgroundColor:  'rgba(255, 255, 255, .7)' , marginLeft: '5%', marginRight: '5%', marginTop: '30px', position: 'absolute', height: '200px', minWidth: 'xs', padding: '10px'}}>
    <Typography variant="h4" component="h1" gutterBottom>
         Get your free estimate now!
        </Typography>
        <Button variant="contained" component={Link} noLinkStyle href="/contact">
          contact us!
        </Button>
    </Box>
        
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
