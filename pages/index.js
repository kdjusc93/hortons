import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '../src/Link';

export default function Index() {
  return (
    <Container maxWidth={false} sx={{minHeight: '800px', width: '100%', margin: '0px'}} disableGutters>
      <Box sx={{backgroundImage: 'url(/tools.jpg)',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover', height: '300px', width: '100%', paddingLeft: '0px', margin: '0px', position: 'relative'}}>
    <Box maxWidth="lg"  sx={{backgroundColor: 'gray', marginLeft: '5%', marginRight: '5%', marginTop: '30px', position: 'absolute', height: '200px', minWidth: 'xs'}}>
    <Typography variant="h4" component="h1" gutterBottom sx={{padding:'10px'}}>
          Text Here
        </Typography>
    </Box>
        
      </Box>
      <Box key="box2" sx={{backgroundColor: 'lightgray', height: '200px', marginLeft: '5%', marginRight: '5%', marginTop: '30px' }}>
        <Typography variant="h4" component="h1">
          Material UI - Next.js example
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
      </Box>
      <Box key="box2" sx={{backgroundColor: 'lightgray', height: '200px', marginLeft: '5%', marginRight: '5%', marginTop: '30px' }}>
        <Typography variant="h4" component="h1">
          Material UI - Next.js example
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
      </Box>
      <Box key="box2" sx={{backgroundColor: 'lightgray', height: '200px', marginLeft: '5%', marginRight: '5%', marginTop: '30px' }}>
        <Typography variant="h4" component="h1">
          Material UI - Next.js example
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
      </Box>
    </Container>
  );
}
