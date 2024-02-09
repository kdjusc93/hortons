import { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ContactForm from '../src/ContactForm';


export default function Contact(props) {

  const formSubmitText = "Thank you for reaching out to us. Make sure to send the email we created for you. We will make sure to reach out to you soon!"
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <>
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
          Contact Us
        </Typography>
      </Box>
      <br/>
    </Container>
    <Container maxWidth="lg" sx={{minHeight: '800px'}}>
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
          Get your Free Quote Now!
        </Typography>
        { formSubmitted ? <div>{formSubmitText}</div> :
          <ContactForm setFormSubmitted={setFormSubmitted}/>
        }
      </Box>
    </Container>
    </>
  );
}
