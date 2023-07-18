import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en } from "./en";
import { hy } from "./hy";

i18n.use(initReactI18next).init({
    resources: {
        en: { translation: en },
        hy: { translation: hy }
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false }
})

i18n.on('languageChanged', (lang) => {
    const html = document.querySelector('html');
    html && html.setAttribute('lang', lang);
});

export default i18n;