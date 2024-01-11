import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '../src/Link';

export default function Index() {
  return (
    <Container maxWidth={false} sx={{minHeight: '800px', width: '100%', margin: '0px'}} disableGutters>
      <Box sx={{backgroundColor: 'gray', height: '300px', width: '100%', paddingLeft: '0px', margin: '0px'}}>
        <Typography variant="h4" component="h1" gutterBottom>
          big image here
        </Typography>
      </Box>
      <Box key="box2" sx={{backgroundColor: 'gray', height: '200px', marginLeft: '5%', marginRight: '5%', marginTop: '30px'}}>
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
