// components/FadeInPage.tsx
"use client";
import { motion, AnimatePresence } from "framer-motion";

export default function FadeInPage({children,}: {children: React.ReactNode}){
    return(
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: 40, }}
        animate={{ opacity: 1, y: 0, }}
        transition={{
            duration: 0.7,
            delay: 0.8, // เริ่มหลัง Curve
            ease: [0.38, 0, 0.38, 1] // easeInOut แบบเนียน
        }}
        exit={{ opacity: 0, y: 40, }}
        >
        {children}
      </motion.div>
    </AnimatePresence>
    );
};