/*
 * @Date: 2024-05-23 13:46:14
 * @Description: description
 */
"use client";

import { useEffect, useState } from "react";
import i18next from "i18next";
import { initReactI18next, useTranslation as useTranslationOrg } from "react-i18next";
import { useCookies } from "react-cookie";
import resourcesToBackend from "i18next-resources-to-backend";
import languageDetector from "i18next-browser-languagedetector";
import siteMetadata from "@/data/siteMetadata";

const { fallbackLanguage: defaultLocale, languages: locales } = siteMetadata;
export const cookieName = "i18next";

const runsOnServerSide = typeof window === "undefined";

i18next
  .use(initReactI18next)
  .use(languageDetector)
  .use(resourcesToBackend((language, namespace) => import(`./locales/${language}/${namespace}.json`)))
  .init({
    supportedLngs: locales,
    fallbackLng: defaultLocale,
    lng: defaultLocale,
    fallbackLng: "basic",
    defaultNS: "basic",
    ns: "basic",
    lng: undefined,
    detection: {
      order: ["path", "htmlTag", "cookie", "navigator"],
    },
    preload: runsOnServerSide ? locales : [],
  });

export function useTranslation(lng, ns, options) {
  const [cookies, setCookie] = useCookies([cookieName]);
  const ret = useTranslationOrg(ns, options);
  const { i18n } = ret;
  const [activeLng, setActiveLng] = useState(i18n.resolvedLanguage);
  console.log(runsOnServerSide, lng, i18n.resolvedLanguage, 43);
  /* 直接隔断 */
  if (runsOnServerSide && lng && i18n.resolvedLanguage !== lng) {
    i18n.changeLanguage(lng);
  }
  useEffect(() => {
    if (activeLng === i18n.resolvedLanguage) return;
    setActiveLng(i18n.resolvedLanguage);
  }, [activeLng, i18n.resolvedLanguage]);
  useEffect(() => {
    if (!lng || i18n.resolvedLanguage === lng) return;
    i18n.changeLanguage(lng);
  }, [lng, i18n]);
  useEffect(() => {
    if (cookies.i18next === lng) return;
    setCookie(cookieName, lng, { path: "/" });
  }, [lng, cookies.i18next]);
  
  return ret;
}
