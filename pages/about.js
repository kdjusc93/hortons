import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import CheckIcon from '@mui/icons-material/Check';

function WovenImageList() {
  return (
    <ImageList sx={{ width: '100%', height: 500 }} variant="woven" cols={2} gap={4}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=161&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://s3-media0.fl.yelpcdn.com/bphoto/pHWJ32V2TGMJhqNRibqq4Q/348s.jpg',
    title: '',
  },
  {
    img: 'https://s3-media0.fl.yelpcdn.com/bphoto/RcpL-qx6uMIc0LInLpMhUQ/348s.jpg',
    title: '',
  },
  {
    img: 'https://s3-media0.fl.yelpcdn.com/bphoto/M7xHd04UdKzyfR3Tyx38-g/348s.jpg',
    title: '',
  },
  {
    img: 'https://s3-media0.fl.yelpcdn.com/bphoto/TnLagk106FkCw9xKulo9gQ/348s.jpg',
    title: '',
  },
  {
    img: 'https://s3-media0.fl.yelpcdn.com/bphoto/Oi8bnMP7r4tP-nfDxo-vdA/348s.jpg',
    title: '',
  },
  {
    img: 'https://s3-media0.fl.yelpcdn.com/bphoto/x7JasK1svqQrc83WFDDmKg/348s.jpg',
    title: '',
  },
  {
    img: 'https://s3-media0.fl.yelpcdn.com/bphoto/hVE4RQ_dZy2L3CH6GGgxUA/348s.jpg',
    title: '',
  },
  {
    img: 'https://s3-media0.fl.yelpcdn.com/bphoto/0bVvLFwO1MrOQ1T7XNkpbQ/348s.jpg',
    title: '',
  }
];

export default function About() {
  return (
    <Container maxWidth="lg" sx={{minHeight: '600px'}}>
      <Box 
        sx={{
          textAlign: 'center',
          backgroundColor: 'lightgray', 
          my: 8, 
          borderRadius: 2, 
          padding: '2%',
          border: '4px solid',
          borderColor: '#358f7a'
        }}
      >
        <Typography 
          variant="h3" 
          component="h1" 
          sx={{
            pt: 2,
            pb: 1
          }}
        >
          About Us
        </Typography>
        <br/>
        <Typography  
          gutterBottom
          sx={{
            pt: 1,
            pb: 4,
            fontWeight : '400',
            fontSize: '20px'
          }}
        >
        With over 10 years of experience in the construction trade, I offer a wide range of services in the Marietta area. From electrical work like installing new receptacles, ceiling fans, and lights, to plumbing tasks such as sink and faucet replacements, I've got you covered. Need help with gutter cleaning or installation? I can handle that too! Plus, I specialize in home repairs, including door installation, LVP floor installation, picture and TV hanging, furniture assembly, and general clean up. Don't forget, I also do interior and exterior painting! Rest assured, I am insured. Feel free to reach out for a free estimate. Let's get your honey-do list done!
        </Typography>
        <Typography 
          textAlign="left"
          sx={{
            pt: 2,
            pb: 1,
            fontWeight : '400',
            fontSize: '20px'
          }}
        >
          <CheckIcon style={{ color: '#50c878', transform: 'scale(1.5)'}}/> <b>Open 24/7</b>
        </Typography>
        <Typography 
          textAlign="left"
          sx={{
            pt: 2,
            pb: 1,
            fontWeight : '400',
            fontSize: '20px'
          }}
        >
          <CheckIcon style={{ color: '#50c878', transform: 'scale(1.5)'}}/> <b>Accepts Credit Cards</b>
        </Typography>
        <WovenImageList/>
      </Box>
    </Container>
  );
}
