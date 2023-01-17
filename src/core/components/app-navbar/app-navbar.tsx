import { Box } from "@mui/system";
import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Logout from '@mui/icons-material/Logout';
import Settings from '@mui/icons-material/Settings';
import PersonAdd from '@mui/icons-material/PersonAdd';
import { Avatar, Grid, Menu, MenuItem, Divider, ListItemIcon } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { useSelector } from 'react-redux';
import { I18nSelectorComponent } from "../../../common/i18n/ui/i18n-component";
import { useTranslation } from 'react-i18next';

const AppBarComponent = ({ handleDrawerToggle }) => {
  //  @ts-ignore. @ts-expect-error.
  const { currentUser } = useSelector(s => s.user)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>();
  const open = Boolean(anchorEl);
  const {i18n} = useTranslation();

  React.useEffect(() => {}, [i18n.language])
  
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: currentUser.userClub.primaryColor, height: '70px' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => handleDrawerToggle()}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {currentUser.name}
          </Typography>
          <Grid xs={1}>
            <I18nSelectorComponent 
              sx={{position: 'relative', gap: .5, right: 0, top: 0, background: 'transparent', border: '2px solid white', margin: 2, borderRadius: 2, padding: .5}} 
              xs={10} 
              colorOption={'white'} 
            />
          </Grid>
          <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <Avatar sx={{ width: 45, height: 45 }}>{currentUser.name[0].toUpperCase()}</Avatar>
            </IconButton>
          </Box>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
                elevation: 0,
                sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                    },
                    '&:before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                    },
                }
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default function AppNavBar (props) {
    return (
        <Grid container>
           <Box className="w-full flex" sx={{ justifyContent: 'center'}}>
                <AppBarComponent {...props} />
            </Box>
        </Grid>
    )
}