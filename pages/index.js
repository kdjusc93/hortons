import * as React from 'react';
import { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '../src/Link';
import Button from '@mui/material/Button';
import { Card, CardContent, CardActions } from '@mui/material';
import { ContactPage, Handyman, House, ElectricalServices, Plumbing, Roofing } from '@mui/icons-material';
import ContactForm from '../src/ContactForm';
import Grid from '@mui/material/Grid';



export default function Index() {

  const formSubmitText = "Thank you for reaching out to us. Make sure to send the email we created for you. We will make sure to reach out to you soon!"
  const [formSubmitted, setFormSubmitted] = useState(false);

  const servicesData = [
    {
      id: 1,
      title: 'Home Repair',
      icon: <House sx={{fontSize: 54, color: 'white'}}/>,
    },
    {
      id: 2,
      title: 'Electrical',
      icon: <ElectricalServices sx={{fontSize: 54, color: 'white'}}/>,
    },
    {
      id: 3,
      title: 'Plumbing',
      icon: <Plumbing sx={{fontSize: 54, color: 'white'}}/>,
    },
    {
      id: 4,
      title: 'Gutter Cleaning',
      icon: <Roofing sx={{fontSize: 54, color: 'white'}}/>,
    },
  ]

  return (
    <React.Fragment>
    {/************** Header Section **************/}
    <Container 
      maxWidth={false} 
      sx={{
        minHeight: '300px', 
        width: '100%', 
        margin: '0px', 
        marginBottom: '100px',
        backgroundColor: 'white'
      }} 
      disableGutters
    >
      <Box 
        sx={{
          backgroundImage: 'url(/stylish_home2.png)',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover', 
          height: '500px', 
          width: '100%', 
          margin: '0px', 
          position: 'relative',
          overflowY: 'scroll',
          maxHeight: '70vh'
        }}
      >
      <Card 
        sx={{
          backgroundColor: 'rgba(255, 255, 255, .7)', 
          marginLeft: '5%', 
          marginRight: '5%', 
          marginTop: '100px',
          position: 'absolute', 
          // height: '200px', 
          minWidth: 'xs',
          maxWidth: 'sm', 
          padding: '10px'
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
          Check out our services or contact us below to get your next project started!
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" component={Link} href="/services" startIcon={<Handyman />}>
            Services
          </Button>
          <Button variant="contained" component={Link} href="/contact" startIcon={<ContactPage />}>
            Contact Us
          </Button>
        </CardActions>
      </Card>  
    </Box>
      <br/>
    </Container>
    {/************** Services Section **************/}
    <Container 
      maxWidth={false} 
      sx={{
        minHeight: '300px', 
        width: '100%', 
        margin: '0px', 
        marginBottom: '100px',
        backgroundColor: 'white'
      }} 
      disableGutters
    >
      <Box 
        sx={{
          textAlign: 'center',
          backgroundImage: 'url(/tools.jpg)',
          boxShadow: 'inset 0 0 0 1000px rgba(53, 143, 122, .9)',
          backgroundRepeat: 'no-repeat',
          my: 8, 
          backgroundSize: 'cover',
        }}
      >
        <Typography 
          variant="h3" 
          component="h1" 
          sx={{
            pt: 4,
            pb: 4,
            textAlign: 'center',
            fontWeight: 'bold'
          }}
        >
          Services
        </Typography>
        <Grid 
          container 
          sx={{ textAlign: 'center' }} 
          // spacing={{ xs: 2, md: 3 }} 
          columns={{ xs: 2, sm: 4, md: 8 }}
        >
          {servicesData.map((service) => (
            <Grid item xs={2} sm={4} md={4} key={service.id}>
              <Box
                sx={{
                  pb: 4
                }}
              >
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
        <Button 
          variant="contained" 
          color='secondary'
          component={Link} 
          href="/services" 
          // startIcon={<Handyman />}
          sx={{mb: 6}}
        >
          Click Here for More Details
        </Button>
      </Box>
    </Container>
    {/************** Contact Form Section **************/}
    <Container maxWidth="lg" sx={{minHeight: '600px'}}>
      <Box 
        sx={{
          textAlign: 'center',
          backgroundColor: 'lightgray', 
          my: 8, 
          borderRadius: 2, 
          padding: '1%', 
          border: '4px solid',
          borderColor: '#358f7a' // primary wasn't working so just did hex
        }}
      >
        <Typography 
          variant="h3" 
          component="h1" 
          gutterBottom
          sx={{
            px: 4,
            py: 2,
            fontWeight: 'bold'
          }}
        >
          Contact Us
        </Typography>
        { formSubmitted ? 
          <Typography 
            variant="h6" 
            component="h6" 
            gutterBottom
            sx={{
              px: 4,
              pb: 2
            }}
          >
            {formSubmitText}
          </Typography> :
          <ContactForm setFormSubmitted={setFormSubmitted}/>
        }
      </Box>
    </Container>
  </React.Fragment>
  );
}
