import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '../src/Link';

export default function About() {
  return (
    <Container maxWidth="lg" sx={{minHeight: '800px'}}>
      <Box sx={{backgroundColor: 'gray', my: 4, height: '200px', padding: '2%'}}>
        <Typography variant="h4" component="h1" gutterBottom>
          Material UI - Next.js example
        </Typography>
        <Button variant="contained" component={Link} noLinkStyle href="/">
          Go to the main page
        </Button>
      </Box>
    </Container>
  );
}
