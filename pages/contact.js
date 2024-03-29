import { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ContactForm from '../src/ContactForm';


export default function Contact(props) {

  const formSubmitText = "Thank you for reaching out to us. We will make sure to reach out to you soon!"
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
        { formSubmitted ? 
          <Typography 
            variant="h6" 
            component="h6" 
            gutterBottom
            sx={{
              px: 4,
              py: 2
            }}
          >
            {formSubmitText}
          </Typography>
        :
          <>
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
            <ContactForm setFormSubmitted={setFormSubmitted}/>
          </>
        }
        
      </Box>
    </Container>
    </>
  );
}
