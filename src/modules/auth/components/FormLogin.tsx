import React, {useEffect, useState} from "react";

import Input from "../../../core/components/Input/Input";
import Select from "../../../core/components/Select/Select";
import { PasswordIcon, RoleIcon } from "../../../core/svg";

import getDocumentTypes from "../enum/documentTypes";

import { useTranslation } from 'react-i18next';

import { AiOutlineUser } from "react-icons/ai";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function FormLogin (props) {	
    const [isShowPassword, setShowPassword] = useState(false)

    const [t, i18] = useTranslation('app');

    useEffect(() => {
        props.setCanLogin(true)
	}, [props.values, props.setCanLogin])
    // .document, props.values.password, props.values.documentType, 

    return (
        <>
            <div className="pb-39px">
                <Select
                    options={getDocumentTypes(i18.language)}
                    placeholder={t('modules.user.documentType.label')}
                    onChange={(value) => props.setValues({...props.values, documentType: value})}
                    prefix={<RoleIcon className="ml-18px" />}
                />
            </div>
            <div className="pb-39px">
                <Input
                    placeholder={t('modules.user.document.label')}
                    type="number"
                    onChange={(value) => props.setValues({...props.values, document: value})}
                    prefix={<AiOutlineUser className="ml-18px opacity-50" />}
                />
            </div>
            <div className="pb-20px">
                <Input
                    placeholder={t('modules.user.password.label')}
                    type={isShowPassword ? "text" : "password"}
                    onChange={(value) => props.setValues({...props.values, password: value})}
                    prefix={<PasswordIcon className="ml-18px" />}
                    suffix={isShowPassword ? <FaEyeSlash
                        className={`mr-18px text-gray-400 select-none cursor-pointer`}
                        onClick={() => setShowPassword(previousValue => !previousValue)}
                    /> : <FaEye
                        className={`mr-18px text-gray-400 select-none cursor-pointer`}
                        onClick={() => setShowPassword(previousValue => !previousValue)}
                    />}
                    autoComplete="current-password"
                />
            </div>
        </>
    )
}