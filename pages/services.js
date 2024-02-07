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
          What We Offer
        </Typography>
        <br/> 
        <Box sx={{ width: '100%', padding: '30px'}}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1 }} >
        <Grid xs={12} md={6} display="flex" justifyContent="center" alignItems="center" textAlign="center">
          <Item sx={{ minHeight: '550px', maxWidth: '400px', border: '4px solid #358f7a'}}>
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
        <Grid item xs={12}>
            <List dense='true'>
            <ListItem>
                  <ListItemIcon>
                    <TaskAltIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Single-line item"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <TaskAltIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Single-line item"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <TaskAltIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Single-line item"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <TaskAltIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Single-line item"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <TaskAltIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Single-line item"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <TaskAltIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Single-line item"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <TaskAltIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Single-line item"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <TaskAltIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Single-line item"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <TaskAltIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Single-line item"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <TaskAltIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Single-line item"
                  />
                </ListItem>
            </List>
        </Grid>
        
          </Item>
        </Grid>
        <Grid xs={12} md={6} display="flex" justifyContent="center" alignItems="center">
        <Item sx={{ minHeight: '550px', maxWidth: '400px', border: '4px solid #358f7a'}}>
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
                    primary="Single-line item"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <TaskAltIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Single-line item"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <TaskAltIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Single-line item"
                  />
                </ListItem>
                </List>
        </Grid>
        </Item>
        </Grid>
        <Grid xs={12} md={6} display="flex" justifyContent="center" alignItems="center">
        <Item sx={{ minHeight: '550px', maxWidth: '400px', border: '4px solid #358f7a'}}>
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
                    primary="Single-line item"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <TaskAltIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Single-line item"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <TaskAltIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Single-line item"
                  />
                </ListItem>
                </List></Grid>
        </Item>
        </Grid>
        <Grid xs={12} md={6} display="flex" justifyContent="center" alignItems="center">
        <Item sx={{ minHeight: '550px', maxWidth: '400px', border: '4px solid #358f7a'}}>
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
                    primary="Single-line item"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <TaskAltIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Single-line item"
                  />
                </ListItem>
                </List>
                </Grid>
        </Item>
        </Grid>
      </Grid>
    </Box>
      </Box>
    </Container>
  );
}
