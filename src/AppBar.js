import * as React from 'react';
import Link from '@mui/material/Link';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const drawerWidth = 240;
const businessName = "Horton\'s Honey-Do and Handyman Services"
const businessNameShrt = "Horton\'s Honey-Do"
const logoAltText = "Horton\'s Honey-Do and Handyman Services Logo"
const logo_path = "public/logo.png"

const links = [
  {
    name: "HOME",
    hrefPath: "/",
  },
  {
    name: "ABOUT US",
    hrefPath: "/about",
  },
  {
    name: "SERVICES",
    hrefPath: "/services",
  },
  {
    name: "CONTACT",
    hrefPath: "/contact",
  }
]

let appbarLinksDisplay = links.map(function(link) {
  return (
    <Button key={link.name} color='primary' component={Link} href={link.hrefPath}>
        {link.name}
    </Button>
  );
});

let appDrawerLinksDisplay = links.map(function(link) {
  return (
    <ListItem key={link.name} disablePadding
      component={Link} href={link.hrefPath}>
      <ListItemButton sx={{ textAlign: 'center' }}>
        <ListItemText primary={link.name} />
      </ListItemButton>
    </ListItem>
  );
});

function ResponsiveAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        {businessNameShrt}
      </Typography>
      <Divider />
      <List>
        { appDrawerLinksDisplay }
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <React.Fragment>
      <AppBar 
        position="static" 
        component={"nav"} 
        sx={{ backgroundColor: "white"}}>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon color='primary'/>
            </IconButton>
            {/****************************************************************
              Really want the image centered on xs but couldn't figure it out
            *****************************************************************/}
            <Box
              component="img"
              sx={{
                height: 170,
                width: 200,
                maxHeight: { xs: 170, md: 170 },
                maxWidth: { xs: 200, md: 200 },
                justifyContent: { xs: 'center' }, // not working
              }}
              alt={logoAltText}
              src="/logo_withText.png"
            />
            {/****************************************************************
              If I took out below it messed up the alignment of the AppBar
              buttons links. Need to Revisit how to properly remove!
            *****************************************************************/}
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              {/* {businessName} */}
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              { appbarLinksDisplay }
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </React.Fragment>
  );
}
export default ResponsiveAppBar;