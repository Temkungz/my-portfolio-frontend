// components/CursorContext.tsx
"use client";
import { createContext, useContext, useState } from "react";
//	•	createContext → ใช้สร้าง Context
//	•	useContext → ใช้เข้าถึงค่า Context
//	•	useState → ใช้สร้าง state ภายใน component

const CursorContext = createContext({
  active: false,
  setActive: (value: boolean) => {},
  text: "",
  setText: (value: string) => {},
});

export const useCursor = () => useContext(CursorContext); //custom hook สำหรับให้ component อื่นเรียกใช้ได้ง่าย

export function CursorProvider({ children }: { children: React.ReactNode }) { //➡️ สร้าง Provider component ชื่อ CursorProvider (สำหรับครอบส่วนของแอปที่อยากให้เข้าถึง context ได้)
  const [active, setActive] = useState(false);
  const [text, setText] = useState("");

  return (
    <CursorContext.Provider value={{ active, setActive, text, setText }}>
      {children}
    </CursorContext.Provider>
  );
}
