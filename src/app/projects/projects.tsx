"use client";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {motion} from "framer-motion";
import { useState } from "react";
import Image from "next/image";

import FadeInPage from "../components/fade";
import ImageModal from "../ProjectComponent/Modal";

export default function ProjectsPage() {
  const [modalOpen, setModalOpen] = useState(false); // false คือ modal ปิด เป็นค่า default
  const [modalImage, setModalImage] = useState(""); // รูปภาพที่แสดงใน modal

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
          🚀 My Projects
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
                <CardTitle>Graduated Project</CardTitle>
                <CardDescription>
                  November 2024 - March 2025
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Item counting system for padding process of Majorette Thailand Co.,Ltd.</p>
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
                  <CardTitle>Handwritten digits recognition</CardTitle>
                  <CardDescription>
                    1 July 2024 - 31 August 2024
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Trained machine learning models using Convolutional Neural Network (CNN) on the MNIST dataset to recognize handwritten digits</p>
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
                <CardTitle>React Foundations Certificate</CardTitle>
                <CardDescription>
                  3 June 2025
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Completed the React Foundations course</p>
              </CardContent>

            </Card>
          </motion.div>
        </div>
      </div>
    </FadeInPage>
    </div>
  );
}
