import React from "react";
import Button from "../../../core/components/Button/Button";
import { Typography } from '@mui/material';
import { useNavigate  } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function FooterLogin({canLogin, onSubmit, values}) {
    const [t] = useTranslation('app');
    const navigate= useNavigate();
    return (
        <React.Fragment>
        <div className="flex flex-col items-center justify-center mb-10px t:flex-col items-center t:items-center gap-5px t:gap-10px">
            <Button
                disabled={!canLogin}
                type="submit"
                className='text-white'
                onClick={() => onSubmit(values)}
                variant='black'
            >
                {t('modules.auth.login.action')}
            </Button>
            <Typography sx={{color: 'white', fontWeight: 500}}>{t('modules.user.create.label')}</Typography>
            <Button
                onClick={() => navigate('/sign-up')}
                disabled={!canLogin}
                type="button"
                className='text-white'
                variant='magenta'
            >
                {t('modules.auth.register.action')}
            </Button>
        </div>
        </React.Fragment>
    )
}