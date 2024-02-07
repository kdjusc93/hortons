import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '../src/Link';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  width: '400px',
}));

export default function Services() {
  return (
    <Container maxWidth="md" sx={{minHeight: '800px'}}>
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
        <br/> 
        <Box sx={{ width: '100%', paddin: '30px'}}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1 }} >
        <Grid xs={12} md={6} display="flex" justifyContent="center" alignItems="center" textAlign="center">
          <Item sx={{ minHeight: '200px', maxWidth: '400px', border: '4px solid #358f7a'}}>1</Item>
        </Grid>
        <Grid xs={12} md={6} display="flex" justifyContent="center" alignItems="center">
        <Item sx={{ minHeight: '200px', maxWidth: '400px', border: '4px solid #358f7a'}}>2</Item>
        </Grid>
        <Grid xs={12} md={6} display="flex" justifyContent="center" alignItems="center">
        <Item sx={{ minHeight: '200px', maxWidth: '400px', border: '4px solid #358f7a'}}>3</Item>
        </Grid>
        <Grid xs={12} md={6} display="flex" justifyContent="center" alignItems="center">
        <Item sx={{ minHeight: '200px', maxWidth: '400px', border: '4px solid #358f7a'}}>4</Item>
        </Grid>
      </Grid>
    </Box>
      </Box>
    </Container>
  );
}
