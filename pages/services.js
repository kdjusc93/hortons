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
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Card, CardContent, CardActions } from '@mui/material';
import { ContactPage } from '@mui/icons-material';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';


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
          pt: '35px', // needed to vertically center
          position: 'relative',
          textAlign: 'center'
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
    <Container maxWidth={false} disableGutters sx={{ minHeight: '800px', width: '100%' }}>
      <Box 
        sx={{
          textAlign: 'center',
          mb: 8, 
          width: '100%',
          padding: '1%',
          borderColor: '#358f7a'
        }}
      >
        <br/> 
        {/* <Box sx={{ width: '100%', padding: '20px'}}> */}
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1 }}>
        <Grid xs={12} md={6} display="flex" justifyContent="center" alignItems="center" textAlign="center">
          <Item sx={{ minHeight: '550px', width: '90%', maxWidth: '690px', border: '4px solid #358f7a', bgcolor: '#358f7a', mb: '20px'}}>
          <Grid container xs={12}>
            <Grid item xs={12} display="flex" justifyContent="center" alignItems="center" textAlign="center">
              <Avatar
                alt="Home Repair Image"
                src='/home_repair.png'
                sx={{ width: 175, height: 175, border: '2px solid #333333' }}
              />
            </Grid>
          </Grid>
          <Typography 
            variant="h3" 
            component="h1" 
            gutterBottom
            sx={{
              pt: 2,
              color: 'white',
              fontWeight: 'bold'
            }}
          >
          Home Repair
        </Typography>
        <Divider variant='middle' color='#57d6b9'></Divider>
        <Grid item xs={12} >
          <List dense='true'>
            <ListItem>
              <ListItemIcon>
                <TaskAltIcon />
              </ListItemIcon>
              <ListItemText primaryTypographyProps={{fontSize: '18px'}} sx={{ color: 'white' }}
                primary="Door Installation"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <TaskAltIcon />
              </ListItemIcon>
              <ListItemText primaryTypographyProps={{fontSize: '18px'}} sx={{ color: 'white' }}
                primary="LVP Floor Installation"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <TaskAltIcon />
              </ListItemIcon>
              <ListItemText primaryTypographyProps={{fontSize: '18px'}} sx={{ color: 'white' }}
                primary="Picture Hanging"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <TaskAltIcon />
              </ListItemIcon>
              <ListItemText primaryTypographyProps={{fontSize: '18px'}} sx={{ color: 'white' }}
                primary="TV Hanging"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <TaskAltIcon />
              </ListItemIcon>
              <ListItemText primaryTypographyProps={{fontSize: '18px'}} sx={{ color: 'white' }}
                primary="TV Mounts"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <TaskAltIcon />
              </ListItemIcon>
              <ListItemText primaryTypographyProps={{fontSize: '18px'}} sx={{ color: 'white' }}
                primary="Furniture Assembly"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <TaskAltIcon />
              </ListItemIcon>
              <ListItemText primaryTypographyProps={{fontSize: '18px'}} sx={{ color: 'white' }}
                primary="Moving Furniture"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <TaskAltIcon />
              </ListItemIcon>
              <ListItemText primaryTypographyProps={{fontSize: '18px'}} sx={{ color: 'white' }}
                primary="General Clean Up"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <TaskAltIcon />
              </ListItemIcon>
              <ListItemText primaryTypographyProps={{fontSize: '18px'}} sx={{ color: 'white' }}
                primary="Interior Painting"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <TaskAltIcon />
              </ListItemIcon>
              <ListItemText primaryTypographyProps={{fontSize: '18px'}} sx={{ color: 'white' }}
                primary="Exterior Painting"
              />
            </ListItem>
          </List>
        </Grid>
          </Item>
        </Grid>
        <Grid xs={12} md={6} display="flex" justifyContent="center" alignItems="center">
        <Item sx={{ minHeight: '550px', width: '90%', maxWidth: '690px', border: '4px solid #358f7a', bgcolor: '#358f7a', mb: '20px'}}>
        <Grid container xs={12}>
            <Grid item xs={12} display="flex" justifyContent="center" alignItems="center" textAlign="center">
              <Avatar
                alt="Electrical Repair Image"
                src='/minor_electrical.png'
                sx={{ width: 175, height: 175, border: '2px solid #333333' }}
              />
            </Grid>
          </Grid>
        <Typography 
          variant="h3" 
          component="h1" 
          gutterBottom
          sx={{
            color: 'white',
            fontWeight: 'bold'
          }}
        >
          Electrical
        </Typography>
        <Divider variant='middle' color='#57d6b9'></Divider>
        <Grid item xs={12}>
          <List dense='true'>
            <ListItem>
              <ListItemIcon>
                <TaskAltIcon />
              </ListItemIcon>
              <ListItemText primaryTypographyProps={{fontSize: '18px'}} sx={{ color: 'white' }}
                primary="New Receptacles"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <TaskAltIcon />
              </ListItemIcon>
              <ListItemText primaryTypographyProps={{fontSize: '18px'}} sx={{ color: 'white' }}
                primary="Ceiling fans"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <TaskAltIcon />
              </ListItemIcon>
              <ListItemText primaryTypographyProps={{fontSize: '18px'}} sx={{ color: 'white' }}
                primary="Lights"
              />
            </ListItem>
            <ListItem><br></br></ListItem>
            <ListItem><br></br></ListItem>
            <ListItem><br></br></ListItem>
            <ListItem><br></br></ListItem>
            <ListItem><br></br></ListItem>
            <ListItem><br></br></ListItem>
            <ListItem><br></br></ListItem>
            <ListItem><br></br></ListItem>
            <ListItem><br></br></ListItem>
            <ListItem><br></br></ListItem>
            <ListItem><br></br></ListItem>
          </List>
        </Grid>
        </Item>
        </Grid>
        <Grid xs={12} md={6} display="flex" justifyContent="center" alignItems="center">
        <Item sx={{ minHeight: '550px', width: '90%', maxWidth: '690px', border: '4px solid #358f7a', bgcolor: '#358f7a', mb: '20px'}}>
        <Grid container xs={12}>
            <Grid item xs={12} display="flex" justifyContent="center" alignItems="center" textAlign="center">
              <Avatar
                alt="Plumbing Repair Image"
                src='/minor_plumbing.png'
                sx={{ width: 175, height: 175, border: '2px solid #333333' }}
              />
            </Grid>
          </Grid>
        <Typography 
          variant="h3" 
          component="h1" 
          gutterBottom
          sx={{
            color: 'white',
            fontWeight: 'bold'
          }}
        >
        Plumbing
        </Typography>
        <Divider variant='middle' color='#57d6b9'></Divider>
        <Grid item xs={12}>
            <List dense='true'>
            <ListItem>
                  <ListItemIcon>
                    <TaskAltIcon />
                  </ListItemIcon>
                  <ListItemText primaryTypographyProps={{fontSize: '18px'}} sx={{ color: 'white' }}
                    primary="Sink Replacement"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <TaskAltIcon />
                  </ListItemIcon>
                  <ListItemText primaryTypographyProps={{fontSize: '18px'}} sx={{ color: 'white' }}
                    primary="Faucet Replacement"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <TaskAltIcon />
                  </ListItemIcon>
                  <ListItemText primaryTypographyProps={{fontSize: '18px'}} sx={{ color: 'white' }}
                    primary="Faucet Repair"
                  />
                </ListItem>
                </List>
          </Grid>
        </Item>
        </Grid>
        <Grid xs={12} md={6} display="flex" justifyContent="center" alignItems="center">
        <Item sx={{ minHeight: '550px', width: '90%', maxWidth: '690px', border: '4px solid #358f7a', bgcolor: '#358f7a', mb: '20px'}}>
        <Grid container xs={12}>
            <Grid item xs={12} display="flex" justifyContent="center" alignItems="center" textAlign="center">
              <Avatar
                alt="Gutters Cleaning Image"
                src='gutter_cleaning.png'
                sx={{ width: 175, height: 175, border: '2px solid #333333' }}
              />
            </Grid>
          </Grid>
          <Typography 
            variant="h3" 
            component="h1" 
            gutterBottom
            sx={{
              color: 'white',
              fontWeight: 'bold'
            }}
          >
            Gutters
          </Typography>
          <Divider variant='middle' color='#57d6b9'></Divider>
          <Grid item xs={12}>
            <List dense='true'>
              <ListItem>
                <ListItemIcon>
                  <TaskAltIcon />
                </ListItemIcon>
                <ListItemText primaryTypographyProps={{fontSize: '18px'}} sx={{ color: 'white' }}
                  primary="Gutter Cleaning"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <TaskAltIcon />
                </ListItemIcon>
                <ListItemText primaryTypographyProps={{fontSize: '18px'}} sx={{ color: 'white' }}
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
          mt: '60px',
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
        <CardActions
          sx={{
            justifyContent: 'center'
          }}
        >
          <Button variant="contained" component={Link} href="/contact" startIcon={<ContactPage />}>
            Contact Us
          </Button>
        </CardActions>
      </Card>
        </Grid>
        
      </Grid>
    </Box>
    </Container>
    </>
  );
}
