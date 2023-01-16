import React from "react";
import Button from "../../../core/components/Button/Button";
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function ResetPassword({canResetPassword}) {
    const [t] = useTranslation('app');
    const navigate = useNavigate();
    return (
        <div className="flex flex-col items-center justify-center mb-10px t:flex-col items-center t:items-center gap-5px t:gap-10px">
            <Button
                disabled={!canResetPassword}
                type="submit"
                className='text-white'
                variant='black'
            >
                {t('modules.auth.forgetPassword.action')}
            </Button>
            <Typography sx={{color: 'white', fontWeight: 500}}>{t('modules.auth.login.label')}</Typography>
                <Button
                    disabled={!canResetPassword}
                    type="button"
                    className='text-white'
                    variant='magenta'
                    onClick={() => navigate('/login')}
                >
                    {t('modules.auth.login.action')}
                </Button>
            {/* </Link> */}
        </div>
    )
}