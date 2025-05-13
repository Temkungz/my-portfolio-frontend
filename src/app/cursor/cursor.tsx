// components/CustomCursor.tsx
"use client";
import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useCursor } from "./CursorContext";

export default function CustomCursor() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const { active } = useCursor(); // 🟢 ดึง context มาใช้

    const smoothX = useSpring(mouseX, { stiffness: 500, damping: 30 });
    const smoothY = useSpring(mouseY, { stiffness: 500, damping: 30 });

    useEffect(() => {
        const move = (e: MouseEvent) => {
            mouseX.set(e.clientX - 10);
            mouseY.set(e.clientY - 10);
        };
        window.addEventListener("mousemove", move);
        return () => window.removeEventListener("mousemove", move);
    }, []);

    return (
        <motion.div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: 20,
                height: 20,
                borderRadius: "50%",
                backgroundColor: "black",
                pointerEvents: "none",
                zIndex: 9999,
                x: smoothX,
                y: smoothY,
                scale: active ? 1.5 : 1, // 🟢 ขยายตอน active
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        />
    );
}