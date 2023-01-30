import React from "react";

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import Avatar from "@mui/material/Avatar";
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function AppDrawer ({open, setOpen, children}) {
    const navigate = useNavigate();
    const [t] = useTranslation('app')
    const toggleDrawer =
      (open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }
        setOpen(!open);
      };
  
    const list = () => (
      <Box
        sx={{ width: 300 }}
        role="presentation"
        onClick={toggleDrawer(open)}
        onKeyDown={toggleDrawer(open)}
      >
        <List disablePadding>
          <ListItem disablePadding sx={{height: '70px'}}>
            <ListItemButton sx={{height: '100%'}} onClick={() => setOpen(!open)}>
                <ListItemIcon>
                    <ChevronLeftIcon /> 
                </ListItemIcon>
                <ListItemText primary={'Cerrar'} />
            </ListItemButton>
          </ListItem>
          <Divider />
          <Box p={1} marginY={2} marginTop={3} display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'} gap={3}>
            <img alt="logo_club" style={{width: 60}} src={'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Escudo_del_Club_Atl%C3%A9tico_Tigre.svg/1200px-Escudo_del_Club_Atl%C3%A9tico_Tigre.svg.png'} />
            <Typography fontSize={'large'}>Club Atlético Tigre</Typography>
          </Box>
          <Divider />
          {children.map((i) => (
            <ListItem key={i.name} onClick={() => navigate(i.path)} disablePadding sx={{height: '70px'}}>
              <ListItemButton>
                <ListItemIcon style={{width: 10, minWidth: 40}}>
                    <i.icon sx={{width: 25}} />
                </ListItemIcon>
                <ListItemText primary={t(i.name)} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    );
  
    return (
      <Drawer
        anchor={'left'}
        open={open}
        onClose={toggleDrawer(open)}
      >
        {list()}
      </Drawer>
    );
  }