// app/Home/Portfolio.tsx
"use client";
import { Phone, Mail, Home, } from "lucide-react";
import FadeInPage from "../components/fade";
import Image from "next/image";
import { motion, spring } from "framer-motion";


export default function Portfolio() {
  const Language = ["English (basic)","Thai (Native)"];
  return (
   
    <main className="order-1 md:order-2 w-full md:w-2/3 bg-white p-10 ">
       <FadeInPage>
      <div className="mt-10">
        {/* Title */}
        <h1 className="text-xl sm:text-xl md:text-4xl lg:text-4xl font-bold   text-gray-800 mb-4 pt-4">
          About me
        </h1>

         {/* About */}
        <p className="text-lg md:text-xl  text-gray-600 mb-6  max-w-xl">
          "Hello, I'm Sahaphap Prommanok, commonly known as TEM. I'm currently seeking a position as a Full-Stack.
          I have a strong interest in this field and aspire to enhance my skills further.
          The reason I am keen to join your company is due to its excellent reputation and positive work environment.
          I hope to have the opportunity to work alongside your team and contribute to the success of the company."
        </p>

         {/* Language */}
        <h1 className="text-4xl font-bold text-gray-800 mb-4 pt-4">
          Language
        </h1>
        <ul className="text-lg md:text-xl list-disc list-inside text-gray-600 mb-6 ">
          {Language.map((lang,index) =>(
            <li key={index}>{lang}</li>
          ))}
        </ul>

        <h1 className="text-4xl font-bold text-gray-800 mb-4 pt-4">
          Social Media
        </h1>
        <ul className="grid grid-cols-3 gap-3 text-lg md:text-xl text-gray-600 mb-6 ">
          <li className="flex items-center">
            <div className="w-8 h-8 mr-2 bg-white rounded-full overflow-hidden flex items-center justify-center">
              <Image 
              src="/image/facebook.svg"
              alt="facebook"
              width={32}
              height={32}
              className="object-cover"/> 
              </div>            
          
            <motion.a 
              href="https://web.facebook.com/koon.tem/" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ paddingLeft: 8, paddingRight: 8}}
              whileTap={{scale: 0.9}}
              transition={{type: "spring", stiffness: 300}}
              className="cursor-pointer hover:bg-black hover:text-white transition-colors duration-300  rounded-full"
              >
              Facebook
            </motion.a>
          </li>

          <li className="flex items-center">
            <div className="w-8 h-8 mr-2 bg-white rounded-full overflow-hidden flex items-center justify-center">
              <Image
              src="/image/instagram.svg"
              alt="instagram"
              width={28}
              height={28}
              className="object-cover" />
            </div>
            <motion.a 
            href="https://www.instagram.com/tem.kungz/?hl=th"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{paddingLeft: 9, paddingRight: 8}}
            whileTap={{scale: 0.9}}
            transition={{type:"spring", stiffness: 300}}
            className="cursor-pointer hover:bg-black hover:text-white transition-colors duration-300 rounded-full"
            >
              Instagram
            </motion.a>
          </li>

          <li className="flex items-start">
            <div className="w-8 h-8 mr-2 bg-white rounded-full overflow-hidden flex items-center justify-center">
              <Image 
              src="/image/github.svg"
              alt="github"
              width={32}
              height={32}
              className="object-cover" 
              />
            </div>
            <motion.a
            href="https://github.com/Temkungz"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{paddingLeft:8,paddingRight:8}}
            whileTap={{scale:0.9}}
            transition={{type:"spring",stiffness:300}}
            className="cursor-pointer hover:bg-black hover:text-white  transition-colors duration-300 rounded-full" 
            >
              Github
            </motion.a>
          </li>

          <li className="flex items-start">
            <div className="w-8 h-8 mr-2 bg-white rounded-full overflow-hidden flex items-center justify-center">
              <Image 
              src="/image/steam.svg"
              alt="github"
              width={32}
              height={32}
              className="object-cover" 
              />
            </div>
            <motion.a
            href="https://steamcommunity.com/id/koontem"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{paddingLeft:8,paddingRight:8}}
            whileTap={{scale:0.9}}
            transition={{type:"spring",stiffness:300}}
            className="cursor-pointer hover:bg-black hover:text-white  transition-colors duration-300 rounded-full" 
            >
              Steam
            </motion.a>
          </li>

          <li className="flex items-start">
            <div className="w-8 h-8 mr-2 bg-white rounded-full  flex items-center justify-center">
              <Image 
              src="/image/linkedin.svg"
              alt="linkedin"
              width={30}
              height={30}
              className="object-cover" 
              />
            </div>
            <motion.a
            href="https://www.linkedin.com/in/temkung"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{paddingLeft:8,paddingRight:8}}
            whileTap={{scale:0.9}}
            transition={{type:"spring",stiffness:300}}
            className="cursor-pointer hover:bg-black hover:text-white  transition-colors duration-300 rounded-full" 
            >
              LinkedIn
            </motion.a>
          </li>

          <li className="flex items-start">
            <div className="w-8 h-8 mr-2 bg-white rounded-full flex items-center justify-center">
              <Image 
              src="/image/x.svg"
              alt="twitter"
              width={32}
              height={32}
              className="object-cover" 
              />
            </div>
            <motion.a
            href="https://x.com/temkung5"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{paddingLeft:8,paddingRight:8}}
            whileTap={{scale:0.9}}
            transition={{type:"spring",stiffness:300}}
            className="cursor-pointer hover:bg-black hover:text-white  transition-colors duration-300 rounded-full" 
              >
                X
          
            </motion.a>
          </li>
        </ul>
      </div>
      </FadeInPage>
    </main>
  );
}