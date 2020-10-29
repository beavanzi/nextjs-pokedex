import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import translationEN from "../public/locales/en/translation.json"
import translationPT from "../public/locales/pt/translation.json"

// const router = useRouter()
// const { locale, defaultLocale } = router

const resources = {
  en: {
    translation: translationEN,
  },
  pt: {
    translation: translationPT,
  },
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",
    fallbackLng: "pt",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  })

export default i18n
