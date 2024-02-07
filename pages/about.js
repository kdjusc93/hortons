import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '../src/Link';

export default function About() {
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
          sx={{
            pt: 2,
            pb: 1
          }}
        >
          About Us
        </Typography>
        <br/>
        <Typography  
          gutterBottom
          sx={{
            pt: 1,
            pb: 4,
            fontWeight : '400',
            fontSize: '20px'
          }}
        >
        With over 10 years of experience in the construction trade, I offer a wide range of services in the Marietta area. From minor electrical work like installing new receptacles, ceiling fans, and lights, to minor plumbing tasks such as sink and faucet replacements, I've got you covered. Need help with gutter cleaning or installation? I can handle that too! Plus, I specialize in home repairs, including door installation, LVP floor installation, picture and TV hanging, furniture assembly, and general clean up. Don't forget, I also do interior and exterior painting! Rest assured, I am insured. Feel free to reach out for a free estimate. Let's get your honey-do list done!
        </Typography>
      </Box>
    </Container>
  );
}
