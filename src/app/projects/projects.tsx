"use client";
import {motion} from "framer-motion";
import Image from "next/image";
import FadeInPage from "../components/fade";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-20">
          <FadeInPage>

      <div className="container mx-auto px-4">

        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
          🚀 My Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* การ์ดผลงานที่ 1 */}
          <motion.div 
            className="bg-white rounded-lg shadow-md overflow-hidden"
            whileHover={{ scale: 1.05}}
            whileTap={{scale: 0.9}}>

                    <Image 
                    src="/image/majorrete.png"
                    alt="Graduate project picture"
                    width={1200}
                    height={800}
                    className="object-cover w-auto h-auto"
                    />  

            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-800">
                Graduated Project
              </h2>
              <p className="text-gray-600 mt-2">
                Item counting system for padding process of Majorette Thailand Co.,Ltd.
              </p>
            </div>
          </motion.div>

          {/* การ์ดผลงานที่ 2 */}
          <motion.div 
            className="bg-white rounded-lg shadow-md overflow-hidden"   
            whileHover={{ scale: 1.05}}
            whileTap={{scale: 0.9}}>

                    <Image
                    src="/image/mnist.png"
                    alt="Mnist picture"
                    width={1200}
                    height={800}
                    className="object-cover w-auto h-auto" // object-cover คือการปรับขนาดรูปภาพให้เข้ากับการ์ด
                    // w-auto h-auto คือการปรับขนาดการ์ดให้เข้ากับรูปภาพ
                    />

            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-800">
                CNN project by MNIST
              </h2>
              <p className="text-gray-600 mt-2">
                Trained machine learning models using the MNIST dataset to recognize handwritten digits
              </p>
            </div>
          </motion.div>

          {/* การ์ดผลงานที่ 3 */}
          <motion.div 
            className="bg-white rounded-lg shadow-md overflow-hidden"
            whileHover={{scale: 1.05}}           
            whileTap={{scale: 0.9}}>

                    <Image
                    src="/image/react-foundations-certificate.png"
                    alt="React Foundation Certificate"
                    width={1200}
                    height={800}
                    className="object-cover w-auto h-auto"
                    />

              <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800">
                  React Foundations Certificate
                </h2>
                <p className="text-gray-600 mt-2">
                  Completed the React Foundations course
                </p>
              </div>
          </motion.div>
        </div>
      </div>
    </FadeInPage>
    </div>
  );
}
