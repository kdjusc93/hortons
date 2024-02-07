import { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ContactForm from '../src/ContactForm';


export default function Contact() {

  const formSubmitText = "Thank you for reaching out to us. Make sure to send the email we created for you. We will make sure to reach out to you soon!"
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <Container maxWidth="md" sx={{}}>
      <Box 
        sx={{
          textAlign: 'center',
          backgroundColor: 'lightgray', 
          my: 8, 
          borderRadius: 2, 
          padding: '1%',
          border: 2,
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
  );
}
