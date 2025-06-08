"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";    // สำหรับ Next 13+ App Router
import { text, curve, translate } from "./anime";

// กำหนดชื่อ route
const routes = {
  "/": "Home",
  "/about": "About",
  "/projects":"Projects",
  "/contact": "Contact",
};

const anim = (variants: any) => {
  return {
    variants,
    initial: "initial",
    animate: "enter",
    exit: "exit",
  };
};

export default function Curve({
  children,
  backgroundColor = "black", //backgroundColor = สีพื้นหลังของคลื่น (default = สีดำ)

}: {
  children: React.ReactNode;
  backgroundColor?: string;
}) {
  const pathname = usePathname();
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
    //เริ่มต้นเป็น { width: 0, height: 0 } → ยังไม่รู้อะไรเลย

  }); //เก็บ width กับ height ของหน้าจอเพื่อใช้คำนวณเส้น path ของ svg


  useEffect(() => { //ใช้ useEffect เพื่อคำนวณขนาดจอเมื่อเริ่มโหลด หรือ resize
    const resize = () => {
      setDimensions({
        //resize() → เป็นฟังก์ชันที่ใช้ window.innerWidth / window.innerHeight → ดึงขนาดจอจริงจาก browser
        width: window.innerWidth,
        height: window.innerHeight,
        //window.innerWidth → ความกว้าง viewport ตอนนี้ (เช่น 1440 px)
	      //window.innerHeight → ความสูง viewport ตอนนี้
      });
    };
    resize();
    window.addEventListener("resize", resize);// ฟัง event resize
    return () => window.removeEventListener("resize", resize); //พอ setDimensions ถูกเรียก → React re-render → dimensions.width ไม่เป็น 0 แล้ว

  }, []);

  const routeTextPosition = (() => { //ฟังก์ชันที่ส่งค่า top ของ text ไปยัง anime.tsx
    switch(pathname){
      case "/":
        return "lg:top-[40%] top-[20%]";
      case "/about":
        return "lg:top-[20%] top-[15%]";
      case "/projects":
        return "lg:top-[40%] top-[20%]";
      case "/contact":
        return "lg:top-[40%] top-[20%]";
      default:
        return "lg:top-[40%] top-[20%]";
    };
  })();
  return (
    <div className="relative w-full h-full overflow-hidden" style={{ backgroundColor }}>
      {/* Background layer */}
      <div
        className={`fixed top-0 left-0 w-screen h-[calc(100vh+600px)] pointer-events-none `}
        //มันใช้ state ชื่อ dimensions เพื่อตรวจว่า “เรารู้ขนาดจอแล้วหรือยัง? โดนที่จะเช็คว่า”
        //ขนาดหน้าจอ ยังไม่ได้วัด ให้แสดง background แต่ถ้าวัดแล้ว ให้ background หาย เพื่อที่จะให้ animate ขึ้นมาแบบที่เป็น
        style={{ opacity: dimensions.width === 0 ? 1 : 0, backgroundColor }}
      />

      {/* Route text */}
      <motion.p
        {...anim(text)} //Javascript Spread syntax
        className={`absolute left-1/2 ${routeTextPosition} -translate-x-1/2 text-white text-[46px] z-30 text-center`}
      >
        {routes[pathname as keyof typeof routes]} {/*บอก ts ว่า pathname นี้มีใน route แน่นอน */}
      </motion.p>

      {/* SVG curve แสดง SVG” เฉพาะเมื่อเรารู้ขนาดหน้าจอแล้วเท่านั้น  มันไปเอาค่าจาก useEffect ของfunction resize มานั่นแหละ*/}
      {dimensions.width !== 0 && <SVG {...dimensions} backgroundColor={backgroundColor} />}
                                {/* short-circuit condition
                                ถ้า condition เป็นจริง (truthy) → render JSX
                                ถ้าเป็นเท็จ (falsy) → ไม่ทำอะไรเลย */}
      {/* Page content */}
      {children}
    </div>
  );
};

const SVG = ({ //(functional component) width, height = ขนาดของหน้าจอที่วัดได้ด้วย window.innerWidth / Height
  width,
  height,
  backgroundColor,
}: {
  width: number;
  height: number;
  backgroundColor: string;
}) => {
  //วาดเส้นโค้ง
  //ค่าพิกัดใน SVG เริ่มที่มุมซ้ายบน (0,0)
  const initialPath = ` 
    M0 300 
    Q${width / 2} 0 ${width} 300
    L${width} ${height + 300}
    Q${width / 2} ${height + 600} 0 ${height + 300}
    L0 300
  `;
  //M0 300 x=0 y=300 ลงมาจากซ้ายบน
  //Q controlX controlY endX endY => width/2 ก้คือให้คุมการวาดไว้ที่กลางหน้า svg และ y=0 
  //วาดเส้นตรงสี่เหลี่ยม
  const targetPath = `
    M0 300 
    Q${width / 2} 0 ${width} 300
    L${width} ${height}
    Q${width / 2} ${height} 0 ${height}
    L0 300
  `;

  return (
    <motion.svg
      {...anim(translate)}
      className="fixed top-0 left-0 w-screen h-[calc(100vh+600px)] pointer-events-none z-20"
    >
      <motion.path
        {...anim(curve(initialPath, targetPath))}
        fill={backgroundColor}
      />
    </motion.svg>
  );
};