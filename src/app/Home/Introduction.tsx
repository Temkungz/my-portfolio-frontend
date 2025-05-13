import Timeline from "@/components/ui/Timeline";
import Image from "next/image";
import { Phone, Mail, Home } from "lucide-react";

export default function Introduction(){
return(
   <aside className="order-1 md:oreder-2 w-full md:w-2/3 px-10 pt-20 flex flex-col justify-between bg-gray-100 " >
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
      <h1 className="md:text-4xl text-xl font-bold flex flex-wrap">Sahaphap prommanok</h1>
      <p className="text-gray-600 py-2 text-center">Frontend Developer</p>          
      <h1 className="text-xl sm:text-xl md:text-4xl lg:text-4xl font-bold   text-gray-800 mb-4 pt-4">
        About me
      </h1>
      <p className="text-lg md:text-xl  text-gray-600 mb-6  max-w-xl">
        "Hello, I'm Sahaphap Prommanok, commonly known as TEM. I'm currently seeking a position as a Full-Stack.
        I have a strong interest in this field and aspire to enhance my skills further.
        The reason I am keen to join your company is due to its excellent reputation and positive work environment.
        I hope to have the opportunity to work alongside your team and contribute to the success of the company."
      </p>

      <h1 className="text-4xl font-bold text-gray-800 mb-4 pt-4">
        Language
      </h1>
      <ul className="text-lg md:text-xl list-disc list-inside text-gray-600 mb-6 max-w-xl">
        <li>English (basic)</li>
        <li>Thai (Native)</li>
      </ul>
     
     
      <h1 className="text-4xl font-bold text-gray-800 mb-10 pt-4">
        Contact Me
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
            99/275 Moo 6, Pornthaweewat Village Project 3,<br/> 
            Khlong Song Subdistrict,Khlong Luang District,<br/> 
            Pathum Thani 12120, Thailand
          </span>
        </li>
      </ul>
      
    </div>
  </aside>

    );
}