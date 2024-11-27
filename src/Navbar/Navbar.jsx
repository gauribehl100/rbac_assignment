import React, { useState } from 'react';
import { AppBar, Box, Toolbar, Typography, IconButton } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Sidebar from '../Sidebar/Sidebar';
import { Link } from 'react-router-dom';

export default function Navbar() {

  const [drawerOpen, setDrawerOpen] = useState(false); 

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open); 
  };
 
  const [anchorEl, setAnchorEl] = useState(null);
    
      const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"  sx={{ 
    width: '100%', 
    maxWidth: '300rem', 
  

  }} >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)} 
          >
            <MenuIcon />
          </IconButton>
        
             <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                sx={{ ml: 'auto' }}
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>
                <Link to="/profile">
                My Profile
                </Link>
                 </MenuItem>
              </Menu>
        </Toolbar>
      </AppBar>

      {/* Pass state and toggle function to Sidebar */}
      <Sidebar open={drawerOpen} toggleDrawer={toggleDrawer} />
    </Box>
  );
}
