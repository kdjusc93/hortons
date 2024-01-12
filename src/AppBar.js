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

function ResponsiveAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        <ListItem key="mabout" disablePadding
            component={Link} href="/">
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary="HOME" />
            </ListItemButton>
          </ListItem>
          <ListItem key="mabout2" disablePadding
            component={Link} href="/about">
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary="ABOUT2" />
            </ListItemButton>
          </ListItem>
          <ListItem key="mabout3" disablePadding
            component={Link} href="/about">
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary="ABOUT3" />
            </ListItemButton>
          </ListItem>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <React.Fragment>
    <AppBar position="static" component={"nav"} sx={{ backgroundColor: "green"}}>
       <Container maxWidth="xl">
       <Toolbar disableGutters>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            LOGO
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button key="about" sx={{ color: '#fff' }}
            component={Link} href="/">
                HOME
            </Button>
            <Button key="about2" sx={{ color: '#fff' }}
            component={Link} href="/about">
                ABOUT2
            </Button>
            <Button key="about3" sx={{ color: '#fff' }}
            component={Link} href="/about">
                ABOUT3
            </Button>
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, left: '50%', right: '50%', position: 'absolute' }}
          >
            LOGO
          </IconButton>
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