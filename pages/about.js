import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Lock, Schedule, Construction, Payments } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Grid, Avatar, Divider } from '@mui/material';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const servicesData = [
  {
    id: 1,
    title: 'Insured',
    icon: <Lock sx={{fontSize: 54, color: '#358f7a'}}/>,
  },
  {
    id: 2,
    title: 'Flexible Scheduling',
    icon: <Schedule sx={{fontSize: 54, color: '#358f7a'}}/>,
  },
  {
    id: 3,
    title: '10+ Year Experience',
    icon: <Construction sx={{fontSize: 54, color: '#358f7a'}}/>,
  },
  {
    id: 4,
    title: 'Accept Wide Range of Payments',
    icon: <Payments sx={{fontSize: 54, color: '#358f7a'}}/>,
  },
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  width: '400px',
}));

export default function About() {

  return (
    <React.Fragment>
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
          backgroundPosition: 'cover',
          backgroundRepeat: 'no-repeat no-repeat',
          backgroundSize: 'cover', 
          minHeight: '200px', 
          width: '100%', 
          textAlign: 'center',
          pt: '35px', // needed to vertically center
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
          About Us
        </Typography>
      </Box>
      <br/>
    </Container>
    <Container maxWidth="lg" sx={{minHeight: '800px'}}>
      <Box 
        sx={{
          textAlign: 'center',
          backgroundColor: 'lightgray', 
          mb: 20, 
          borderRadius: 2, 
          padding: '2%',
          border: '4px solid',
          borderColor: '#358f7a'
        }}
      >
        <Grid container xs={12}>
          <Grid item xs={12} display="flex" justifyContent="center" alignItems="center" textAlign="center">
            <Avatar
              alt="Home Repair Image"
              src='/nickHeadshot.png'
              sx={{ width: 275, height: 275, border: '6px solid #358f7a' }}
            />
          </Grid>
        </Grid>
        <Typography 
          variant="h3" 
          component="h1" 
          gutterBottom
          sx={{
            pt: 2,
            // fontWeight: 'bold'
          }}
        >
          Meet the Owner
        </Typography>
        <Divider variant='middle' color='#358f7a' sx={{ mb: 2 }}></Divider>
        <Typography  
          gutterBottom
          sx={{
            pt: 1,
            px: 6,
            pb: 4,
            fontWeight : '400',
            fontSize: '18px',
            textAlign: 'left'
          }}
        >
          Hi I'm Nicholas! With over 10 years of experience in the construction trade, I offer a wide range of services in the Marietta area. From electrical work like installing new receptacles, ceiling fans, and lights, to plumbing tasks such as sink and faucet replacements, I've got you covered. Need help with gutter cleaning or installation? I can handle that too! Plus, I specialize in home repairs, including door installation, LVP floor installation, picture and TV hanging, furniture assembly, and general clean up. Don't forget, I also do interior and exterior painting! Rest assured, I am insured. Feel free to reach out for a free estimate. Let's get your honey-do list done!
        </Typography>
        <Grid 
          container 
          sx={{ textAlign: 'center' }} 
          columns={{ xs: 12, sm: 4, md: 8 }}
        >
          {servicesData.map((service) => (
            <Grid item xs={12} sm={4} md={4} key={service.id}>
              <Box sx={{ pb: 4 }}>
                {service.icon}
                <Typography 
                  variant="h6" 
                  sx={{
                    pt: 2,
                    textAlign: 'center',
                    fontWeight: 'bolder'
                  }}
                >
                  {service.title}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
    <Container maxWidth="lg" sx={{minHeight: '800px'}}>
      <Box 
        sx={{
          textAlign: 'center',
          mb: 20, 
          padding: '2%',
        }}
      >
        <Typography 
          variant="h3" 
          component="h1" 
          gutterBottom
          sx={{
            pt: 2,
            // fontWeight: 'bold'
          }}
        >
          Past Projects
        </Typography>
        <Divider variant='middle' color='#358f7a' sx={{ mb: 2 }}></Divider>
          <Carousel
            autoPlay
            showArrows
            showThumbs={false}
          >
            <div>
              <img src="/barnSideBeforeAfter.png" />
            </div>
            <div>
              <img src="/basementBeforeAfter.png" />
            </div>
            <div>
              <img src="/barnFrontBeforeAfter.png" />
            </div>
          </Carousel>
        </Box>
      </Container>
  </React.Fragment>
  );
}
