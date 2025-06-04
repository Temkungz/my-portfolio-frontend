"use client";
import {motion} from "framer-motion";
import Image from "next/image";
import FadeInPage from "../components/fade";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-20">
          <FadeInPage>

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
          <motion.div whileHover={{scale: 1.05}} whileTap={{scale: 0.9}} >
            <Card className="h-full">{/* h-full ทำให้การ์ดใหญ่เท่ากัน */}
              
              <Image
                src="/image/mnist.png"
                alt="Mnist picture" 
                width={1200}
                height={800}
                className="object-cover w-auto h-auto "
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
