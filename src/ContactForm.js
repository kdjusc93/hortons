import { useState, useRef } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { AccountCircle, Article, Email, Phone } from '@mui/icons-material';
import emailjs from '@emailjs/browser';

export default function ContactForm({setFormSubmitted}) {

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
        // return fullBodyText.replaceAll('\n', urlEncodedNewline);
        return fullBodyText;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const isValid = !(emailError) & !(phoneError);

        const serviceid = 'service_vn65ahu';
        const templateid = 'template_dtny15n';
        const publickey = 'IM9FbppDvsaclACXy';

        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: 'Nicholas @ Horton\'s Handyman Services',
            message: emailBodyBuilder(projectDetails, email, phone),
        }
        
    
        if(isValid) {
          
          emailjs.send(serviceid, templateid, templateParams, publickey)
            .then((response) => {
                console.log('Email sent successfully!', response),
                setName('');
                setEmail('');
                setPhone('');
                setProjectDetails('');
            })
            .catch((error) => {
                console.error('Error sending email:', error)
            })
    
          setFormSubmitted(true);
        }
    }

    return(
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
            mb: 4
        }}
        >Submit</Button>
        <br/>
    </form>
    );
}