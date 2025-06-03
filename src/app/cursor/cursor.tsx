// components/CustomCursor.tsx
"use client";
import React, { useEffect, useState } from "react";
import { 
    motion, //animetion ของ framer-motion
    useMotionValue, //usemotionvalue: ใช้เก็บค่าที่เปลื่ยนแปลงเคลื่อนไหว
    useSpring //พิ่มความนุ่มนวลแบบสปริงให้กับ motion value
} from "framer-motion"; 
import { useCursor } from "./CursorContext"; // custom hook ที่ทำไว้ใน CursorContext

export default function CustomCursor() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    //สร้างตัวแปร x และ y สำหรับเก็บตำแหน่งของ cursor
    
    // เพิ่ม state สำหรับเช็คขนาดหน้าจอ
    const [isLargeScreen, setIsLargeScreen] = useState(false); // ค่าเริ่มต้นคือ false ไม่ผูก event listener และไม่แสดง custom cursor

    const smoothX = useSpring(mouseX, { stiffness: 500, damping: 30 });
    const smoothY = useSpring(mouseY, { stiffness: 500, damping: 30 });
    //🟢 ใช้ spring animation เพื่อทำให้เคอร์เซอร์เคลื่อนที่อย่าง "นุ่มนวล" (ไม่กระตุก)

    // เพิ่ม useEffect สำหรับตรวจสอบขนาดหน้าจอ
    useEffect(()=>{
        const checkScreenSize = () => {
            setIsLargeScreen(window.innerWidth >= 1280); //ถ้า >= 1280 จะเป็น true จะแสดง custom cursor แต้ถ้าน้อยกว่าจะเป็น false จะไม่แสดง custom cursor
        };
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return()=> window.addEventListener("resize", checkScreenSize);
    }, []);


    // ใช้ useEffect เพื่อผูก event กับการขยับเมาส์:
    useEffect(() => {
        if (!isLargeScreen) return; // (!กลับค่า boolean) เนื่องจากขนาดจอน้อยกว่า 1280px จะหยุด logic ใน useEffect (ไม่ผูก event) ประหยัด resource
        // true (เช่นจอใหญ่) → !isLargeScreen = false → ไม่ทำ return
        // false (จอเล็ก) → !isLargeScreen = true → ทำการ return ออกจากฟังก์ชันเลย

        const move = (e: MouseEvent) => {
            mouseX.set(e.clientX - 10);
            mouseY.set(e.clientY - 10);
            //e.clientX และ e.clientY: คือพิกัดของเมาส์ 
            //-10: ขยับให้เคอร์เซอร์อยู่กึ่งกลางของจุดเมาส์
        };
        window.addEventListener("mousemove", move);
        return () => window.removeEventListener("mousemove", move);
    }, [mouseX, mouseY, isLargeScreen]);
    
    // ถ้าจอเล็กกว่า lg หรือ 1280px ไม่ต้องแสดง custom cursor
    if (!isLargeScreen) return null;
    
    return (
        <motion.div
            style={{
                position: "fixed", //เพื่อให้ตำแหน่งอยู่นอกเหนือ document 
                top: 0,
                left: 0,
                width: 20,
                height: 20,
                borderRadius: "50%",
                backgroundColor: "black",
                pointerEvents: "none", //ไม่ให้เคอร์เซอร์บังการคลิก
                zIndex: 9999, //ให้ cursor อยู่หน้าสุดของทุก element
                x: smoothX,
                y: smoothY,
                //ใช้ค่าที่ได้จากเมาส์ (เคลื่อนที่ตามเมาส์)
            }}
        ></motion.div>
    );
}