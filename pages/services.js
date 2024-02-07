import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '../src/Link';

export default function Services() {
  return (
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
          Services
        </Typography>
      </Box>
    </Container>
  );
}
