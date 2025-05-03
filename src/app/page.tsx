"use client";
import { motion } from "framer-motion";


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center py-10">
      <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold  text-center text-gray-800 mb-4">
        👋 สวัสดีครับ, ผม Sahaphap prommanok 
      </h1>
      <p className="text-lg md:text-xl  text-gray-600 mb-6 text-center max-w-xl">
        ยินดีต้อนรับสู่ Portfolio ของผม ที่นี่คุณจะได้เห็นผลงาน และเรียนรู้เกี่ยวกับตัวผมมากขึ้น
      </p>
 
      <div className="flex space-x-4">
      <motion.button
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
  className="bg-green-500 text-white p-2 rounded"
>
  Hover & Click me
</motion.button>
<motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-red-200 p-4 rounded"
    >
      I fade in and move up!
    </motion.div>

    
      </div>
    </div>
  );
}
