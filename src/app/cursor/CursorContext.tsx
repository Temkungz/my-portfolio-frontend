// components/CursorContext.tsx
"use client";
import { createContext, useContext, useState } from "react";

const CursorContext = createContext({
  active: false,
  setActive: (value: boolean) => {},
  text: "",
  setText: (value: string) => {},
});

export const useCursor = () => useContext(CursorContext);

export function CursorProvider({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState(false);
  const [text, setText] = useState("");

  return (
    <CursorContext.Provider value={{ active, setActive, text, setText }}>
      {children}
    </CursorContext.Provider>
  );
}