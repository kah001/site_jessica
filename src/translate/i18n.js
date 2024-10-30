import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { messages} from './languages'

i18n
    .use(LanguageDetector) //isso faz com que ele detecte a linguagem do navegador do usuário 
    .init({
        debug: false,
        defaultNS: 'translations',
        fallbackLng: 'pt',
        ns: ['translations'],
        resources: messages
    })

export {i18n}