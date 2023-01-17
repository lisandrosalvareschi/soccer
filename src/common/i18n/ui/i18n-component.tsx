import { Box, Button, Menu, MenuItem, Typography, Grid } from '@mui/material';
import React from 'react';
import { useState, useEffect } from 'react';
import ReactCountryFlag from 'react-country-flag';
// import { useSelector, useDispatch } from 'react-redux';
// import { selectedLanguageSelector } from '../../../Redux/Actions/action';
import { useTranslation } from 'react-i18next';

export const I18nSelectorComponent = ({sx, xs, colorOption}) => {
    // const dispatch = useDispatch();
    const languages = [{ lng: 'en', flag: 'gb', name: 'English' }, { lng: 'es', flag: 'es', name: 'Español' }]
    const [t, i18next] = useTranslation('app');
    const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
      t('')
      setAnchorEl(event.currentTarget);
    };
  
    const handleSelectLanguage = (language) => {
      const lng = languages.filter(x => x.lng === language)[0];
      setSelectedLanguage(lng)
      i18next.changeLanguage(lng.lng)
      handleClose();
    };

    useEffect(() => {
      if(i18next.language) {
        const lng = languages.filter(x => x.lng === i18next.language)[0];
        return setSelectedLanguage(lng)
      } else {
        return setSelectedLanguage(languages[0])
      }
    }, [i18next.language])
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    if ((languages || []).length <= 1) {
      return null;
    }
    
    return (
      <Grid sx={sx} item xs={xs}>
        <Button id="basic-button" color="secondary" style={{ color: colorOption || 'black', fontWeight: 600 }} onClick={handleClick}>
          <Box component={ReactCountryFlag} countryCode={selectedLanguage.flag} svg sx={{ fontSize: '1.5rem', mr: 1 }} />
          {selectedLanguage.lng.toUpperCase()}
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          {languages?.map((lng, index) => (
            <MenuItem onClick={() => handleSelectLanguage(lng.lng)} key={index}>
              <Typography variant="button">
                <Box component={ReactCountryFlag} countryCode={lng.flag} svg sx={{ fontSize: '1.5em', mr: 1, color: colorOption }} />
                {lng.name}
              </Typography>
            </MenuItem>
          ))}
        </Menu>
      </Grid>
    );
  };