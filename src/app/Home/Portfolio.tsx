"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Cursor from "../cursor/cursor";
import TimelineItem from "@/components/ui/Timelineitem";
import Timeline from "@/components/ui/Timeline";

export default function Portfolio(){
    const name = "sahaphap prommanok";

    return(

    <main className="order-2 md:order-1 w-full md:w-2/3 bg-white p-10 relative " >
        <Cursor/>
        <div className="text-center mt-10">
            <h1 className="text-xl md:text-4xl font-bold mb-10">University Experience</h1>
            <div className="flex flex-col items-center justify-center">
            <Timeline />
            </div>
        </div>
    </main>
    );
}