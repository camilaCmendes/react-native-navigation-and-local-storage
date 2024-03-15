import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { NativeModules, Platform } from "react-native";
import { en } from "./src/translations/en";
import { pt } from "./src/translations/pt";

const resources = {
  en,
  pt,
};

const deviceLanguage =
  Platform.OS === "ios"
    ? NativeModules.SettingsManager.settings.AppleLocale // iOS
    : NativeModules.I18nManager.localeIdentifier; // Android

i18n.use(initReactI18next).init({
  compatibilityJSON: "v3",
  resources,
  lng: deviceLanguage || "en", // Idioma padrão
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
