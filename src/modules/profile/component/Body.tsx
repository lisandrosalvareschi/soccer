import React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';

import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import PaidIcon from '@mui/icons-material/Paid';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import SettingsIcon from '@mui/icons-material/Settings';
import Skeleton from '@mui/material/Skeleton/Skeleton';
import { Grid } from '@mui/material';
import { Divider } from '@material-ui/core';
import Typography from '@mui/material/Typography';
import Input from '../../../core/components/Input/Input';
import { useSelector } from 'react-redux';
import { AiOutlineUser } from 'react-icons/ai';
import { useTranslation } from 'react-i18next';
import { RoleIcon } from '../../../core/svg/index';
import { getDocumentTypes } from '../../auth/enum/documentTypes';
import Select from '../../../core/components/Select/Select';

const sxButton = {
    color: 'white', 
    height: '100%',
    padding: '.25rem',
    '&:hover': {
        backgroundColor: 'transparent',
        color: 'white'
    },
    '&:active':{
        borderLeft: 'none',
    },
    '&.Mui-selected':{
        backgroundColor:'white',
        color: 'rgba(0, 0, 240, 0.5)'
    },
    '&.Mui-selected svg':{
        color: 'rgba(0, 0, 240, 0.5)'
    },
    '.MuiSvgIcon-root':{
        color:'white' 
    },
    '.MuiBottomNavigationAction-label':{
        fontWeight: 600,
        marginTop: .5
    }       
}

export default function Body() {
  const [value, setValue] = React.useState(0);
  const [loading, setLoading] = React.useState(true);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    (ref.current as HTMLDivElement).ownerDocument.body.scrollTop = 0;
  }, [value]);

  React.useEffect(() => {
    setTimeout(() => {
        setLoading(false)
    }, 10000);
  })

  return (
    <Box className="w-full my-10px mx-10px flex" sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />      
      <Paper className="w-full flex flex-col" sx={{backgroundColor: 'rgba(0, 0, 240, 0.5)', height: '100%'}} elevation={3}>
        <BottomNavigation
          sx={{backgroundColor: 'transparent', height: '100%', justifyContent: 'flex-start'}}
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
            <BottomNavigationAction 
                sx={sxButton}
                label={loading ? <Skeleton variant='rectangular' width="4rem" height="1rem" /> : "Personal Info"} 
                icon={loading ? <Skeleton variant='rectangular' width="1em" height="1em" /> : <PersonIcon />} 
            />
            <BottomNavigationAction 
                sx={sxButton}
                label={loading ? <Skeleton variant='rectangular' width="4rem" height="1rem" /> : "Family Group"} 
                icon={loading ? <Skeleton variant='rectangular' width="1em" height="1em" /> : <GroupIcon />} 
            />
            <BottomNavigationAction 
                sx={sxButton} 
                label={loading ? <Skeleton variant='rectangular' width="4rem" height="1rem" /> : "Movements"} 
                icon={loading ? <Skeleton variant='rectangular' width="1em" height="1em" /> : <PaidIcon />} 
            />
            <BottomNavigationAction 
                sx={sxButton} 
                label={loading ? <Skeleton variant='rectangular' width="4rem" height="1rem" /> : "Category"} 
                icon={loading ? <Skeleton variant='rectangular' width="1em" height="1em" /> : <AssignmentIndIcon />} 
            />
            <BottomNavigationAction 
                sx={sxButton}
                label={loading ? <Skeleton variant='rectangular' width="4rem" height="1rem" /> : "Setting"} 
                icon={loading ? <Skeleton variant='rectangular' width="1em" height="1em" /> : <SettingsIcon />} 
            />
        </BottomNavigation>
        <Menu value={value} />
      </Paper>
    </Box>
  );
};

const values = [
    {value: 0, name: 'Personal Info'}, 
    {value: 1, name: 'Family Group'}, 
    {value: 2, name: 'Movements'}, 
    {value: 3, name: 'Category'}, 
    {value: 4, name: 'Setting'}
]

const Menu = ({value}) => {
    // @ts-ignore. @ts-expect-error.
    const {currentUser} = useSelector(s => s.user);
    const [t, i18] = useTranslation('app');
    return (
        <Grid container sx={{ backgroundColor: "white" }} className="p-20px">
            <Typography fontSize={'1rem'} marginBottom={1} textTransform={'uppercase'} fontWeight={900}>{values[value].name}</Typography>
            <Divider orientation="horizontal" className='w-full'  />
            <Grid container marginTop={2} gap={.5}>
                <Grid item xs={5} sm={4} md={3.5}>
                <div className="pb-39px">
                    <span>{t('modules.user.firstName.label')}</span>
                    <Input
                        placeholder={t('modules.user.firstName.label')}
                        type="text"
                        value={currentUser.firstName}
                        // onChange={(value) => setFirstName(value)}
                        prefix={<AiOutlineUser className="ml-18px opacity-50" />}
                    />
                </div>
                </Grid>
                <Grid item xs={5} sm={4} md={3.5}>
            <div className="pb-39px">
                <span>{t('modules.user.lastName.label')}</span>
                <Input
                    placeholder={t('modules.user.lastName.label')}
                    type="text"
                    value={currentUser.lastName}
                    // onChange={(value) => setLastName(value)}
                    prefix={<AiOutlineUser className="ml-18px opacity-50" />}
                />
            </div>
                </Grid>
                <Grid item xs={5} sm={4} md={3.5}>
                    <div className="pb-39px">
                    <span>{t('modules.user.email.label')}</span>
                <Input
                    placeholder={t('modules.user.email.label')}
                    type="email"
                    // onChange={(value) => setEmail(value)}
                    value={currentUser.email}
                    prefix={<AiOutlineUser className="ml-18px opacity-50" />}
                />
                    </div>
                </Grid>
                <Grid item xs={5} sm={4} md={3.5}>
                    <div className="pb-39px">
                        <span>{t('modules.user.documentType.label')}</span>
                        <Select
                            options={getDocumentTypes(i18.language)}
                            placeholder={t('modules.user.documentType.label')}
                            // onChange={(value) => setEmail(value)}
                            prefix={<RoleIcon className="ml-18px" />}
                            value={currentUser.documentType}
                            autoComplete="email"
                        />
                    </div>
                </Grid>
                <Grid item xs={5} sm={4} md={3.5}>
                    <div className="pb-39px">
                    <span>{t('modules.user.document.label')}</span>
                    <Input
                    placeholder={t('modules.user.document.label')}
                    type="number"
                    value={currentUser.document}
                    // onChange={(value) => setDocument(Number(value))}
                    prefix={<AiOutlineUser className="ml-18px opacity-50" />}
                    />
                    </div>
                </Grid>
            </Grid>
        </Grid>
    )
}