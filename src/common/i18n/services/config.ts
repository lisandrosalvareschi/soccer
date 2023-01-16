import { merge } from 'lodash';

import app_en from './../translations/en.json';
import app_es from './../translations/es.json';

let config = {
    interpolation: {
        escapeValue: true,
    },
    lng: 'en'
};

export const addResources = (lng: string, ns: string, resources: any) => {
    config = merge({}, config, {
        resources: {
            [lng]: {
                [ns]: resources,
            },
        },
    });
};

export const getConfig = () => {
    addResources('es', 'app', app_es);
    addResources('en', 'app', app_en);

    return config;
};
