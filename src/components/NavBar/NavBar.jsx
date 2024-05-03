import { useState } from 'react';
import { useAuth } from '../../contexts/authContext';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import { Link } from 'react-router-dom';
import { styles } from './NavBar.styles';

const drawerWidth = 240;

const NavBar = ({ window }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileMenuAnchor, setProfileMenuAnchor] = useState(null);
  const username = sessionStorage.getItem('username');
  const navigate = useNavigate();
  const { handleLogout } = useAuth();
  const isAdmin = sessionStorage.getItem('isAdmin') === 'true'; 

  const navItems = [
    { text: "Home", icon: <HomeIcon sx={{ mr: '8px' }}/>, path: "/home" },
    { text: "Movies", icon: <VideocamOutlinedIcon sx={{ mr: '8px' }}/>, path: isAdmin ? "/admin/movies" : "/movies" },
  ];

  if (isAdmin) {
    navItems.push(
      { text: "Screenings", icon: <AccessTimeOutlinedIcon  sx={{ mr: '8px' }}/>, path: "/screenings" },
      { text: "Prices", icon: <LocalOfferOutlinedIcon sx={{ mr: '8px' }}/>, path: "/prices" },
      { text: "Statistics", icon: <BarChartOutlinedIcon  sx={{ mr: '8px' }}/>, path: "/statistics" },
    );
  }

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleProfileMenuOpen = (event) => {
    setProfileMenuAnchor(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setProfileMenuAnchor(null);
  };

  const handleLogoutClick = () => {
    handleLogout();
    navigate('/')
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const profileMenu = (
    <Menu
      anchorEl={profileMenuAnchor}
      open={Boolean(profileMenuAnchor)}
      onClose={handleProfileMenuClose}
      sx={styles.navBarText}
    >
      <MenuItem onClick={handleLogoutClick}>
        <Typography>Logout</Typography>
        <LogoutIcon sx={{ ml: '8px' }}/>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100 }}>
      <CssBaseline />
      <AppBar component="nav" sx={styles.navBarContainer}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={styles.drawerIcon}
          >
            <MenuIcon />
          </IconButton>

          <List
            sx={styles.navBarList}
          >
            {navItems.map((item, index) => (
              <ListItem key={item.text} disablePadding>
                <Link
                  to={item.path}
                  style={styles.navBarLink}
                >
                  <ListItemButton
                    sx={styles.navBarElement}
                  >
                    {item.icon}
                    <Typography sx={styles.navBarText}>{item.text}</Typography>
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
          </List>
          <IconButton
            color="inherit"
            sx={{ ml: 'auto'}}
            onClick={handleProfileMenuOpen} 
          >
            <AccountCircleIcon sx={{mr: '8px'}} />
            <Typography sx={styles.profileText}>{username}</Typography> {/* Захардкоджене ім'я користувача */}
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          <Box
            onClick={handleDrawerToggle}
            sx={styles.drawerWrapper}
          >
            <List>
              {navItems.map((item, index) => (
                <ListItem key={item.text} disablePadding>
                  <Link
                    to={item.path}
                    style={{ textDecoration: 'none', color: 'white', width: '100%' }}
                  >
                    <ListItemButton
                      sx={styles.drawerElement}
                    >
                      {item.icon}
                      <Typography sx={styles.drawerLink}>{item.text}</Typography>
                    </ListItemButton>
                  </Link>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </nav>
      {profileMenu} 
    </Box>
  );
}

export default NavBar;
