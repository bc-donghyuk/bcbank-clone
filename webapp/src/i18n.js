import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import resources from "./locales";

i18n
  .use(detector)
  .use(initReactI18next) // i18n을 react-i18next로 전달
  .init({
    resources,
    fallbackLng: "en",
    debug: false,
    ns: [
      "default",
      "errors",
      "accounts",
      "products",
      "promos",
      "homepage",
      "idv",
      "notifications",
      "dashboard",
      "switch",
      "shared",
    ],
    defaultNS: "default",

    // TODO : 주석 처리한 키가 어떤 상황에서 필요한지 알아보기

    // keySeparator: false, // char을 사용하여 키를 구분합니다.

    interpolation: {
      escapeValue: false, // xss 주입을 피하기 위해 값으로 이스케이프 전달
    },
    // react: {
    //   bindI18n: "languageChanged", // 어떤 이벤트가 다시 렌더링을 트리거하는지 false 또는 이벤트 문자열로 설정 가능
    // },
  });

export default i18n;
