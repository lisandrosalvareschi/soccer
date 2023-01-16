import React, {useEffect, useState} from "react";

import Input from "../../../core/components/Input/Input";


import { useTranslation } from 'react-i18next';

import { AiOutlineUser } from "react-icons/ai";
import getDocumentTypes from '../enum/documentTypes';
import Select from "../../../core/components/Select/Select";
import { RoleIcon } from "../../../core/svg";

export default function FormResetPassword ({setCanResetPassword}) {	
    const [email, setEmail] = useState('')
    const [documentType, setDocumentType] = useState('')

    const [t, i18] = useTranslation('app');

    useEffect(() => {
        setCanResetPassword(true)
	}, [email, documentType])

    return (
        <>
            <div className="pb-39px">
                <Select
                    options={getDocumentTypes(i18.language)}
                    placeholder={t('modules.user.documentType.label')}
                    onChange={(value) => setDocumentType(value)}
                    prefix={<RoleIcon className="ml-18px" />}
                />
            </div>
            <div className="pb-39px">
                <Input
                    placeholder={t('modules.user.document.label')}
                    type="number"
                    onChange={(value) => setEmail(value)}
                    prefix={<AiOutlineUser className="ml-18px opacity-50" />}
                />
            </div>
        </>
    )
}