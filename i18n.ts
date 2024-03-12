import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { pt } from "./src/translations/pt";
import { en } from "./src/translations/en";

const resources = {
  en,
  pt,
};

i18n.use(initReactI18next).init({
  compatibilityJSON: "v3",
  resources,
  lng: "pt", // Idioma padrão
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
