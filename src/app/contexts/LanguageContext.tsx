"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import en from "../locales/en";
import th from "../locales/th";

type Language = "en" | "th"; 
const translations = { en, th};


const LanguageContext = createContext<{ 
    lang: Language; 
    setLang: (lang: Language) => void; 
    t: (key: keyof typeof en) => string | string[] | object; // กำหนด type ของ t เป็น string หรือ array ของ string หรือ object
}>({
    lang: "en",
    setLang: () => {},
    t: (key) => key,

});

export const useLanguage = () =>  useContext(LanguageContext);

export default function LanguageProvider ({ children }: { children: ReactNode })  {
    const [lang, setLang] = useState<Language>("en");

    const t = (key:  keyof typeof en) =>  translations[lang][key] || key; // keyof typeof en  คือ key ที่ส่งเข้ามาในฟังก์ชัน t ต้องเป็นชื่อ key ที่มีใน en
     
    return (
        <LanguageContext.Provider value={{ lang, setLang, t }}>
            {children}
        </LanguageContext.Provider>
    );
}