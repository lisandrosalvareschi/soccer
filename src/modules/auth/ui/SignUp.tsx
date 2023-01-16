import React, {useState} from 'react';

import bgLogin from '../assets/login-bg.jpg';
import Imagen from '../assets/escudo.png';

import { styled } from '@mui/system';
import { Box, Grid, Container, Typography } from "@mui/material";

// import {Link} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { I18nSelectorComponent } from '../../../common/i18n/ui/i18n-component';
import FormSignUp from '../components/FormSignUp';
import FooterSignUp from '../components/FooterSignUp';

const StyledPaper = styled(Box)({
    height: '100vh',
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
});

const SignUp = () => {
    const [canSignUp, setCanSignUp] = useState(false);

	const [t] = useTranslation('app');

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
                <StyledPaper>
                    <I18nSelectorComponent 
                        sx={{position: 'absolute', right: 15, top: 15, background: 'white', margin: 2, borderRadius: 2, padding: .5}} 
                        xs={10} 
                        colorOption={'black'} 
                    />
                    <Container maxWidth="sm" sx={{backgroundColor: 'rgba(0, 0, 0, .5)', m: 1, p: 1, borderRadius: 2}}>
                        <Box sx={{ textAlign: 'center' }}>
                        <img src={Imagen} style={{ maxHeight: '100px', margin: '0 auto' }} alt={'logo_club'} />
                        <Typography sx={{ color: 'white', fontWeight: 900, fontSize: '1.4rem', marginTop: '5px' }}>{t('modules.auth.register.title')}</Typography>
                        <Typography  sx={{ color: 'white', fontWeight: 600, fontSize: '1rem', marginBottom: '25px' }}>{t('modules.account.register.subtitle')}</Typography>
                        <FormSignUp setCanLogin={setCanSignUp} />
                        <FooterSignUp canSignUp={canSignUp} />
                        </Box>
                    </Container>
                </StyledPaper>
            </Grid>
		</Box>
	)
}

export default SignUp