import * as React from 'react';
import { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '../src/Link';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { Card, CardContent, CardActions } from '@mui/material';
import { ContactPage, Handyman } from '@mui/icons-material';
import ContactForm from '../src/ContactForm';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';


export default function Index() {

  const formSubmitText = "Thank you for reaching out to us. Make sure to send the email we created for you. We will make sure to reach out to you soon!"
  const [formSubmitted, setFormSubmitted] = useState(false);

  const itemData = [
    {
      img: 'home_repair.png',
      title: 'Home Repair',
      rows: 1,
      cols: 4,
      featured: true,
    },
    {
      img: 'minor_electrical.png',
      title: 'Electrical',
    },
    {
      img: 'minor_plumbing.png',
      title: 'Plumbing',
    },
    {
      img: 'gutter_cleaning.png',
      title: 'Gutter Cleaning',
      cols: 4,
    }
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
          paddingLeft: '0px', 
          margin: '0px', 
          position: 'relative',
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
    <Container maxWidth="lg" sx={{minHeight: '600px'}}>
      <Typography 
        variant="h3" 
        component="h1" 
        sx={{
          pt: 2,
          pb: 4,
          textAlign: 'center'
        }}
      >
        Services
      </Typography>
      <Divider variant="middle" component="h1" sx={{ mb: 6 }}/>
      <ImageList 
        sx={{ 
          width: 'inherit', 
          height: 'inherit'
        }}>
        {itemData.map((item) => (
          <ImageListItem key={item.img} sx={{ m: 2 }}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.author}
              sx={{
                "& .MuiImageListItemBar-title": { fontSize: "1.5rem" }, //styles for title
              }}
              actionIcon={
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.7)' }}
                  aria-label={`info about ${item.title}`}
                  href="/services"
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
      {/* <Box 
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
          Section
        </Typography>
      </Box> */}
    </Container>
    {/************** Contact Form Section **************/}
    <Container maxWidth="md" sx={{minHeight: '600px'}}>
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
            py: 2
          }}
        >
          Contact Us
        </Typography>
        { formSubmitted ? <div>{formSubmitText}</div> :
          <ContactForm setFormSubmitted={setFormSubmitted}/>
        }
      </Box>
    </Container>
  </React.Fragment>
  );
}
