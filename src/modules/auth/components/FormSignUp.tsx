import React, {useEffect, useState} from "react";

import Input from "../../../core/components/Input/Input";
import Select from "../../../core/components/Select/Select";
import { RoleIcon } from "../../../core/svg";

import { getDocumentTypes } from "../enum/documentTypes";

import { useTranslation } from 'react-i18next';

import { AiOutlineUser } from "react-icons/ai";
// import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function FormSignUp ({setCanLogin}) {	
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('')
    const [repeatEmail, setRepeatEmail] = useState('')
    const [document, setDocument] = useState(0);

    const [t, i18] = useTranslation('app');

    useEffect(() => {
        setCanLogin(true)
	}, [email, firstName, lastName, repeatEmail, document])

    return (
        <>
            <div className="pb-39px">
                <Input
                    placeholder={t('modules.user.firstName.label')}
                    type="text" 
                    onChange={(value) => setFirstName(value)}
                    prefix={<AiOutlineUser className="ml-18px opacity-50" />}
                />
            </div>
            <div className="pb-39px">
                <Input
                    placeholder={t('modules.user.lastName.label')}
                    type="text"
                    onChange={(value) => setLastName(value)}
                    prefix={<AiOutlineUser className="ml-18px opacity-50" />}
                />
            </div>
            <div className="pb-39px">
                <Input
                    placeholder={t('modules.user.email.label')}
                    type="email"
                    onChange={(value) => setEmail(value)}
                    prefix={<AiOutlineUser className="ml-18px opacity-50" />}
                />
            </div>
            <div className="pb-39px">
                <Input
                    placeholder={t('modules.user.repeatEmail.label')}
                    type="email"
                    onChange={(value) => setRepeatEmail(value)}
                    prefix={<AiOutlineUser className="ml-18px opacity-50" />}
                />
            </div>
            <div className="pb-39px">
                <Select
                    options={getDocumentTypes(i18.language)}
                    placeholder={t('modules.user.documentType.label')}
                    onChange={(value) => setEmail(value)}
                    prefix={<RoleIcon className="ml-18px" />}
                    autoComplete="email"
                />
            </div>
            <div className="pb-39px">
                <Input
                    placeholder={t('modules.user.document.label')}
                    type="number"
                    onChange={(value) => setDocument(Number(value))}
                    prefix={<AiOutlineUser className="ml-18px opacity-50" />}
                />
            </div>
        </>
    )
}