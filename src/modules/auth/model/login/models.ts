import { documentTypesEnum } from '../../enum/documentTypes';

interface requestLogin {
    document: number;
    documentType: documentTypesEnum,
    password: string
}

export {
    requestLogin
}