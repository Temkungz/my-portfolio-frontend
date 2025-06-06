"use client" //ทำให้สามารถใช้ hook อย่าง useState และฟีเจอร์ที่ขึ้นอยู่กับ browser ได้
import {useState} from "react"; //ใช้สำหรับจัดการ state ภายใน component function ซึ่งในที่นี้ใช้ควบคุมสถานะว่าเมนู (Menu Links) เปิดหรือปิดอยู่
import Link from "next/link"; //Link ช่วยให้การนำทางในแอป Next.js นั้นเป็นแบบ client-side routing (ไม่โหลดหน้าใหม่ทั้งหมด)
import { motion, spring } from "framer-motion";
import ButtonENTH from "./ButtonENTH";
import { useLanguage } from "../contexts/LanguageContext";

export default function Header(){
    const [isOpen, setIsOpen] = useState(false); {/*•isOpen เป็น state ที่เก็บสถานะของเมนู (เช่น เปิดหรือปิด)•setIsOpen คือฟังก์ชันสำหรับเปลี่ยนค่า state นี้*/}
    const {t} = useLanguage();   // กำหนด type ของ t เป็น string หรือ array ของ string                                            

    if(!Array.isArray(t)) return null; // ถ้าไม่ใช่ array ก็ให้เป็น null
    
    return(
        <header className="fixed top-0 left-0 right-0 bg-white/70 backdrop-blur-lg shadow z-[999] " >
            <nav className="container mx-auto flex items-center justify-between px-4 py-4">
                <Link href="/" onClick={() => setIsOpen(false)}> {/*legacyBehavior จำเป็นเมื่อใช้ Link + motion.a*/}
                    <motion.div
                    // onMouseEnter={() => setActive(true)}
                    // onMouseLeave={() => setActive(false)}
                      whileHover={{ paddingLeft: 8, paddingRight: 8}}
                      whileTap={{ scale: 0.9 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="cursor-pointer hover:bg-black hover:text-white transition-colors duration-300  rounded-full text-xl font-bold">
                      {t("myportfolio")}
                    </motion.div>
                </Link>

                {/* block element lg:hidden คือซ่อนเมื่อหน้าเว็บไซด์แสดงผลที่ขนาด lg (>= 1024px) เมื่อคลิกปุ่มจะทำให้ค่า isOpen เป็น true หรือก็คือเปิดเมนู hamburger */ }
                <button className="block lg:hidden text-black" onClick={()=>setIsOpen(!isOpen)}>

                    {/* w-6 h-6 (1.5rem หรือ 24px)มีไว้เพื่อแม็ปภาพ SVG กับขนาดแสดงผลจริง ถ้าไม่มีมันจะไม่แสดงภาพ SVG */}
                    {/*stroke="currentColor": กำหนดให้เส้น (stroke) ใช้สีเดียวกับ currentColor ซึ่งมักจะมาจาก text-black ที่กำหนดไว้ในปุ่ม*/}
                    {/*fill="none"mกำหนดให้ไม่มีการเติมสีภายในของ SVG*/}
                    {/* [0 0] 2 ตัวแรกคือ x y ตามลำดับ และตำแหน่งที่ [24 24] ความกว้าง ความสูง ตามลำดับ */}
                    <svg className=
                        {`w-6 h-6 transition-transform duration-300 ease-in-out active:scale-110`}
                        fill="none"
                        stroke="currentColor" 
                        viewBox="0 0 24 24">
                            
                            {/* strokeLinecap="round": กำหนดให้ปลายของเส้นมีความโค้งมน ทำให้ดูนุ่มนวลขึ้น
	                            strokeLinejoin="round": กำหนดการเชื่อมต่อระหว่างเส้น (มุม) ให้เป็นแบบโค้งมน
	                        	strokeWidth={2}: กำหนดความหนาของเส้นเป็น 2 หน่วย*/}
                            {/*	M4 5h16: ย้ายปากกาไปที่ตำแหน่ง (4,5) ภายในระบบพิกัด (ซึ่งอยู่ใน viewBox ที่มีขนาด 24x24)
                                h16: วาดเส้นแนวนอนไปทางขวาเป็นระยะ 16 หน่วย*/}
                            <path strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M4 5h16M4 12h16M4 19h16">
                            </path>             
                    </svg>
                </button>
                
                {/* Menu Links */}
                {/*	•	ถ้า isOpen เป็น true ให้เพิ่มคลาส "block" (เพื่อให้ <ul> แสดงผล)
	                •	ถ้า isOpen เป็น false ให้เพิ่มคลาส "hidden" (ซ่อน <ul>)*/}
                <ul className={`${isOpen ? "block" : "hidden" } 
                              absolute lg:static top-16 font-bold right-0 bg-white lg:bg-transparent w-full lg:w-auto lg:flex 
                              space-y-4 lg:space-y-0 lg:space-x-4 p-4 lg:p-0 shadow lg:shadow-none z-[999]     `}>
                             {/* ใส่ z-[999] เพราะให้เมนู link อยู่เหนือ curve transition ที่ทำไว้ */}

                   <Link href="/" onClick={() => setIsOpen(false)}> {/*legacyBehavior จำเป็นเมื่อใช้ Link + motion.a*/}
                    <motion.li
                      whileHover={{ paddingLeft: 8, paddingRight: 8}}
                      whileTap={{ scale: 0.9 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="cursor-pointer hover:bg-black hover:text-white transition-colors duration-300  rounded-full">
                      {t("home")}
                    </motion.li>
                    </Link>

                    <Link href="/about" onClick={() => setIsOpen(false)}>
                    <motion.li
                      whileHover={{ paddingLeft: 8, paddingRight: 8}}
                      whileTap={{ scale: 0.9 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="cursor-pointer hover:bg-black hover:text-white transition-colors duration-300  rounded-full">
                      {t("about")}
                    </motion.li>
                    </Link>

                    <Link href="/projects" onClick={() => setIsOpen(false)}>
                    <motion.li
                      whileHover={{ paddingLeft: 8, paddingRight: 8}}
                      whileTap={{ scale: 0.9 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="cursor-pointer hover:bg-black hover:text-white transition-colors duration-300  rounded-full">
                      {t("projects")}
                    </motion.li>
                    </Link>

                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                    <motion.li
                      whileHover={{ paddingLeft: 8, paddingRight: 8}}
                      whileTap={{ scale: 0.9 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="cursor-pointer hover:bg-black hover:text-white transition-colors duration-300  rounded-full">
                      {t("contact")}
                    </motion.li>
                    </Link>
                    <ButtonENTH/>

                </ul>
            </nav>
        </header>
    );
}