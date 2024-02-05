import { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
// import { FormControl } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import { AccountCircle, Email, Phone } from '@mui/icons-material';


export default function Contact() {

  const formSubmitText = "Thank you for reaching out to us. Make sure to send the email we created for you. We will make sure to reach out to you soon!"
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [note, setNote] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const validateFormInputs = ({email, name, phone, })

  const handleSubmit = (e) => {
    e.preventDefault();



    const businessEmail = 'rosseaton92@gmail.com'
    const emailSubject = `Contact Us Form Submission from ${name}`;
    const emailBody = `Email Body`;

    console.log('Form Submitted!!');

    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone}`);

    window.open(`mailto:${businessEmail}?subject=${emailSubject}&body=${emailBody}`);

    setFormSubmitted(true);
  }


  return (
    <Container maxWidth="md" sx={{}}>
      <Box sx={{
        backgroundColor: 'lightgray', 
        my: 8, 
        borderRadius: 2, 
        padding: '2%'
      }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Contact Us
        </Typography>

        { formSubmitted ? <div>{formSubmitText}</div> :
        <form onSubmit={handleSubmit}>
          <TextField
            required
            sx={{
              pb: 4
            }}
            id="name-textfield"
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
            variant="outlined"
          />
          <br/>
          <TextField
            required
            sx={{
              pb: 4
            }}
            id="email-textfield"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Email />
                </InputAdornment>
              ),
            }}
            variant="outlined"
          />
          <br/>
          <TextField
            required
            id="phone-textfield"
            label="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Phone />
                </InputAdornment>
              ),
            }}
            variant="outlined"
          />
          <br/>
          <br/>
          <Button variant="contained" type='submit'>Submit</Button>
        </form>
        }
      </Box>
    </Container>
  );
}
