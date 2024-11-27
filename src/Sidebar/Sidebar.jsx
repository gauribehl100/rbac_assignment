import React from 'react';
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider } from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';

export default function Sidebar({ open, toggleDrawer }) {
  const menuitems=[
    { text: 'Dashboard', icon: <DashboardIcon />,path:'/' },
{ text: 'User', icon: <GroupIcon /> ,path:'user'},
{ text: 'Roles', icon: <SettingsIcon />,path:'roles' },
{ text: 'Log Out', icon: <LogoutIcon /> },
  ];
  return (
    <Drawer open={open} onClose={toggleDrawer(false)}>
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={toggleDrawer(false)} 
      >

        <List>
          <br></br>

          {menuitems.map((item,index) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton component={Link} to={item.path} >
                <ListItemIcon>
           
                  {item.icon}

                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Box>
    </Drawer>
  );
}
