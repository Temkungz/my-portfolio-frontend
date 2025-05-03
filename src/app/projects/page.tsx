"use client";
import {motion} from "framer-motion";
import { useEffect, useState } from "react";

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">

        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
          🚀 ผลงานของฉัน
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* การ์ดผลงานที่ 1 */}
          <motion.div className="bg-white rounded-lg shadow-md overflow-hidden"
                      whileHover={{ scale: 1.05}}
                      whileTap={{scale: 0.9}}>
          <img src="https://placehold.co/400x200/png" alt="Project 1" className="w-full"/>
          <div className="p-4">
              <h2 className="text-xl font-bold text-gray-800">ชื่อผลงาน 1</h2>
              <p className="text-gray-600 mt-2">คำอธิบายสั้นๆ ของผลงาน 1</p>
            </div>
          </motion.div>

          {/* การ์ดผลงานที่ 2 */}
          <motion.div className="bg-white rounded-lg shadow-md overflow-hidden"
                      whileHover={{ scale: 1.05}}
                      whileTap={{scale: 0.9}}>
          <img src="https://placehold.co/400x200/png" alt="Project 2" className="w-full"/>
          <div className="p-4">
              <h2 className="text-xl font-bold text-gray-800">ชื่อผลงาน 2</h2>
              <p className="text-gray-600 mt-2">คำอธิบายสั้นๆ ของผลงาน 2</p>
            </div>
          </motion.div>

          {/* การ์ดผลงานที่ 3 */}
          <motion.div className="bg-white rounded-lg shadow-md overflow-hidden"
                      whileHover={{ scale: 1.05}}
                      whileTap={{scale: 0.9}}>
          <img src="https://placehold.co/400x200/png" alt="Project 3" className="w-full"/>
          <div className="p-4">
              <h2 className="text-xl font-bold text-gray-800">ชื่อผลงาน 3</h2>
              <p className="text-gray-600 mt-2">คำอธิบายสั้นๆ ของผลงาน 3</p>
            </div>
          </motion.div>
          
        </div>

      </div>
    </div>
  );
}
