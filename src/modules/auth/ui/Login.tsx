import React, { useState, useEffect } from 'react';

import bgLogin from '../assets/login-bg.jpg';
import Imagen from '../assets/escudo.png';

import { styled } from '@mui/system';
import { Box, Grid, Container, Typography } from "@mui/material";

import { useTranslation } from 'react-i18next';
import FormLogin from '../components/FormLogin';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/actions';
import { I18nSelectorComponent } from '../../../common/i18n/ui/i18n-component';
import SnackBar from '../../../core/components/SnackBar/snack-bar';

const StyledPaper = styled(Box)({
    height: '100vh',
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
});

const Login = () => {
    const [canLogin, setCanLogin] = useState(false);
    const navigate = useNavigate();
    const [snackBar, setSnackBar] = useState({
        message: '',
        open: false,
        type: '',
    })
    //  @ts-ignore. @ts-expect-error.
    const { loginInProgress, loginError, isAuthenticated } = useSelector((state) => state.auth);
    const [values, setValues] = useState({
        documentType: '',
        document: '',
        password: ''
    })

	const [t] = useTranslation('app');

    const dispatch = useDispatch();

    const onSubmit = async (values) => {
        // @ts-ignore. @ts-expect-error.
        dispatch(login(values));
    }

    useEffect(() => {
       if(isAuthenticated) {
        navigate('/')
       }
    }, [isAuthenticated, loginInProgress])

    useEffect(() => {
        if(loginError) { 
            setSnackBar({message: loginError, open: true, type: 'error'})
            setTimeout(() => {
                return setSnackBar({
                    message: '', 
                    open: false,
                    type: 'info'
                })
            }, 2500);
        }
    }, [loginError])

    useEffect(() => {
       if(loginInProgress) {
        return 
       }
    }, [loginInProgress])

	return (
		<Box 
            style={{height: '100%'}}
            sx={{
                backgroundImage: `url(${bgLogin})`, 
                height: '100vh', 
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Grid container>
                <SnackBar snackBar={snackBar} />
                <StyledPaper>
                   <I18nSelectorComponent 
                        sx={{position: 'absolute', right: 15, top: 15, background: 'white', margin: 2, borderRadius: 2, padding: .5}} 
                        xs={10} 
                        colorOption={'black'} 
                    />
                    <Container maxWidth="sm" sx={{backgroundColor: 'rgba(0, 0, 0, .5)', m: 1, p: 1, borderRadius: 2}}>
                        <Box sx={{ textAlign: 'center' }}>
                            <img src={Imagen} style={{ maxHeight: '100px', margin: '0 auto' }} alt={'logo_club'} />
                            <Typography sx={{ color: 'white', fontWeight: 900, fontSize: '20px', marginTop: '5px' }}>{t('modules.auth.login.title')}</Typography>
                            <Typography  sx={{ color: 'white', fontWeight: 600, fontSize: '16px', marginBottom: '25px' }}>{t('modules.auth.login.subtitle')}</Typography>
                            <FormLogin onSubmit={onSubmit} canLogin={canLogin} setCanLogin={setCanLogin} setValues={setValues} values={values}  />
                        </Box>
                    </Container>
                </StyledPaper>
            </Grid>
		</Box>
	)
}

export default Login