import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'
import en from './translation/en/en.json';
import fr from './translation/fr/fr.json';
const resources = {

    fr,en
}

i18n.use(initReactI18next).init({
lng:'fr',
fallback: 'eng',
resources,

interpolation:{
    escapeValue:false
}


})
export default i18n 