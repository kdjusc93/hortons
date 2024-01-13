import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '../src/Link';
import Paper from '@mui/material/Paper';

export default function Index() {
  return (
    <Container maxWidth={false} sx={{minHeight: '800px', width: '100%', margin: '0px', backgroundColor: 'rgba(87,214,185,255)'}} disableGutters>
      <Box sx={{backgroundImage: 'url(/tools.jpg)',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover', height: '300px', width: '100%', paddingLeft: '0px', margin: '0px', position: 'relative'}}>
    <Box maxWidth="lg"  sx={{backgroundColor:  'rgba(255, 255, 255, .7)' , marginLeft: '5%', marginRight: '5%', marginTop: '30px', position: 'absolute', height: '200px', minWidth: 'xs'}}>
    <Typography variant="h4" component="h1" gutterBottom sx={{padding:'10px', fontWeight: '400'}}>
          Text Here
        </Typography>
        <Typography variant="h5" component="div" gutterBottom sx={{padding:'10px'}}>
          maybe a button for an action here
        </Typography>
    </Box>
        
      </Box>
      <Box key="box2" maxWidth="lg" sx={{ minHeight: '200px', marginLeft: '5%', marginRight: '5%', marginTop: '30px', display: 'flex' }} gutterBottom flexWrap={true}>
        <Paper elevation={10} square={false} sx={{minHeight: '200px', backgroundColor: 'lightgray', padding: '10px'}}>
        <Typography variant="h4" component="h1">
        that secondary color from the logo might not be the best background color for the website haha
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        </Paper>
      </Box>
      <Box key="box3" maxWidth="md" sx={{ minHeight: '200px', marginLeft: '5%', marginRight: '5%', marginTop: '30px', display: 'flex', padding: '5px' }} gutterBottom flexWrap={true}>
        <Paper elevation={10} square={false} sx={{minHeight: '200px', backgroundColor: 'lightgray'}}>
        <Typography variant="h4" component="h1">
          text text text text text text text
          <Link href="/about" color="secondary" gutterBottom>
          Go to the about page
        </Link>
        </Typography>
        
        </Paper>
      </Box>
      <Box key="box4" sx={{ minHeight: '200px', marginLeft: '5%', marginRight: '5%', marginTop: '30px', left:'50%', right:'50%', display: 'flex', justifyContent: 'center' }} gutterBottom>
        <Paper elevation={10} square={false} sx={{minHeight: '200px', backgroundColor: 'lightgray'}}>
        <Typography variant="h4" component="h1">
        text text text text text text text
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        </Paper>
      </Box>
      
      <br/>
    </Container>
  );
}
