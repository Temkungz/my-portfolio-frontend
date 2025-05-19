// components/CustomCursor.tsx
"use client";
import React, { useEffect } from "react";
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

    // const { active } = useCursor(); // 🟢 ดึง context มาใช้

    const smoothX = useSpring(mouseX, { stiffness: 500, damping: 30 });
    const smoothY = useSpring(mouseY, { stiffness: 500, damping: 30 });
    //🟢 ใช้ spring animation เพื่อทำให้เคอร์เซอร์เคลื่อนที่อย่าง “นุ่มนวล” (ไม่กระตุก)

    // ใช้ useEffect เพื่อผูก event กับการขยับเมาส์:
    useEffect(() => {
        const move = (e: MouseEvent) => {
            mouseX.set(e.clientX - 10);
            mouseY.set(e.clientY - 10);
            //e.clientX และ e.clientY: คือพิกัดของเมาส์ 
            //-10: ขยับให้เคอร์เซอร์อยู่กึ่งกลางของจุดเมาส์
        };
        window.addEventListener("mousemove", move);
        return () => window.removeEventListener("mousemove", move);
    }, [mouseX, mouseY]);
    
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