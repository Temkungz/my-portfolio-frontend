"use client";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {motion} from "framer-motion";
import { useState } from "react";
import Image from "next/image";

import FadeInPage from "../components/fade";
import ImageModal from "../ProjectComponent/Modal";

import { useLanguage } from "../contexts/LanguageContext";

export default function ProjectsPage() {
  const [modalOpen, setModalOpen] = useState(false); // false คือ modal ปิด เป็นค่า default
  const [modalImage, setModalImage] = useState(""); // รูปภาพที่แสดงใน modal
  const {t} = useLanguage() as {t: (key: string) => string | string[]}; // กำหนด type ของ t เป็น string หรือ array ของ string

  if(!String(t)) return null; // ถ้าไม่ใช่ string ก็ให้เป็น null
  
  // ฟังก์ชันสำหรับเปิด modal
  const openModal = (imgSrc: string) => { // imgSrc คือรูปภาพที่จะแสดงใน modal
      setModalImage(imgSrc); // รูปภาพที่แสดงใน modal
      setModalOpen(true); // เปิด modal
    };
  
    // ฟังก์ชันสำหรับปิด modal
    const closeModal = () => {
      setModalImage(""); // รูปภาพที่แสดงใน modal จะถูกเอาออก
      setModalOpen(false); // ปิด modal
    };
    
  return (
    
    <div className="min-h-screen bg-gray-100 py-20">
          <FadeInPage>
          <ImageModal openModal={modalOpen} imgSrc={modalImage} closeModal={closeModal}/> {/* การเรียกใช้งาน modal */}

      <div className="container mx-auto px-4">

        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
          🚀 {t("projectsarticle")}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch "> {/* items-stretch คือการปรับขนาดการ์ดให้เข้ากับรูปภาพ */}
          {/* การ์ดผลงานที่ 1 */}
          <motion.div 
            whileHover={{ scale: 1.05}}
            whileTap={{scale: 0.9}}>
            <Card className="h-full">

              <Image 
                src="/image/majorrete.png"
                alt="Graduate project picture"
                width={1200}
                height={800}
                className="object-cover w-auto h-auto"
                onClick={() => openModal("/image/majorrete.png")}
              />  

              <CardHeader>
                <CardTitle>{t("projecthead1")}</CardTitle>
                <CardDescription>
                  {t("date1")}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>{t("description1")}</p>
              </CardContent>

            </Card>
          </motion.div>
        

          {/* การ์ดผลงานที่ 2 */}
          <motion.div 
            whileHover={{scale: 1.05}} 
            whileTap={{scale: 0.9}} >
            <Card className="h-full">{/* h-full ทำให้การ์ดใหญ่เท่ากัน */}
                
                <Image
                  src="/image/mnist.png"
                  alt="Mnist picture" 
                  width={1200}
                  height={800}
                  className="object-cover w-auto h-auto "
                  onClick={() => openModal("/image/mnist.png")}
                />

                <CardHeader>
                  <CardTitle>{t("projecthead2")}</CardTitle>
                  <CardDescription>
                    {t("date2")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{t("description2")}</p>
                </CardContent>

            </Card>
          </motion.div>

          {/* การ์ดผลงานที่ 3 */}
          <motion.div 
            whileHover={{scale: 1.05}} 
            whileTap={{scale: 0.9}} >
            <Card className="h-full">
            
              <Image
                src="/image/react-foundations-certificate.png"
                alt="React Foundation Certificate" 
                width={1200}
                height={800}
                className="object-cover w-auto h-auto"
                onClick={() => openModal("/image/react-foundations-certificate.png")}
              />
              
              <CardHeader>
                <CardTitle>{t("projecthead3")}</CardTitle>
                <CardDescription>
                  {t("date3")}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>{t("description3")}</p>
              </CardContent>

            </Card>
          </motion.div>
        </div>
      </div>
    </FadeInPage>
    </div>
  );
}
