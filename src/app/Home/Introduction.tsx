"use client"
import Image from "next/image";
import { Phone, Mail, Home } from "lucide-react";
import {motion} from "framer-motion"
import FadeInPage from "../components/fade";
import { useLanguage } from "../contexts/LanguageContext";

export default function Introduction(){
    const {t} = useLanguage() as {t: (key: string) => string | string[]}; // กำหนด type ของ t เป็น string หรือ array ของ string
    const address = t("address"); // ดึงค่า address จาก t

    if(!Array.isArray(address)) return null; // ถ้าไม่ใช่ array ก็ให้เป็น null
    
return(


   <aside className="order-1 md:oreder-2 w-full md:w-2/3 px-10 pt-20 flex flex-col justify-between bg-gray-100 " >
    <FadeInPage>
      {/* <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: 0.75 }}
    > */}

      <div className="flex flex-col items-center justify-center">
        <div className="w-96 h-96 rounded-full overflow-hidden shadow-xl bg-gray-200 ">
          <Image 
            src="/image/IMG_3749.PNG"
            alt="Profile Picture"
            width={384}
            height={384}
            className="object-cover"
            />            
        </div>
        <h1 className="md:text-4xl text-xl font-bold flex flex-wrap">{t("fullname")}</h1>
        <p className="text-gray-600 py-2 text-center">{t("fullstack")}</p>          
        <h1 className="text-4xl font-bold text-gray-800 mb-10 pt-4">
          {t("contactme")}
        </h1>
        <ul className="text-lg md:text-xl text-gray-600 mb-6 max-w-xl space-y-4">
          <li className="flex items-center">
            <div className="w-8 h-8 mr-2 bg-gray-300 rounded-full flex items-center justify-center">
              <Phone className="w-4 h-4 text-gray-800" />
            </div>
            0917202227
          </li>
          <li className="flex items-center">
            <div className="w-8 h-8 mr-2 bg-gray-300 rounded-full flex items-center justify-center">
              <Mail className="w-4 h-4 text-gray-800" />
            </div>
            koontem1@gmail.com
          </li>
          <li className="flex items-start">
            <div className="w-8 h-8 mr-4 bg-gray-300 rounded-full flex items-center justify-center">
              <Home className="w-4 h-4 text-gray-800" />
            </div>
            <span>
              {/* Ternary operator =>  condition ? if true : if false */}
              {Array.isArray(address) ? address.map((address, index) => ( //ถ้าเป็น array ก็ให้แสดงผลตามนี้
                <span key={index}>
                  {address}
                  <br />
                </span>
              )) : address} {/* : คือ ถ้าไม่ใช่ array ก็ให้เป็น string */}
            </span>
          </li>
        </ul>
        


     
      
    </div>
    </FadeInPage>
    {/* </motion.div> */}
  </aside>


    );
};