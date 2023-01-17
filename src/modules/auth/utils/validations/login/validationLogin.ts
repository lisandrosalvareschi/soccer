import { requestLogin } from "../../../model/login/models"
import { TFunction } from "i18next";

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

export {
    validateLogin
}