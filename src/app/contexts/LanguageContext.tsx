"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import en from "../locales/en";
import th from "../locales/th";

type Language = "en" | "th"; // กำหนด type ของภาษา
const translations = { en, th}; // กำหนดค่าเริ่มต้นของภาษา


const LanguageContext = createContext<{  //เป็นฟังก์ชัน React ที่ใช้สร้าง ContextZ
    lang: Language; // ภาษา
    setLang: (lang: Language) => void; // ฟังก์ชันตั้งค่าภาษา
    t: (key: keyof typeof en) => string | string[] | object; // กำหนด type ของ t เป็น string หรือ array ของ string หรือ object
}>({
    lang: "en", // ภาษาเริ่มต้น
    setLang: () => {},  // ฟังก์ชันว่างๆ ป้องกัน error
    t: (key) => key, // คืนค่าคำเดิม ถ้ายังไม่มีคำแปล

});

 const useLanguage = () =>  useContext(LanguageContext); // ฟังก์ชันที่ใช้สำหรับเรียกใช้งานภาษา

 function LanguageProvider  ({ children }: { children: ReactNode })  {
    const [lang, setLang] = useState<Language>("en"); // กำหนด ให้เป็น en เริ่มต้น

    const t = (key:  keyof typeof en) =>  translations[lang][key] || key; // keyof typeof en  คือ key ที่ส่งเข้ามาในฟังก์ชัน t ต้องเป็นชื่อ key ที่มีใน en
     
    return (
        <LanguageContext.Provider value={{ lang, setLang, t }}> {/* ส่งค่า lang, setLang, t ไปยัง LanguageContext.Provider */}
            {children}
        </LanguageContext.Provider>
    );
};
export {useLanguage, LanguageProvider};