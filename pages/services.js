import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '../src/Link';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FolderIcon from '@mui/icons-material/Folder';
import { Card, CardContent, CardActions } from '@mui/material';
import { ContactPage, Handyman } from '@mui/icons-material';


import TaskAltIcon from '@mui/icons-material/TaskAlt';


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
    <>
    {/************** Header Section **************/}
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
          backgroundImage: 'url(/tools.jpg)',
          boxShadow: 'inset 0 0 0 1000px rgba(53, 143, 122, .9)',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover', 
          height: '200px', 
          width: '100%', 
          position: 'relative',
          textAlign: 'center',
        }}
      >
        <Typography 
          variant="h2" 
          component="h1" 
          sx={{
            py: 4,
            fontWeight: 'bold',
            color: 'white'
          }}
        >
          Services
        </Typography>
      </Box>
      <br/>
    </Container>
    <Container maxWidth="lg" sx={{minHeight: '800px'}}>
      <Box 
        sx={{
          textAlign: 'center',
          backgroundColor: 'lightgray', 
          mb: 8, 
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
          What We Offer
        </Typography>
        <br/> 
        <Box sx={{ width: '100%', padding: '20px'}}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1 }}>
        <Grid xs={12} md={6} display="flex" justifyContent="center" alignItems="center" textAlign="center">
          <Item sx={{ minHeight: '550px', width: '90%', border: '4px solid #358f7a'}} >
          <Typography 
          variant="h3" 
          component="h1" 
          gutterBottom
          sx={{
            pt: 2,
            pb: 4
          }}
        >
          Home Repair
        </Typography>
        <Grid item xs={12} >
            <List dense='true'>
            <ListItem>
                  <ListItemIcon>
                    <TaskAltIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Door Installation"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <TaskAltIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="LVP Floor Installation"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <TaskAltIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Picture Hanging"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <TaskAltIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="TV Hanging"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <TaskAltIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="TV Mounts"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <TaskAltIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Furniture Assembly"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <TaskAltIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Moving Furniture"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <TaskAltIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="General Clean Up"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <TaskAltIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Interior Painting"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <TaskAltIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Exterior Painting"
                  />
                </ListItem>
            </List>
        </Grid>
        
          </Item>
        </Grid>
        <Grid xs={12} md={6} display="flex" justifyContent="center" alignItems="center">
        <Item sx={{ minHeight: '550px', width: '90%', border: '4px solid #358f7a'}}>
        <Typography 
          variant="h3" 
          component="h1" 
          gutterBottom
          sx={{
            pt: 2,
            pb: 4
          }}
        >
          Electrical
        </Typography>
        <Grid item xs={12}>
            <List dense='true'>
            <ListItem>
                  <ListItemIcon>
                    <TaskAltIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="New Receptacles"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <TaskAltIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Ceiling fans"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <TaskAltIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Lights"
                  />
                </ListItem>
                </List>
        </Grid>
        </Item>
        </Grid>
        <Grid xs={12} md={6} display="flex" justifyContent="center" alignItems="center">
        <Item sx={{ minHeight: '550px', width: '90%', border: '4px solid #358f7a'}}>
        <Typography 
          variant="h3" 
          component="h1" 
          gutterBottom
          sx={{
            pt: 2,
            pb: 4
          }}
        >
        Plumbing
        </Typography>
        <Grid item xs={12}>
            <List dense='true'>
            <ListItem>
                  <ListItemIcon>
                    <TaskAltIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Sink Replacement"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <TaskAltIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Faucet Replacement"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <TaskAltIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Faucet Repair"
                  />
                </ListItem>
                </List></Grid>
        </Item>
        </Grid>
        <Grid xs={12} md={6} display="flex" justifyContent="center" alignItems="center">
        <Item sx={{ minHeight: '550px', width: '90%', border: '4px solid #358f7a'}}>
        <Typography 
          variant="h3" 
          component="h1" 
          gutterBottom
          sx={{
            pt: 2,
            pb: 4
          }}
        >
          Gutters
        </Typography>
        <Grid item xs={12}>
            <List dense='true'>
            <ListItem>
                  <ListItemIcon>
                    <TaskAltIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Gutter Cleaning"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <TaskAltIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Gutter Installation"
                  />
                </ListItem>
                </List>
                </Grid>
        </Item>
        </Grid>
        <Grid xs={12} display="flex" justifyContent="center" alignItems="center">
        <Card maxWidth="lg" display="flex" justifyContent="center" alignItems="center" sx={{ 
          borderRadius: 2, 
          padding: '1%',
          border: '4px solid',
          borderColor: '#358f7a',
          width: '90%'
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
          Contact us below to get your next project started!
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" component={Link} href="/contact" startIcon={<ContactPage />}>
            Contact Us
          </Button>
        </CardActions>
      </Card>
        </Grid>
        
      </Grid>
    </Box>
      </Box>
    </Container>
    </>
  );
}
