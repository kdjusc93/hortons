import { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { AccountCircle, Article, Email, Phone } from '@mui/icons-material';


export default function Contact() {

  const formSubmitText = "Thank you for reaching out to us. Make sure to send the email we created for you. We will make sure to reach out to you soon!"
  const [name, setName] = useState('');
  // Email
  const [email, setEmail] = useState('');
  const [emailHelperText, setEmailHelperText] = useState('');
  const [emailError, setEmailError] = useState(false);
  // Phone
  const [phone, setPhone] = useState('');
  const [phoneHelperText, setPhoneHelperText] = useState('');
  const [phoneError, setPhoneError] = useState(false);

  const [projectDetails, setProjectDetails] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const emailIsValid = (email) => {
    
    setEmail(email);
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const emailValid = emailRegex.test(email);

    if (emailValid) {
      setEmailError(false);
      setEmailHelperText('');
    } else {
      setEmailError(true);
      setEmailHelperText('Email is Invalid!');
    }

    return emailValid;
  }

  const phoneIsValid = (phone) => {
    
    setPhone(phone);
    const phoneRegex = /^[0-9()-+- ]+$/;
    const phoneValid = phoneRegex.test(phone);

    if (phoneValid) {
      setPhoneError(false);
      setPhoneHelperText('');
    } else {
      setPhoneError(true);
      setPhoneHelperText('Phone Number is Invalid!');
    }

    return phoneValid;
  }

  const emailBodyBuilder = (projectDetails, email, phone) => {

    let fullBodyText = '';
    const urlEncodedNewline = '%0A'

    fullBodyText += projectDetails;
    fullBodyText += '\n';
    fullBodyText += '\n';
    fullBodyText += '== Contact Info ==';
    fullBodyText += '\n';
    fullBodyText += `Email: ${email}`;
    fullBodyText += '\n';
    fullBodyText += `Phone: ${phone}`;

    // Must URL encode newlines for mailto later
    return fullBodyText.replaceAll('\n', urlEncodedNewline);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = !(emailError) & !(phoneError);

    if(isValid) {
      const businessEmail = 'nrhorton432@gmail.com'
      const emailSubject = `Contact Us Form Submission from -- ${name}`;
      const emailBody = `${projectDetails}`;

      console.log('Form Submitted!!');

      console.log(`Name: ${name}`);
      console.log(`Email: ${email}`);
      console.log(`Phone: ${phone}`);

      window.open(`mailto:${businessEmail}?subject=${emailSubject}&body=${emailBodyBuilder(projectDetails, email, phone)}`);

      setFormSubmitted(true);
    }
  }

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
        <form onSubmit={handleSubmit}>
          <TextField
            required
            fullWidth
            sx={{
              px: 4,
              py: 2
            }}
            id="name-textfield"
            placeholder='Name'
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
            fullWidth
            error={emailError}
            sx={{
              px: 4,
              py: 2
            }}
            id="email-textfield"
            helperText={emailHelperText}
            placeholder='Email'
            value={email}
            onChange={(e) => emailIsValid(e.target.value)}
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
            fullWidth
            error={phoneError}
            sx={{
              px: 4,
              py: 2
            }}
            id="phone-textfield"
            helperText={phoneHelperText}
            placeholder='Phone Number'
            value={phone}
            onChange={(e) => phoneIsValid(e.target.value)}
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
          <TextField
            required
            fullWidth
            multiline
            rows={4}
            sx={{
              px: 4,
              py: 2
            }}
            id="projectDetails-textfield"
            placeholder="Provide us any details about your project."
            value={projectDetails}
            onChange={(e) => setProjectDetails(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Article />
                </InputAdornment>
              ),
            }}
            variant="outlined"
          />
          <br/>
          <Button 
            variant="contained" 
            type='submit'
            sx={{
              mb: 2
            }}
          >Submit</Button>
          <br/>
        </form>
        }
      </Box>
    </Container>
  );
}
