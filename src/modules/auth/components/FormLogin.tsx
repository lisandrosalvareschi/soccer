import React, {useEffect, useState} from "react";

import Input from "../../../core/components/Input/Input";
import Select from "../../../core/components/Select/Select";
import { PasswordIcon, RoleIcon } from "../../../core/svg";

import { getDocumentTypes } from "../enum/documentTypes";

import { useTranslation, TFunction } from 'react-i18next';

import { AiOutlineUser } from "react-icons/ai";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Form, Formik } from 'formik';
import { requestLogin } from "../model/login/models";
import { Typography } from "@material-ui/core";
import FooterLogin from "./FooterLogin";
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';

export default function FormLogin (props) {	
    const [isShowPassword, setShowPassword] = useState(false)

    const [t, i18] = useTranslation('app');

    useEffect(() => {
        props.setCanLogin(true)
	}, [props.values, props.setCanLogin, i18.language])

    return (
        <Formik
         initialValues={props.values}
         onSubmit={() => props.onSubmit()}
         validate={v => validateLogin(v, t)}
        >
            {({setFieldValue, values, errors, handleSubmit}) => (           
                <Form>
                    <div className="pb-39px">
                        <Select
                            style={{backgroundColor: 'white'}}
                            options={getDocumentTypes(i18.language)}
                    placeholder={t('modules.user.documentType.label')}
                    onChange={(value) => setFieldValue('documentType', value)}
                    value={values.documentType}
                            prefix={<RoleIcon className="ml-18px" />}
                        />
                        {errors.documentType && (
                            <Typography style={{color: 'red'}}>{String(errors.documentType)}</Typography>
                        )}
                    </div>
                    <div className="pb-39px">
                        <Input
                            style={{backgroundColor: 'white'}}
                            placeholder={t('modules.user.document.label')}
                            type="number"
                            value={values.document}
                            onChange={(value) => setFieldValue('document', value)}
                            prefix={<AiOutlineUser className="ml-18px opacity-50" />}
                        />
                        {errors.document && (
                            <Typography className="error" style={{color: 'red'}}>{String(errors.document)}</Typography>
                        )}
                    </div>
                    <div className="pb-20px">
                        <Input
                            style={{backgroundColor: 'white'}}
                            placeholder={t('modules.user.password.label')}
                            type={isShowPassword ? "text" : "password"}
                            value={values.password}
                            onChange={(value) => setFieldValue('password',value)}
                            prefix={<PasswordIcon className="ml-18px" />}
                            suffix={isShowPassword ? <FaEyeSlash
                                className={`mr-18px text-gray-400 select-none cursor-pointer`}
                                onClick={() => setShowPassword(previousValue => !previousValue)}
                            /> : <FaEye
                                className={`mr-18px text-gray-400 select-none cursor-pointer`}
                                onClick={() => setShowPassword(previousValue => !previousValue)}
                            />}
                        />
                        {errors.password && (
                            <Typography style={{color: 'red'}}>{String(errors.password)}</Typography>
                        )}
                    </div>
                    <Link to="/reset-password" className="flex justify-end items-center text-white font-bold pb-20px" style={{width: 'max-content', marginLeft: 'auto'}}>
                        <Grid width={'max-content'}>{t('modules.auth.forgetPassword.link')}</Grid>
                    </Link>
                    <FooterLogin values={values} canLogin={true} onSubmit={props.onSubmit} />
                </Form>
            )}
        </Formik>
    )
}

const validateLogin = (obj: requestLogin, t: TFunction) => {
    const { document, documentType, password } = obj;

    const errors = {
        document: null,
        documentType: null,
        password: null
    };

    if(!document) {
        errors.document = t('modules.user.document.validRequired')
    }

    if(!documentType) {
        errors.documentType = t('modules.user.documentType.validRequired')
    }

    if(!password) {
        errors.password = t('modules.user.password.validRequired')
    }

    return errors

}