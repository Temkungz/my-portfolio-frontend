"use client" //ทำให้สามารถใช้ hook อย่าง useState และฟีเจอร์ที่ขึ้นอยู่กับ browser ได้
import {useState} from "react"; //ใช้สำหรับจัดการ state ภายใน component function ซึ่งในที่นี้ใช้ควบคุมสถานะว่าเมนู (Menu Links) เปิดหรือปิดอยู่
import Link from "next/link"; //Link ช่วยให้การนำทางในแอป Next.js นั้นเป็นแบบ client-side routing (ไม่โหลดหน้าใหม่ทั้งหมด)
import { motion } from "framer-motion";

export default function Header(){
    const [isOpen, setIsOpen] = useState(false); {/*•isOpen เป็น state ที่เก็บสถานะของเมนู (เช่น เปิดหรือปิด)
                                                    •setIsOpen คือฟังก์ชันสำหรับเปลี่ยนค่า state นี้*/}

    return(
        <header className="bg-white shadow fixed top-0 left-0 right-0 ">
            <nav className="container mx-auto flex items-center justify-between px-4 py-4 opacity-55">
                <div className="text-xl font-bold">
                    <Link href="/">My Portfolio</Link>
                </div>

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
                              absolute lg:static top-16 right-0 bg-white lg:bg-transparent w-full lg:w-auto lg:flex 
                              space-y-4 lg:space-y-0 lg:space-x-4 p-4 lg:p-0 shadow lg:shadow-none`}>
                    <motion.li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></motion.li>
                    <li><Link href="/about" onClick={() => setIsOpen(false)}>About</Link></li>
                    <li><Link href="/projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
                    <li><Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}