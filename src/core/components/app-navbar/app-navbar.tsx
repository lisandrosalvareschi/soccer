import { Box } from "@mui/system";
import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Logout from '@mui/icons-material/Logout';
import Settings from '@mui/icons-material/Settings';
import Person from '@mui/icons-material/Person';
import { Grid, Menu, MenuItem, ListItemIcon, Avatar } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { useSelector, useDispatch } from 'react-redux';
import { I18nSelectorComponent } from "../../../common/i18n/ui/i18n-component";
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { logout } from "../../../modules/auth/redux/actions";
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from "@mui/material/Badge";

const AppBarComponent = ({ handleDrawerToggle }) => {
  //  @ts-ignore. @ts-expect-error.
  const { currentUser } = useSelector(s => s.user)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>();
  const open = Boolean(anchorEl);
  const {i18n} = useTranslation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  React.useEffect(() => {}, [i18n.language])
  
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: "rgba(0,0,240,.7)", height: '70px' }}>
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
          <Grid item>
            <I18nSelectorComponent 
              sx={{position: 'relative', gap: .5, right: 0, top: 0, background: 'transparent', border: '2px solid white', margin: 2, borderRadius: 2, padding: .5}} 
              xs={10} 
              colorOption={'white'} 
            />
          </Grid>
          <Grid item>
            <Badge badgeContent={4} color="error">
              <NotificationsIcon color="success" style={{color: 'white'}} />
            </Badge>
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
              <Avatar sx={{ width: 45, height: 45 }}>{currentUser.firstName[0].toUpperCase()}</Avatar>
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
                    mr: 1.5,
                    pX: 2,
                    pY: 1
                }
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={() => navigate('/profile')} sx={{paddingRight: 2, width: '100%'}}>
          <ListItemIcon>
            <Person fontSize="small" /> 
          </ListItemIcon>
          Profile 
        </MenuItem>
        <MenuItem onClick={() => navigate('/settings')}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        {/* @ts-ignore. @ts-expect-error. */}
        <MenuItem onClick={() => {dispatch(logout()); navigate('/login')}}>
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