const documentTypesES = [{name: 'DNI', id: 'DNI'}, {name: 'Pasaporte', id: 'Pasaporte'}, {name: 'LE', id: "3"}, {name: 'LC', id: "4"}, {name: 'CI', id: "5"}, {name: 'Otro', id: "6"}];
const documentTypesEN = [{name: 'DNI', id: "1"}, {name: 'Passport', id: "2"}, {name: 'LE', id: "3"}, {name: 'LC', id: "4"}, {name: 'CI', id: "5"}, {name: 'Otro', id: "6"}]

export default function getDocumentTypes (lng: string) {
    return lng === 'es' ? documentTypesES :
    documentTypesEN
}