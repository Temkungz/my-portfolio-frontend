"use client";
import { motion } from "framer-motion";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Portfolio from "./Home/Portfolio";
import Introduction from "./Home/Introduction";


export default function Home() {
  return (
    
    <div className="min-h-screen flex flex-col md:flex-row">
      <Introduction/>
      <Portfolio/>
    </div>
  );
}
