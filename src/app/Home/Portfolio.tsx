"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";


export default function Portfolio(){
    return(
    <div className="order-1 md:order-2 w-full md:w-2/3 bg-white p-10 ">
        <div className="text-center mt-10">
            <h1 className="text-xl lg:text-5xl font-bold">My Portfolio</h1>
            <div className="flex flex-col items-center justify-center">
  <div className="w-96 h-96 rounded-full overflow-hidden shadow-lg bg-gray-200">
    <Image 
      src="/image/IMG_3749.PNG"
      alt="Profile Picture"
      width={384}
      height={384}
      className="object-cover"
    />
  </div>
  <h1 className="mt-6 text-2xl font-bold">Your Name</h1>
  <p className="text-gray-600">Frontend Developer</p>
</div>
      </div>
    </div>
    );
}